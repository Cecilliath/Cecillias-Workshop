<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FiSliders, FiRotateCcw, FiX } from "react-icons/fi";
=======
import { motion } from "framer-motion";
import React from "react";
>>>>>>> 95259059dc059ca6fe6652b41b9255fd2afcdc36

interface HeroPortraitProps {
  src: string;
  alt: string;
  loaded: boolean;
  onLoad: () => void;
}

const BLOB_PATH =
  "M 248 18 C 340 12 430 55 465 145 C 500 235 478 340 420 420 C 362 500 270 545 185 530 C 100 515 42 445 28 355 C 14 265 55 175 130 115 C 175 78 195 24 248 18 Z";

const OUTLINE_PATH =
  "M 248 12 C 348 5 445 52 482 152 C 518 252 492 362 425 448 C 358 534 258 582 168 565 C 78 548 18 468 8 368 C -2 268 48 168 128 102 C 178 62 198 6 248 12 Z";

/** Shift crop right/up so Cecillia is centered — cat on the left stays out of frame */
const PORTRAIT_CROP = { x: -230, y: -65, width: 760, height: 820 };

export const HeroPortrait: React.FC<HeroPortraitProps> = ({
  src,
  alt,
  loaded,
  onLoad,
}) => {
<<<<<<< HEAD
  const [showAdjuster, setShowAdjuster] = useState(false);

  const [config, setConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
      }
    } catch {
      // fallback if localStorage unavailable
    }
    return DEFAULT_CONFIG;
  });

  const updateConfig = (key: keyof typeof DEFAULT_CONFIG, value: any) => {
    setConfig((prev: typeof DEFAULT_CONFIG) => {
      const updated = { ...prev, [key]: value };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore storage errors
      }
      return updated;
    });
  };

  const setPreset = (presetConfig: typeof DEFAULT_CONFIG) => {
    setConfig(presetConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(presetConfig));
    } catch {
      // ignore storage errors
    }
  };

  const resetConfig = () => {
    setPreset(DEFAULT_CONFIG);
  };

  return (
    <div className="relative w-full max-w-[22rem] sm:max-w-[26rem] md:max-w-[30rem] lg:max-w-[34rem] xl:max-w-[38rem] mx-auto lg:ml-auto lg:mr-0">
=======
  return (
    <div className="relative w-full max-w-[22rem] sm:max-w-[26rem] md:max-w-[30rem] lg:max-w-[34rem] xl:max-w-[38rem] mx-auto lg:ml-auto lg:mr-0">
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-24 bg-gradient-to-t from-beige/50 to-transparent rounded-full blur-xl pointer-events-none" />
      <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-br from-blush/35 via-beige/25 to-warm-beige/15 rounded-[40%] blur-2xl pointer-events-none" />
>>>>>>> 95259059dc059ca6fe6652b41b9255fd2afcdc36

      <motion.div
        className="absolute -top-2 -left-3 sm:-left-6 w-5 h-5 rounded-full bg-blush-dark/50"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 -right-4 sm:-right-8 w-3 h-3 rounded-full bg-brown-light/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-1/3 -left-6 sm:-left-10 w-2 h-2 rounded-full bg-blush/70"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <svg
        className="absolute -top-4 right-0 w-28 h-28 sm:w-36 sm:h-36 text-blush-dark/30 pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden
      >
        <path
          d="M 10 80 Q 50 10 90 40"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />
      </svg>

      <svg
        className="absolute bottom-16 -right-2 sm:right-0 w-8 h-8 text-brown-light/35 pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" />
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full"
        style={{ aspectRatio: "500 / 560" }}
      >
        <svg
          viewBox="0 0 500 560"
          className="w-full h-full drop-shadow-[0_20px_50px_rgba(107,83,68,0.15)]"
          aria-hidden
        >
          <defs>
            <clipPath id="hero-portrait-blob">
              <path d={BLOB_PATH} />
            </clipPath>
            <linearGradient id="blob-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F0D4D4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#E8DFD4" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <path d={BLOB_PATH} fill="url(#blob-shimmer)" />
          <path
            d={OUTLINE_PATH}
            fill="none"
            stroke="#D4A5A5"
            strokeWidth="2"
            opacity="0.45"
          />
          <image
            href={src}
            x={PORTRAIT_CROP.x}
            y={PORTRAIT_CROP.y}
            width={PORTRAIT_CROP.width}
            height={PORTRAIT_CROP.height}
            clipPath="url(#hero-portrait-blob)"
            preserveAspectRatio="xMidYMid slice"
            opacity={loaded ? 1 : 0}
            style={{ transition: "opacity 0.6s ease" }}
          />
          <path
            d={BLOB_PATH}
            fill="none"
            stroke="#FAF7F2"
            strokeWidth="3"
            opacity="0.6"
          />
        </svg>

        <img src={src} alt={alt} onLoad={onLoad} className="sr-only" aria-hidden />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -bottom-2 right-2 sm:right-6 bg-soft-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-soft border border-beige/50"
      >
        <p className="text-[10px] section-label leading-none mb-1">Available for</p>
        <p className="text-sm font-medium text-brown whitespace-nowrap">
          Internships & Projects
        </p>
      </motion.div>

      <svg
        className="absolute -bottom-4 left-4 sm:left-8 w-32 h-8 text-blush/40 pointer-events-none"
        viewBox="0 0 120 20"
        fill="currentColor"
        aria-hidden
      >
        <ellipse cx="60" cy="10" rx="58" ry="6" opacity="0.6" />
      </svg>
    </div>
  );
};
