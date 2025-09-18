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
    <div className="relative z-10 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
      >
          <h1 className="font-extrabold text-[4rem] md:text-[6rem] text-[var(--foreground)] leading-none mb-2" style={{letterSpacing: '-2px', fontFamily: 'Poppins, sans-serif'}}>John Guerra</h1>
          <h2 className="font-bold text-[2rem] md:text-[2.5rem] text-gray-400 mb-6" style={{letterSpacing: '-1px', fontFamily: 'Poppins, sans-serif'}}>Software Developer</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8" style={{fontFamily: 'Poppins, sans-serif'}}>Building clean, modern web experiences</p>
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
            Let&apos;s Connect
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

export default HeroSection;
