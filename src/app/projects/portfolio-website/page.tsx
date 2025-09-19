
import React from "react";
import BackButton from "@/components/BackButton";

export default function PortfolioWebsitePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <BackButton label="Back to Projects" />
      <h1 className="text-4xl font-bold mb-4 text-[var(--accent)]">Portfolio Website</h1>
      <p className="mb-6 text-lg text-gray-300">
        A modern, responsive portfolio built with Next.js, TypeScript, and Tailwind CSS. Features a homepage introduction, about section, project showcase with details pages, contact form, starfield background, and a RAG chatbot powered by n8n, Supabase, and Hugging Face embeddings.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-1">
          <li>Modern, responsive design with starfield background</li>
          <li>Homepage, About, Projects, and Contact sections</li>
          <li>Project details pages for featured work</li>
          <li>Animated UI with Framer Motion and Tailwind CSS</li>
          <li>Contact form with email and LinkedIn integration</li>
          <li>RAG chatbot using n8n, Supabase, and Hugging Face</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-1">
          <li>Next.js, TypeScript, Tailwind CSS, Framer Motion</li>
          <li>Supabase, n8n, Hugging Face, ESLint</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Links</h2>
        <a href="https://github.com/Emcoding15/em_portfolio" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] underline font-medium">View on GitHub</a>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
        <p className="text-gray-300 mb-2">
          This portfolio demonstrates modern web development best practices, including component-based architecture, semantic search, and AI-powered chatbot integration. The site is fully responsive and optimized for performance and accessibility.
        </p>
        <p className="text-gray-300">
          Explore the Projects section to see more details about featured work, or try the chatbot to experience the RAG-powered Q&A.
        </p>
      </section>
    </main>
  );
}
