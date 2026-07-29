import { motion } from "framer-motion";
import React from "react";

interface FloatingDecorationsProps {
  variant?: "hero" | "light" | "warm";
}

export const FloatingDecorations: React.FC<FloatingDecorationsProps> = ({
  variant = "light",
}) => {
  const isHero = variant === "hero";
  const isWarm = variant === "warm";

  // Color & opacity mappings
  const accentColor = isWarm ? "text-blush-dark" : isHero ? "text-brown-light" : "text-blush-dark";
  const opacityClass = isHero ? "opacity-30" : "opacity-20";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {/* ─── 1. Animated Sparkles & Stars (Outer Margins) ─── */}
      {/* Sparkle top-left */}
      <motion.div
        className={`absolute top-[4%] left-[2%] sm:left-[4%] ${accentColor} ${opacityClass}`}
        animate={{ y: [0, -10, 0], rotate: [0, 45, 0], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
        </svg>
      </motion.div>

      {/* Sparkle bottom-right */}
      <motion.div
        className={`absolute bottom-[10%] right-[3%] sm:right-[5%] ${accentColor} ${opacityClass}`}
        animate={{ y: [0, 10, 0], rotate: [0, -45, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
        </svg>
      </motion.div>

      {/* Small 4-point star middle-right */}
      <motion.div
        className="absolute top-[48%] right-[2%] sm:right-[4%] text-blush-dark/30 hidden sm:block"
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" />
        </svg>
      </motion.div>

      {/* ─── 2. Designer Squiggles & Vector Arc (Outer Edges) ─── */}
      {/* Wavy stroke top-right */}
      <motion.svg
        className="absolute top-8 right-4 sm:right-12 w-24 h-12 text-blush-dark/25 hidden md:block"
        viewBox="0 0 120 60"
        fill="none"
        animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M 10 30 Q 35 5 60 30 T 110 30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />
      </motion.svg>

      {/* Curved arc bottom-left */}
      <motion.svg
        className="absolute bottom-12 left-2 sm:left-6 w-28 h-20 text-brown-light/20 hidden lg:block"
        viewBox="0 0 100 80"
        fill="none"
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M 10 70 Q 50 10 90 60"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="10" cy="70" r="3" fill="currentColor" />
        <circle cx="50" cy="10" r="3" fill="#D4A5A5" />
        <circle cx="90" cy="60" r="3" fill="currentColor" />
      </motion.svg>

      {/* ─── 3. Print & Editorial Registration Crosshair & Badges ─── */}
      {/* Registration Crosshair top-left margin */}
      <motion.div
        className="absolute top-[14%] right-[10%] sm:right-[15%] text-brown-light/15 hidden lg:flex items-center justify-center pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-7 h-7 rounded-full border border-current relative flex items-center justify-center">
          <div className="w-full h-px bg-current absolute" />
          <div className="h-full w-px bg-current absolute" />
        </div>
      </motion.div>

      {/* Typography Serif 'Aa' Accent */}
      <motion.div
        className="absolute top-[68%] left-[2%] sm:left-[4%] font-display text-2xl sm:text-3xl italic text-brown-light/20 font-semibold select-none hidden lg:block"
        animate={{ y: [0, -8, 0], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        Aa
      </motion.div>

      {/* ─── 4. Floating Color Palette Swatches (Desktop Peripheral Only) ─── */}
      <motion.div
        className="absolute top-[38%] left-[1.5%] lg:left-[2.5%] hidden xl:flex flex-col gap-1.5 p-2 rounded-xl bg-soft-white/30 backdrop-blur-[2px] border border-beige/30 shadow-xs"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-3 h-3 rounded-full bg-blush opacity-80" />
        <div className="w-3 h-3 rounded-full bg-blush-dark opacity-80" />
        <div className="w-3 h-3 rounded-full bg-brown-light opacity-80" />
        <div className="w-3 h-3 rounded-full bg-brown opacity-80" />
      </motion.div>

      {/* ─── 5. Floating Geometric Circles & Rings (Margins) ─── */}
      {/* Ring bottom-right */}
      <motion.div
        className="absolute bottom-[24%] right-[3%] lg:right-[6%] w-8 h-8 rounded-full border border-dashed border-blush-dark/25 hidden md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Soft color ambient blur top-right */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-14 h-14 rounded-full bg-blush/20 blur-md pointer-events-none"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};


