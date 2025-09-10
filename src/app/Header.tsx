"use client";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300
        ${scrolled ? "bg-black/80 backdrop-blur border-b border-gray-800 shadow-lg py-2" : "bg-transparent py-4"}`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6">
  <span className="text-xl font-bold text-[var(--accent)] tracking-tight">John Michae Guerra</span>
        <button
          className="md:hidden flex flex-col justify-between w-8 h-6 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-1 w-full bg-[var(--accent)] rounded transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}></span>
          <span className={`block h-1 w-full bg-[var(--accent)] rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-1 w-full bg-[var(--accent)] rounded transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}></span>
        </button>
        <ul className={`hidden md:flex gap-8 text-sm font-medium`}>
          <li><a href="#home" className="text-[var(--foreground)] hover:text-[var(--accent)] transition">Home</a></li>
          <li><a href="#about" className="text-[var(--foreground)] hover:text-[var(--accent)] transition">About</a></li>
          <li><a href="#projects" className="text-[var(--foreground)] hover:text-[var(--accent)] transition">Projects</a></li>
          <li><a href="#contact" className="text-[var(--foreground)] hover:text-[var(--accent)] transition">Contact</a></li>
        </ul>
        {/* Mobile menu */}
        <ul
          className={`fixed top-0 right-0 h-full w-2/3 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-lg font-medium transition-all duration-500 z-40 md:hidden
            ${menuOpen ? "right-0" : "-right-full"}`}
        >
          <li><a href="#home" className="text-[var(--foreground)] hover:text-[var(--accent)] transition" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" className="text-[var(--foreground)] hover:text-[var(--accent)] transition" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#projects" className="text-[var(--foreground)] hover:text-[var(--accent)] transition" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="text-[var(--foreground)] hover:text-[var(--accent)] transition" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
