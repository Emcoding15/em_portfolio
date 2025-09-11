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

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
