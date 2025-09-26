# Portfolio Website

This is a personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and ESLint. It features a homepage, about section, projects showcase, and contact form.

## Getting Started

1. Install dependencies:
   ```powershell
   npm install
   ```
2. Run the development server:
   ```powershell
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features
- Modern, responsive design
- Homepage introduction
- About section
- Projects showcase
- Contact form

## Tech Stack
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

### RAG Chatbot Data Ingestion with n8n

We have implemented a data ingestion pipeline using n8n to power a Retrieval-Augmented Generation (RAG) chatbot. This workflow processes PDF documents, generates embeddings, and stores them in a Supabase vector database.

The pipeline consists of the following steps:

1.  **File Download**: The workflow begins by downloading a PDF file from a specified source (e.g., Google Drive).
2.  **Text Extraction**: The binary data from the PDF is loaded, and the text content is extracted.
3.  **Text Splitting**: The extracted text is split into smaller, overlapping chunks using the Recursive Character Text Splitter. This is configured with a chunk size of 500 characters and an overlap of 100 characters to maintain context between chunks.
4.  **Embedding Generation**: Each text chunk is converted into a vector embedding using the `sentence-transformers/all-MiniLM-L6-v2` model from Hugging Face.
5.  **Vector Storage**: The text chunks and their corresponding embeddings are inserted into a Supabase table named `portfolios_vdb`, which is powered by the `pgvector` extension.

This automated workflow allows for efficient and scalable processing of documents to be used as a knowledge base for the RAG chatbot.

---
Replace placeholder content with your own information and projects.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


---

# Comprehensive Project Guide: Portfolio RAG Chatbot with n8n, Supabase, and Next.js

## Project Overview

This project is a personal portfolio website enhanced with a Retrieval-Augmented Generation (RAG) chatbot. The chatbot can answer questions using knowledge ingested from PDF documents. The ingestion pipeline is automated using n8n, embeddings are generated via Hugging Face, and semantic search is performed using Supabase’s pgvector extension. The frontend is built with Next.js, TypeScript, and Tailwind CSS.

## Core Logic and Concepts

- **RAG Architecture:** Combines a vector database (Supabase pgvector) with a language model to answer user queries using relevant document chunks.
- **Automated Ingestion:** n8n workflow extracts text from PDFs, splits it into chunks, generates embeddings, and stores them in Supabase.
- **Semantic Search:** Next.js API route generates query embeddings and retrieves relevant chunks from Supabase using a custom SQL function.
- **Frontend Integration:** The chatbot UI sends user questions to the API, receives context, and generates answers.

**Why these choices?**
- **Supabase pgvector:** Free, scalable, and easy to use for vector search.
- **n8n:** No-code/low-code automation for document ingestion.
- **Hugging Face:** Reliable, free embedding generation.
- **Next.js:** Modern, full-stack React framework.

## Code Walkthrough

### n8n PDF-to-Vector Ingestion Pipeline

**Purpose:** Automates the process of extracting text from PDFs, chunking, embedding, and storing in Supabase.

**Key Steps:**
1. **Download file:** Downloads PDF from Google Drive.
2. **Default Data Loader:** Loads binary data and extracts text.
3. **Recursive Character Text Splitter:** Splits text into chunks (e.g., size 500, overlap 100).
4. **Embeddings HuggingFace Inference:** Generates 384-dim embeddings for each chunk.
5. **Supabase Vector Store:** Inserts chunks and embeddings into the `documents` table.

**Dependencies:** n8n, Hugging Face Inference API, Supabase pgvector

**Example Usage:** Upload a PDF to Google Drive, execute n8n workflow, and verify chunks/embeddings in Supabase.

### Supabase Vector Database & Semantic Search Function

**Purpose:** Stores document chunks and enables semantic search via vector similarity.

**Key Code Snippet (SQL):**
```sql
CREATE TABLE documents (
   id bigserial PRIMARY KEY,
   content text,
   metadata jsonb,
   embedding vector(384)
);

CREATE FUNCTION match_documents (
   query_embedding vector(384),
   match_count int DEFAULT null,
   filter jsonb DEFAULT '{}'
) RETURNS TABLE (
   id bigint,
   content text,
   metadata jsonb,
   similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
   RETURN QUERY
   SELECT
      documents.id,
      documents.content,
      documents.metadata,
      1 - (documents.embedding <=> query_embedding) AS similarity
   FROM documents
   WHERE documents.metadata @> filter
   ORDER BY documents.embedding <=> query_embedding
   LIMIT match_count;
END;
$$;
```

**Dependencies:** Supabase, pgvector extension

**Example Usage:** Call `match_documents` via REST API to retrieve top-k relevant chunks.

### Next.js Semantic Search API Route

**Purpose:** Accepts user queries, generates embeddings, and retrieves relevant context from Supabase.

**Key Code Snippet (TypeScript):**
```typescript
export async function POST(request: Request) {
   const { query } = await request.json();
   // Generate embedding using Hugging Face
   const embeddingResponse = await fetch(HF_URL, { ... });
   const embedding = await embeddingResponse.json();
   // Query Supabase
   const supabaseResponse = await fetch(`${SUPABASE_URL}/rest/v1/rpc/match_documents`, {
      method: 'POST',
      headers: { ... },
      body: JSON.stringify({
         filter: {},
         match_count: 5,
         query_embedding: embedding
      }),
   });
   const results = await supabaseResponse.json();
   return NextResponse.json({ results });
}
```

**Dependencies:** Next.js, Hugging Face Inference API, Supabase REST API

**Example Usage:** Send a POST request to `/api/semantic-search` with `{ "query": "your question" }`.

### Chatbot Frontend Integration

**Purpose:** Sends user questions to the semantic search API and displays answers.

**Key Code Snippet (React):**
```typescript
async function getChatbotAnswer(query: string) {
   const res = await fetch('/api/semantic-search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
   });
   const { results } = await res.json();
   // Use results as context for LLM or display directly
}
```

**Dependencies:** React, Next.js

**Example Usage:** User types a question, chatbot fetches context, and displays an answer.

## Setup and Installation

1. **Clone the repository**
2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Configure environment variables in `.env.local`**
    ```
    HUGGINGFACE_API_KEY=your_huggingface_api_key
    SUPABASE_URL=https://your-supabase-url.supabase.co
    SUPABASE_KEY=your_supabase_service_role_key
    ```
4. **Run the development server**
    ```bash
    npm run dev
    ```
5. **Set up Supabase**
    - Enable pgvector extension
    - Create `documents` table and `match_documents` function
6. **Configure and run n8n workflow**
    - Set up Google Drive, Hugging Face, and Supabase nodes

