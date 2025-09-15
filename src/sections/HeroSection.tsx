"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => (
  <motion.section
    id="home"
    className="section flex-col text-center relative overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.0 }}
    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
  >
    {/* Subtle background accent */}
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--accent)]/5 pointer-events-none" />
    
    <div className="relative z-10 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          <span className="text-[var(--foreground)]">John Michael</span>
          <br />
          <span className="bg-gradient-to-r from-[var(--accent)] to-blue-400 bg-clip-text text-transparent">
            Guerra
          </span>
        </h1>
        
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-[var(--accent)] to-blue-400 mx-auto mb-6 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />
        
        <h2 className="text-2xl md:text-3xl font-medium mb-4 text-[var(--accent)] uppercase tracking-wide">
          Software Engineer
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
          Building clean, modern web experiences
        </p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 255, 208, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[var(--accent)] to-blue-400 text-black font-bold rounded-full text-lg transition-all duration-300 hover:shadow-2xl"
          >
            View My Work
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[var(--accent)] text-[var(--accent)] font-bold rounded-full text-lg transition-all duration-300 hover:bg-[var(--accent)] hover:text-black"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

export default HeroSection;
