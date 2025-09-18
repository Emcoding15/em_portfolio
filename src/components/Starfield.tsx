
"use client";
import React, { useRef, useEffect } from "react";

// Shooting star config
const SHOOTING_STAR_CHANCE = 0.002; // rare per frame
const SHOOTING_STAR_MIN_DURATION = 1400; // ms
const SHOOTING_STAR_MAX_DURATION = 2200; // ms
const SHOOTING_STAR_MIN_LENGTH = 70; // px (shorter for subtle effect)
const SHOOTING_STAR_MAX_LENGTH = 120; // px
const SHOOTING_STAR_WIDTH = 0.3;

const STAR_COUNT = 90; // fewer stars
const STAR_BASE_COLOR = "255,255,255";
const STAR_SIZE = 0.7; // smaller size



function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef(
    Array.from({ length: STAR_COUNT }, () => ({
      x: randomBetween(0, 1),
      y: randomBetween(0, 1),
      z: randomBetween(0.2, 1),
      phase: randomBetween(0, 2 * Math.PI), // for twinkle
      twinkleSpeed: randomBetween(0.7, 2.2), // more random twinkle speed
      twinklePhase: randomBetween(0, 2 * Math.PI), // more random phase
    }))
  );
  // Shooting stars state (must be inside component)
  const shootingStars = useRef<{
    startTime: number;
    duration: number;
    x: number;
    y: number;
    angle: number;
    length: number;
  }[]>([]);



  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId: number;


    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);



    function draw(time: number) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw twinkling stars
      for (const star of stars.current) {
        const sx = star.x * canvas.width;
        const sy = star.y * canvas.height;
        const size = STAR_SIZE * star.z * 1.5;
        // Twinkle: each star has its own speed and phase
        const twinkle = 0.5 + 0.5 * Math.sin(time * 0.001 * star.twinkleSpeed + star.twinklePhase);
        // Dramatic twinkle and shine
        const alpha = 0.18 + 0.95 * Math.pow(twinkle, 2) * star.z;
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(${STAR_BASE_COLOR},${alpha.toFixed(2)})`;
        ctx.shadowColor = `rgba(${STAR_BASE_COLOR},${(alpha * 1.2).toFixed(2)})`;
        ctx.shadowBlur = 6.5 * star.z;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw shooting stars
      for (const s of shootingStars.current) {
        const elapsed = time - s.startTime;
        if (elapsed < 0 || elapsed > s.duration + 400) continue;
        const progress = Math.min(elapsed / s.duration, 1);
        const fade = elapsed > s.duration
          ? 1 - Math.min((elapsed - s.duration) / 400, 1)
          : 1;
        const startX = s.x * canvas.width;
        const startY = s.y * canvas.height;
        const dx = Math.cos(s.angle) * s.length * progress;
        const dy = Math.sin(s.angle) * s.length * progress;
        const endX = startX + dx;
        const endY = startY + dy;
        // Draw main trail with gradient alpha for natural fade
        ctx.save();
        const trailSteps = 18;
        for (let i = 0; i < trailSteps; i++) {
          // Reverse the trail: head is at end, tail is at start
          const t0 = progress - ((i + 1) / trailSteps) * progress;
          const t1 = progress - (i / trailSteps) * progress;
          // Clamp t0 and t1 to >= 0 to avoid drawing at the start point after the star is gone
          const t0c = Math.max(0, t0);
          const t1c = Math.max(0, t1);
          // If both are zero, skip (prevents a circle at the start)
          if (t0c === 0 && t1c === 0) continue;
          const x0 = startX + Math.cos(s.angle) * s.length * t0c;
          const y0 = startY + Math.sin(s.angle) * s.length * t0c;
          const x1 = startX + Math.cos(s.angle) * s.length * t1c;
          const y1 = startY + Math.sin(s.angle) * s.length * t1c;
          // Fade out from head (brightest) to tail (faintest)
          const segFade = fade * (1 - (i / trailSteps) * 0.95) * (1 - 0.25 * (1 - progress));
          const segAlpha = 0.8 * segFade;
          ctx.strokeStyle = `rgba(${STAR_BASE_COLOR},${segAlpha.toFixed(2)})`;
          ctx.shadowColor = `rgba(${STAR_BASE_COLOR},0.7)`;
          ctx.shadowBlur = 8;
          ctx.lineWidth = SHOOTING_STAR_WIDTH;
          ctx.beginPath();
          ctx.moveTo(x0, y0);
          ctx.lineTo(x1, y1);
          ctx.stroke();
        }
        // Add a subtle glow at the tip (no visible head/circle)
        ctx.save();
        ctx.shadowBlur = 32;
        ctx.shadowColor = `rgba(${STAR_BASE_COLOR},0.85)`;
        ctx.beginPath();
        ctx.arc(endX, endY, 1.2, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(${STAR_BASE_COLOR},0.13)`;
        ctx.fill();
        ctx.restore();
      }
    }


    function animate(time: number) {
      // Shooting star logic
      // Remove finished shooting stars
      shootingStars.current = shootingStars.current.filter(
        (s) => time - s.startTime < s.duration + 400
      );
      // Maybe spawn a new shooting star
      if (Math.random() < SHOOTING_STAR_CHANCE) {
        // More gentle, natural angle (closer to horizontal)
        // Less steep, more horizontal downward angle
        // Range: 10° to 30° and 150° to 170° (in radians)
        const angleChoices = [
          randomBetween((10 * Math.PI) / 180, (30 * Math.PI) / 180), // right-down, gentle
          randomBetween((150 * Math.PI) / 180, (170 * Math.PI) / 180), // left-down, gentle
        ];
        const angle = angleChoices[Math.floor(Math.random() * angleChoices.length)];
        shootingStars.current.push({
          startTime: time,
          duration: randomBetween(SHOOTING_STAR_MIN_DURATION, SHOOTING_STAR_MAX_DURATION),
          x: randomBetween(0, 1), // anywhere horizontally
          y: randomBetween(0, 1), // anywhere vertically
          angle,
          length: randomBetween(SHOOTING_STAR_MIN_LENGTH, SHOOTING_STAR_MAX_LENGTH),
        });
      }
      draw(time);
      animationId = requestAnimationFrame(animate);
    }
    animate(performance.now());

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "transparent",
        filter: "blur(0.6px)"
      }}
      aria-hidden="true"
    />
  );
};

export default Starfield;
