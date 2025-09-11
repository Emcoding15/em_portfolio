import { NextRequest } from 'next/server';
import { OpenAI } from '@langchain/openai';
// import { RetrievalQAChain } from 'langchain/chains';

// Example: static portfolio data for retrieval
const portfolioData = [
  { id: 1, content: 'Em is a web developer specializing in Next.js and TypeScript.' },
  { id: 2, content: 'Projects include a portfolio website, e-commerce app, and blog.' },
  { id: 3, content: 'Contact Em via the contact form for freelance opportunities.' },
];

// Simple retrieval: find the most relevant data chunk
function retrieveRelevantContext(message: string) {
  // For demo: return all data. Replace with semantic search/vector DB for production.
  return portfolioData.map(d => d.content).join(' ');
}

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  const context = retrieveRelevantContext(message);

  const openai = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0.2,
  });

  // Direct prompt approach for demo
  const prompt = `Context: ${context}\n\nUser: ${message}\n\nAnswer:`;
  const answer = await openai.call(prompt);
  return Response.json({ answer });
}
