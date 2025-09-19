"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface BackButtonProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className = "", style = {}, label = "Back" }) => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`fixed top-6 left-6 z-50 inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:text-blue-400 transition-colors duration-200 bg-black/70 px-4 py-2 rounded-full shadow-lg backdrop-blur ${className}`}
      style={style}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      {label}
    </button>
  );
};

export default BackButton;
