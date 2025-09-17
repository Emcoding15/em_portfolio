
"use client";
import React from "react";
import { motion } from "framer-motion";
import SkillTag from "../components/SkillTag";
import { skillGroups } from "../data/skills";

const AboutSection: React.FC = () => (
  <motion.section
    id="about"
    className="section flex-col relative"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.0 }}
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
          About <span className="text-[var(--accent)]">Me</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[var(--accent)] to-blue-400 mx-auto mb-8 rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            Hello! I'm a recent Computer Science graduate with a passion for building cross-platform applications. My journey in software development started during my university coursework and has expanded through personal projects and internships.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            I enjoy solving complex problems and creating efficient, user-friendly applications. My diverse skill set allows me to work on various platforms – from mobile apps to desktop software and backend systems.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-[var(--gray)] to-[#0f0f0f] rounded-2xl p-8 border border-[var(--accent)]/20"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3 className="text-2xl font-bold text-[var(--accent)] mb-4">Quick Facts</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
              <span className="text-gray-300">Computer Science Graduate</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
              <span className="text-gray-300">Full-Stack Developer</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
              <span className="text-gray-300">Cross-Platform Specialist</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <h3 className="text-3xl font-bold text-center mb-12 text-[var(--foreground)]">
        My <span className="text-[var(--accent)]">Skills</span>
      </h3>
      <div className="w-full px-0 sm:px-4 lg:px-8 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.category}
            className="bg-gradient-to-br from-[var(--gray)] to-[#0f0f0f] rounded-2xl p-6 border border-[var(--accent)]/20 hover:border-[var(--accent)]/40 transition-colors duration-150"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.8 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            // Removed lift and shadow on hover to match Project section
          >
            <h4 className="text-lg font-semibold text-[var(--accent)] mb-4 text-center">{group.category}</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {group.skills.map((skill) => (
                <SkillTag
                  key={skill.label}
                  imgUrl={skill.imgUrl}
                  label={skill.label}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.section>
);

export default AboutSection;
