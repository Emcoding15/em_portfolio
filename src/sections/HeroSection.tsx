"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => (
  <motion.section
    id="home"
    className="section flex-col text-center"
    style={{ background: "var(--background)" }}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 1.7, ease: "easeInOut" }}
  >
    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-[var(--foreground)]">John Michael Guerra</h1>
    <h2 className="text-xl md:text-2xl font-medium mb-2 text-[var(--accent)]">Software Engineer</h2>
    <p className="text-lg md:text-xl text-gray-300 mb-6">Building clean, modern web experiences.</p>
  </motion.section>
);

export default HeroSection;
