"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl shadow-md shadow-black/40"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo/Brand Static */}
          <div>
            <Link 
              href="/" 
              className="text-2xl relative"
            >
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: 1,
                  textShadow: '0 2px 4px #0000004d',
                  color: 'inherit',
                  display: 'inline-block',
                }}
              >
                <span>
                  <span style={{ color: 'var(--accent)' }}>EM</span>
                  <span style={{ color: 'var(--accent)', opacity: 0.5 }}>CODING</span>
                </span>
              </span>
            </Link>
          </div>
          {/* Navigation Links with Active Indicator and Resume Button */}
          <nav className="hidden md:flex space-x-8 items-center">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" }
            ].map((item, index) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Link 
                    href={item.href} 
                    className={`font-medium relative group transition-all duration-300 ${
                      isActive 
                        ? 'text-[var(--accent)]' 
                        : 'text-gray-300 hover:text-[var(--accent)]'
                    }`}
                  >
                    {item.label}
                    {/* Active indicator */}
                    <motion.span 
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[var(--accent)] to-blue-400"
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? "100%" : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Hover effect */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--accent)] to-blue-400 group-hover:w-full transition-all duration-300"></span>
                    
                    {/* Glassmorphism hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-[var(--accent)]/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
            {/* Download Resume Button */}
            <a
              href="/CV%20-%20Guerra(Latest).pdf"
              download
              className="ml-4 pl-3 pr-4 py-2 rounded-full bg-[var(--accent)]/10 hover:bg-[var(--accent)]/20 text-[var(--accent)] transition-colors duration-150 flex items-center gap-1"
              style={{ textDecoration: 'none', fontSize: '0.98rem', fontWeight: 500 }}
              title="Download CV"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              <span className="ml-1 text-[var(--accent)] text-xs" style={{fontWeight: 500}}>Download CV</span>
            </a>
          </nav>

          {/* Mobile Menu Button with enhanced animation */}
          <motion.button
            className="md:hidden text-[var(--accent)] p-2 relative"
            whileHover={{ 
              scale: 1.1,
              rotate: 180,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 bg-[var(--accent)]/20 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
        
        {/* Animated glowing pulse border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
          style={{ transform: 'scaleX(0.9)' }}
          animate={{ opacity: [0.3, 1, 0.3], filter: [
            'brightness(1)',
            'brightness(2)',
            'brightness(1)'
          ] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </header>
    </>
  );
}
