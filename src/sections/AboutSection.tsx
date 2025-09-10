import React from "react";
import SkillTag from "../components/SkillTag";
import { skills } from "../data/skills";

const AboutSection: React.FC = () => (
  <section id="about" className="section flex-col text-center" style={{ background: "var(--background)" }}>
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[var(--accent)]">About Me</h2>
    <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-8">
      Hello! I'm a recent Computer Science graduate with a passion for building cross-platform applications. My journey in software development started during my university coursework and has expanded through personal projects and internships.<br /><br />
      I enjoy solving complex problems and creating efficient, user-friendly applications. My diverse skill set allows me to work on various platforms – from mobile apps to desktop software and backend systems.
    </p>
    <div className="flex flex-wrap gap-3 justify-center mt-4">
      {skills.map((skill) => (
        <SkillTag
          key={skill.label}
          imgUrl={skill.imgUrl}
          label={skill.label}
        />
      ))}
    </div>
  </section>
);

export default AboutSection;
