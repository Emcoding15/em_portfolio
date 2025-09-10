
"use client";
import React from "react";
import { motion } from "framer-motion";
import SkillTag from "../components/SkillTag";
import { skillGroups } from "../data/skills";

const AboutSection: React.FC = () => (
  <motion.section
    id="about"
    className="section flex-col text-center"
    style={{ background: "var(--background)" }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[var(--accent)]">About Me</h2>
    <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-8">
      Hello! I'm a recent Computer Science graduate with a passion for building cross-platform applications. My journey in software development started during my university coursework and has expanded through personal projects and internships.<br /><br />
      I enjoy solving complex problems and creating efficient, user-friendly applications. My diverse skill set allows me to work on various platforms – from mobile apps to desktop software and backend systems.
    </p>
    <div className="flex flex-row justify-between items-start gap-6 mt-4 overflow-x-auto w-full">
      {skillGroups.map((group) => (
        <div
          key={group.category}
          className="w-80 flex flex-col items-center border border-dashed border-[var(--accent)] overflow-visible"
        >
          <h3 className="text-lg font-semibold text-[var(--accent)] mb-2 text-center whitespace-nowrap">{group.category}</h3>
          <div className="flex flex-row flex-wrap gap-3 w-full justify-center">
            {group.skills.map((skill) => (
              <SkillTag
                key={skill.label}
                imgUrl={skill.imgUrl}
                label={skill.label}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

export default AboutSection;
