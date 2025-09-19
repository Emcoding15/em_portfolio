"use client";
import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

interface ProjectScreenshotCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  onClick?: () => void;
  href?: string;
}

const ProjectScreenshotCard: React.FC<ProjectScreenshotCardProps> = ({
  image,
  alt,
  title,
  description,
  onClick,
  href
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      // Debug: log modal open and window size
      console.debug('[ProjectScreenshotCard] Modal opened', {
        width: window.innerWidth,
        height: window.innerHeight,
        image,
        alt,
      });
    } else {
      console.debug('[ProjectScreenshotCard] Modal closed');
    }
  }, [modalOpen, image, alt]);

  // Close modal on ESC
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setModalOpen(false);
  }, []);
  useEffect(() => {
    if (!modalOpen) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, handleKeyDown]);

  const cardContent = (
    <div
      className="flex flex-col md:flex-row items-center bg-[var(--gray)]/80 border border-[var(--accent)]/30 rounded-2xl shadow-lg p-6 md:p-8 gap-6 md:gap-10 transition-transform hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={alt}
        className="w-32 h-64 object-contain rounded-xl bg-black/80 border border-blue-300 shadow-md"
        onClick={e => {
          e.stopPropagation();
          setModalOpen(true);
        }}
        style={{ cursor: "zoom-in" }}
      />
      <div className="flex-1 flex flex-col justify-center items-start gap-2">
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        <p className="text-base text-gray-100 mb-2">{description}</p>
      </div>
      <div className="self-end md:self-center ml-auto">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white text-2xl shadow hover:bg-black/70 transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );

  // Render modal at the end, outside the card, using React Portal
  const modal = modalOpen && typeof window !== "undefined"
    ? ReactDOM.createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          style={{ minHeight: '100vh', minWidth: '100vw' }}
          onClick={e => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div
            className="relative flex flex-col items-center justify-center"
            style={{ maxWidth: '90vw', maxHeight: '90vh' }}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/90 transition"
              onClick={() => setModalOpen(false)}
              aria-label="Close screenshot modal"
              style={{ zIndex: 10 }}
            >
              ×
            </button>
            <img
              src={image}
              alt={alt}
              className="rounded-xl border border-[var(--accent)] shadow-2xl bg-black"
              style={{
                objectFit: "contain",
                maxHeight: '80vh',
                maxWidth: '400px',
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45)'
              }}
            />
            <div className="mt-4 text-gray-200 text-center text-base max-w-lg">
              {alt}
            </div>
          </div>
        </div>,
        document.body
      )
    : null;


  if (href) {
    return (
      <>
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          {cardContent}
        </a>
        {modal}
      </>
    );
  }
  return <>{cardContent}{modal}</>;
};

export default ProjectScreenshotCard;
