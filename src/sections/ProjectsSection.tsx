"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Minimal Blog Platform",
    description: "A clean, markdown-based blog with Next.js and Tailwind.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with scroll-snap and smooth animations.",
    link: "#",
  },
  {
    title: "Open Source UI Kit",
    description: "Reusable React components for modern web apps.",
    link: "#",
  },
];

const ProjectsSection: React.FC = () => (
  <motion.section
    id="projects"
    className="section flex-col text-center"
    style={{ background: "var(--background)" }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[var(--accent)]">Projects</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {projects.map((project, idx) => (
        <a
          key={idx}
          href={project.link}
          className="group bg-[var(--gray)] border border-gray-700 rounded-xl p-6 w-72 shadow-sm transition-transform hover:-translate-y-2 hover:shadow-lg hover:border-[var(--accent)]"
          style={{ textDecoration: "none" }}
        >
          <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors text-[var(--foreground)]">{project.title}</h3>
          <p className="text-gray-400 mb-2">{project.description}</p>
          <span className="text-[var(--accent)] font-medium group-hover:underline">View Project →</span>
        </a>
      ))}
    </div>
  </motion.section>
);

export default ProjectsSection;