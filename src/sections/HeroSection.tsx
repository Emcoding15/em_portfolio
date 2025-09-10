import React from "react";

const HeroSection: React.FC = () => (
  <section id="home" className="section flex-col text-center" style={{ background: "var(--background)" }}>
    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-[var(--foreground)]">John Michael Guerra</h1>
    <h2 className="text-xl md:text-2xl font-medium mb-2 text-[var(--accent)]">Software Engineer</h2>
    <p className="text-lg md:text-xl text-gray-300 mb-6">Building clean, modern web experiences.</p>
  </section>
);

export default HeroSection;
