import React from "react";
import BackButton from "@/components/BackButton";

export default function AICaptionerPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 relative">
      <BackButton label="Back to Projects" />
      <h1 className="text-4xl font-bold mb-4 text-[var(--accent)]">AI Image Captioning App</h1>
      <p className="mb-6 text-lg text-gray-300">
        This is a Next.js web app that uses Google Gemini AI to generate captions for uploaded images. Users can provide their own Gemini API key for privacy and flexibility.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-1">
          <li>Upload an image and get an AI-generated caption</li>
          <li>Modern, responsive UI with Tailwind CSS</li>
          <li>Settings page to securely store your own Gemini API key (in your browser only)</li>
          <li>Debug info for troubleshooting API issues</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-1">
          <li>Next.js, React, TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Google Gemini AI</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">How to Use</h2>
        <ol className="list-decimal list-inside text-gray-200 space-y-1">
          <li>Install dependencies: <code>npm install</code></li>
          <li>Start the development server: <code>npm run dev</code></li>
          <li>Open the app: Go to <code>http://localhost:3000</code> in your browser.</li>
          <li>Add your Gemini API key via the Settings page. Your key is stored only in your browser.</li>
          <li>Upload an image and click <b>Generate Caption</b> to get your result.</li>
        </ol>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Links</h2>
        <a
          href="https://github.com/Emcoding15/ai_captioner"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] underline font-medium"
        >
          View on GitHub
        </a>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Why do I need to add my own API key?</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-1">
          <li><b>Privacy:</b> Your API key is never shared with the app creator or other users.</li>
          <li><b>Security:</b> You control your own usage and quota.</li>
          <li><b>Flexibility:</b> You can use your own Google Cloud project and manage billing/limits.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Troubleshooting</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-1">
          <li>If you see <code>No caption generated</code> or errors, check the Debug Info section for details.</li>
          <li>Make sure your API key has access to the Gemini API and the correct model (e.g., <code>gemini-2.5-pro</code>).</li>
          <li>If you need help, check the Google Gemini API documentation or your Google Cloud Console.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
        <p className="text-gray-300 mb-2">
          AI Captioner is a web application that leverages Google Gemini AI to generate descriptive captions for uploaded images. Designed for accessibility and productivity, it features a modern UI, secure API key handling, and real-time captioning. The app is ideal for content creators, educators, and anyone needing quick, accurate image descriptions.
        </p>
        <p className="text-gray-300">
          Your API key and data remain private, and the intuitive interface ensures a seamless user experience. Explore the features and try generating captions for your own images!
        </p>
      </section>
    </main>
  );
}
