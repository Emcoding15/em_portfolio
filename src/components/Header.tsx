"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo or Brand */}
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
          MyPortfolio
        </Link>
        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link href="#hero" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-500">
            About
          </Link>
          <Link href="#projects" className="text-gray-700 hover:text-blue-500">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
