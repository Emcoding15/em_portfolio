

import React from "react";
import ProjectScreenshotCard from "@/components/ProjectScreenshotCard";

import BackButton from "@/components/BackButton";


export default function AIDiaryPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 relative">
      <BackButton />
        <h1 className="text-4xl font-bold mb-4 text-[var(--accent)]">AI Diary</h1>
        <p className="mb-6 text-lg text-gray-300">
          An AI-powered, voice-first journal app that transforms your spoken thoughts into organized, searchable diary entries.
        </p>
        <div className="mb-8">
          <ProjectScreenshotCard
            image="/projects/ai_diary/screenshots/login.png"
            alt="AI Diary Login Screenshot"
            title="Login Page"
            description="Secure login with email, password, and Google Sign-In. Modern Material 3 UI."
          />
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>Multi-language voice transcription (English, Spanish, French, and more)</li>
            <li>AI-powered transcription, summarization, and insights (Google Gemini 2.5 Pro)</li>
            <li>Modern Material 3 UI, dark/light themes, responsive design</li>
            <li>Calendar view, dashboard, search/filter, favorites</li>
            <li>Secure cloud sync with Firebase, Google Sign-In</li>
            <li>Android app (other platforms planned)</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>Flutter, Dart</li>
            <li>Firebase, Auth, Firestore</li>
            <li>Google Gemini AI</li>
            <li>FFmpeg for audio processing</li>
            <li>Material 3 Design</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Links</h2>
          <a href="https://github.com/Emcoding15/AIDiary" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] underline font-medium">View on GitHub</a>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
          <p className="text-gray-300 mb-2">
            AI Diary revolutionizes personal journaling by eliminating the friction of typing. Simply speak your thoughts, and our advanced AI pipeline handles the rest—recording, transcribing, summarizing, and organizing your entries with intelligent titles and insights.
          </p>
          <p className="text-gray-300">
            Your data is securely synced across devices and protected with industry-standard encryption. The app is designed for privacy, accessibility, and a delightful user experience.
          </p>
        </section>
      </main>
    
  );
}
