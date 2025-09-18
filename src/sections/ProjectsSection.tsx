"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Diary(AID)",
  description: "An AI-powered, voice-first journal app that transforms your spoken thoughts into organized, searchable diary entries. Features multi-language transcription, AI-powered summarization and insights, modern Material 3 UI, calendar view, and secure cloud sync.",
    tech: ["Flutter", "Dart", "Firebase", "Google Gemini AI", "FFmpeg", "Material 3"],
  link: "/projects/ai-diary",
    status: "Active"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with Next.js, TypeScript, and Tailwind CSS. Features a homepage introduction, about section, project showcase with details pages, contact form, starfield background, and a RAG chatbot powered by n8n, Supabase, and Hugging Face embeddings.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "n8n", "Hugging Face", "ESLint"],
  link: "/projects/portfolio-website",
    status: "Live"
  },
  {
    title: "AI Captioner",
  description: "A Next.js web app that uses Google Gemini AI to generate captions for uploaded images. Features a modern, responsive UI, secure API key storage, and real-time AI captioning for accessibility and productivity.",
  tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Google Gemini AI"],
  link: "/projects/ai-captioner",
    status: "Active"
  },
];

const ProjectsSection: React.FC = () => (
  <motion.section
    id="projects"
    className="section flex-col relative"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.0}}
    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
  >
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--foreground)]">
          Featured <span className="text-[var(--accent)]">Projects</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[var(--accent)] to-blue-400 mx-auto mb-8 rounded-full" />
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A showcase of my recent work, from web applications to open-source contributions
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="group relative bg-gradient-to-br from-[var(--gray)] to-[#0f0f0f] rounded-2xl p-8 border border-[var(--accent)]/20 hover:border-[var(--accent)]/60 overflow-hidden transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,255,208,0.15)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                project.status === 'Active' ? 'bg-[var(--accent)]/20 text-[var(--accent)]' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {project.status}
              </span>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-200">
                {project.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIdx) => (
                  <span 
                    key={techIdx}
                    className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-medium border border-[var(--accent)]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <motion.a
                href={project.link}
                className="inline-flex items-center gap-2 text-[var(--accent)] font-bold hover:text-blue-400 transition-colors duration-200 group-hover:gap-3"
                whileHover={{ x: 5 }}
                style={{ textDecoration: "none" }}
              >
                View Project 
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>

            {/* Hover gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default ProjectsSection;