import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages = body.messages;
    let query = body.query;
    // If messages array is provided, use the last user message as query
    if (Array.isArray(messages) && messages.length > 0) {
      // Find the last user message
      const lastUserMsg = [...messages].reverse().find((m) => m.role === 'user');
      query = lastUserMsg?.text || query;
    }
    if (!query) {
      return NextResponse.json({ error: 'Missing query' }, { status: 400 });
    }

    // Check environment variables
    const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_KEY;

    if (!HUGGINGFACE_API_KEY || !SUPABASE_URL || !SUPABASE_KEY) {
      return NextResponse.json({ 
        error: 'Missing environment variables',
        missing: {
          HUGGINGFACE_API_KEY: !HUGGINGFACE_API_KEY,
          SUPABASE_URL: !SUPABASE_URL,
          SUPABASE_KEY: !SUPABASE_KEY
        }
      }, { status: 500 });
    }

    // Step 1: Get embedding from Hugging Face
    console.log('Getting embedding for query:', query);
    const embeddingResponse = await fetch(
      'https://router.huggingface.co/hf-inference/models/sentence-transformers/all-MiniLM-L6-v2/pipeline/feature-extraction',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: query }),
      }
    );

    if (!embeddingResponse.ok) {
      throw new Error(`Hugging Face API error: ${embeddingResponse.status} ${embeddingResponse.statusText}`);
    }

    const embeddingData = await embeddingResponse.json();
    console.log('Raw embedding response:', JSON.stringify(embeddingData).substring(0, 200));
    
    // The API returns a direct array of numbers
    const embedding = embeddingData;
    
    console.log('Processed embedding, length:', embedding?.length);

    if (!embedding || !Array.isArray(embedding)) {
      throw new Error('Invalid embedding format received from Hugging Face');
    }

    // Step 2: Search Supabase vector database
    console.log('Searching Supabase database...');
    const supabaseResponse = await fetch(`${SUPABASE_URL}/rest/v1/rpc/match_documents`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({ 
        filter: {},
        match_count: 5,
        query_embedding: embedding
      }),
    });

    console.log('Supabase response status:', supabaseResponse.status);
    
    if (!supabaseResponse.ok) {
      const errorText = await supabaseResponse.text();
      console.log('Supabase error response:', errorText);
      throw new Error(`Supabase API error: ${supabaseResponse.status} ${supabaseResponse.statusText}. Response: ${errorText}`);
    }

    const results = await supabaseResponse.json();
    console.log('Search results:', results?.length || 0, 'matches found');

    // Step 3: Call OpenRouter LLM with context and question
    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
    if (!OPENROUTER_API_KEY) {
      console.error('[ERROR] Missing OpenRouter API key. Check .env.local and environment setup.');
      return NextResponse.json({ error: 'Missing OpenRouter API key', env: process.env }, { status: 500 });
    }

    // Concatenate context from top results
    const context = results?.map((r: { content: string }) => r.content).join('\n\n') || '';
    // Build a conversation history for the LLM
    let chatHistory = '';
    if (Array.isArray(messages)) {
      chatHistory = messages.map((m) => `${m.role === 'user' ? 'User' : 'Bot'}: ${m.text}`).join('\n');
    }
  const prompt = `You are Em's friendly portfolio assistant. Use the context below to answer the user's question. If you don't know, say so. Be detailed, thorough, and helpful. When possible, provide step-by-step explanations, examples, or additional insights.\n\nContext:\n${context}\n\nConversation so far:\n${chatHistory}\n\nAnswer:`;

    // Log request details for debugging
    console.log('[DEBUG] OpenRouter request:', {
      endpoint: 'https://openrouter.ai/api/v1/chat/completions',
      model: 'nvidia/nemotron-nano-9b-v2:free',
      apiKeyPresent: !!OPENROUTER_API_KEY,
      promptPreview: prompt.substring(0, 200)
    });

    let llmRes;
    try {
      llmRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'nvidia/nemotron-nano-9b-v2:free', // Best free model as of Sep 2025
          messages: [
            { role: 'system', content: 'You are a helpful assistant for portfolio Q&A.' },
            { role: 'user', content: prompt }
          ],
          max_tokens: 1200,
          temperature: 0.5
        }),
      });
    } catch (err) {
      console.error('[ERROR] OpenRouter fetch failed:', err);
      return NextResponse.json({ error: 'OpenRouter fetch failed', details: String(err) }, { status: 500 });
    }

    if (!llmRes.ok) {
      const errorText = await llmRes.text();
      console.error('[ERROR] OpenRouter LLM error:', {
        status: llmRes.status,
        statusText: llmRes.statusText,
        errorText,
        apiKeyPresent: !!OPENROUTER_API_KEY
      });
      return NextResponse.json({ error: 'OpenRouter LLM error', details: errorText, status: llmRes.status, statusText: llmRes.statusText }, { status: 500 });
    }

    let llmData;
    try {
      llmData = await llmRes.json();
    } catch (err) {
      console.error('[ERROR] Failed to parse OpenRouter response as JSON:', err);
      return NextResponse.json({ error: 'Failed to parse OpenRouter response as JSON', details: String(err) }, { status: 500 });
    }

    const llmAnswer = llmData.choices?.[0]?.message?.content || 'No answer generated.';

    // Log LLM answer for debugging
    console.log('[DEBUG] OpenRouter LLM answer:', llmAnswer.substring(0, 200));

    return NextResponse.json({
      query,
      results,
      llmAnswer,
      embedding_length: embedding?.length
    });

  } catch (error) {
    console.error('Semantic search error:', error);
    const errMsg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}
