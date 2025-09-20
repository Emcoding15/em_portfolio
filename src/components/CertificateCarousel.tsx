"use client";
import React, { useState, useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface Certificate {
  image: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

interface CertificateCarouselProps {
  certificates: Certificate[];
  autoPlay?: boolean;
  autoPlayDelay?: number;
}

const CertificateCarousel: React.FC<CertificateCarouselProps> = ({
  certificates,
  autoPlay = false,
  autoPlayDelay = 4000
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const currentCertificate = certificates[currentIndex];

  // Navigation functions with smooth transitions
  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
      setIsTransitioning(false);
    }, 150);
  }, [certificates.length, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
      setIsTransitioning(false);
    }, 150);
  }, [certificates.length, isTransitioning]);

  const goToIndex = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  }, [currentIndex, isTransitioning]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused || modalOpen) return;
    
    autoPlayRef.current = setInterval(() => {
      goToNext();
    }, autoPlayDelay);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, isPaused, modalOpen, autoPlayDelay, goToNext]);

  // Touch/swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    
    touchStartX.current = null;
  };

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
      className="bg-gradient-to-br from-[var(--gray)] to-[#0f0f0f] rounded-2xl p-6 border border-[var(--accent)]/20 min-h-[320px] transition-transform hover:scale-[1.02] hover:shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Certificate Image */}
      <div className="relative mb-4">
        <img
          src={currentCertificate?.image}
          alt={`${currentCertificate?.title} certificate`}
          className={`w-full h-48 object-contain rounded-lg bg-white/95 border border-[var(--accent)]/30 shadow-md transition-opacity duration-300 cursor-zoom-in p-2 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
          onClick={() => setModalOpen(true)}
        />
        {/* Auto-play indicator */}
        {autoPlay && !isPaused && !modalOpen && (
          <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        )}
      </div>

      {/* Certificate Info */}
      <div className="space-y-2 mb-4">
        <h4 className="text-lg font-bold text-[var(--accent)]">{currentCertificate?.title}</h4>
        <p className="text-sm text-gray-300">{currentCertificate?.issuer}</p>
        <p className="text-xs text-gray-400">{currentCertificate?.date}</p>
        <p className="text-sm text-gray-200 leading-relaxed">{currentCertificate?.description}</p>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={goToPrev}
            className="p-2 rounded-full bg-[var(--accent)]/20 hover:bg-[var(--accent)]/40 text-white transition-colors disabled:opacity-50"
            disabled={isTransitioning}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-[var(--accent)]/20 hover:bg-[var(--accent)]/40 text-white transition-colors disabled:opacity-50"
            disabled={isTransitioning}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex gap-1">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[var(--accent)] w-4' 
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-xs text-gray-400">
          {currentIndex + 1} of {certificates.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-600 rounded-full overflow-hidden mt-3">
        <div 
          className="h-full bg-[var(--accent)] transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / certificates.length) * 100}%` }}
        />
      </div>
    </div>
  );

  // Modal for full certificate view
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
              aria-label="Close certificate modal"
              style={{ zIndex: 10 }}
            >
              ×
            </button>
            <img
              src={currentCertificate?.image}
              alt={`${currentCertificate?.title} certificate`}
              className="rounded-xl border border-[var(--accent)] shadow-2xl bg-white"
              style={{
                objectFit: "contain",
                maxHeight: '80vh',
                maxWidth: '80vw',
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45)'
              }}
            />
            <div className="mt-4 text-gray-200 text-center text-base max-w-lg">
              <h3 className="text-xl font-bold text-[var(--accent)] mb-2">{currentCertificate?.title}</h3>
              <p className="text-sm text-gray-300">{currentCertificate?.issuer} • {currentCertificate?.date}</p>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return <>{cardContent}{modal}</>;
};

export default CertificateCarousel;