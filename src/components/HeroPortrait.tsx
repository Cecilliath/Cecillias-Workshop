import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FiSliders, FiRotateCcw, FiX } from "react-icons/fi";

interface HeroPortraitProps {
  src: string;
  alt: string;
  loaded: boolean;
  onLoad: () => void;
}

/* Asymmetric organic blob — hand-tuned for a creative, editorial feel */
const BLOB_PATH =
  "M 248 18 C 340 12 430 55 465 145 C 500 235 478 340 420 420 C 362 500 270 545 185 530 C 100 515 42 445 28 355 C 14 265 55 175 130 115 C 175 78 195 24 248 18 Z";

const OUTLINE_PATH =
  "M 248 12 C 348 5 445 52 482 152 C 518 252 492 362 425 448 C 358 534 258 582 168 565 C 78 548 18 468 8 368 C -2 268 48 168 128 102 C 178 62 198 6 248 12 Z";

const STORAGE_KEY = "cecillia_portrait_config_v1";

const DEFAULT_CONFIG = {
  posX: 0,
  posY: 0,
  scale: 1,
  aspectPreset: "xMaxYMid slice",
};

export const HeroPortrait: React.FC<HeroPortraitProps> = ({
  src,
  alt,
  loaded,
  onLoad,
}) => {
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

      {/* Adjuster Controls Popover Card */}
      <AnimatePresence>
        {showAdjuster && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-10 left-2 z-40 w-72 bg-soft-white/95 backdrop-blur-xl border border-beige shadow-elevated rounded-2xl p-4 text-xs text-charcoal space-y-3.5"
          >
            <div className="flex items-center justify-between border-b border-beige/60 pb-2">
              <span className="font-semibold text-brown flex items-center gap-1.5">
                <FiSliders /> Photo Alignment
              </span>
              <button
                onClick={() => setShowAdjuster(false)}
                className="p-1 rounded-md text-charcoal/50 hover:text-charcoal hover:bg-beige/30 transition-colors"
              >
                <FiX />
              </button>
            </div>

            {/* Presets */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-semibold text-brown-light tracking-wider">
                Quick Presets
              </span>
              <div className="grid grid-cols-3 gap-1.5 pt-0.5">
                <button
                  onClick={() =>
                    setPreset({
                      posX: 0,
                      posY: 0,
                      scale: 1,
                      aspectPreset: "xMaxYMid slice",
                    })
                  }
                  className={`px-2 py-1 rounded-lg text-[10px] font-medium border transition-colors ${
                    config.aspectPreset === "xMaxYMid slice" && config.scale === 1
                      ? "bg-brown text-cream border-brown"
                      : "bg-beige/20 text-charcoal border-beige/60 hover:bg-beige/40"
                  }`}
                >
                  Right Focus
                </button>

                <button
                  onClick={() =>
                    setPreset({
                      posX: 0,
                      posY: 0,
                      scale: 1,
                      aspectPreset: "xMidYMid slice",
                    })
                  }
                  className={`px-2 py-1 rounded-lg text-[10px] font-medium border transition-colors ${
                    config.aspectPreset === "xMidYMid slice" && config.scale === 1
                      ? "bg-brown text-cream border-brown"
                      : "bg-beige/20 text-charcoal border-beige/60 hover:bg-beige/40"
                  }`}
                >
                  Centered
                </button>

                <button
                  onClick={() =>
                    setPreset({
                      posX: -90,
                      posY: -20,
                      scale: 1.35,
                      aspectPreset: "xMidYMid slice",
                    })
                  }
                  className={`px-2 py-1 rounded-lg text-[10px] font-medium border transition-colors ${
                    config.scale > 1.2
                      ? "bg-brown text-cream border-brown"
                      : "bg-beige/20 text-charcoal border-beige/60 hover:bg-beige/40"
                  }`}
                >
                  Zoom Face
                </button>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="space-y-2.5 pt-1">
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span>Horizontal (X):</span>
                  <span className="font-mono text-brown font-medium">{config.posX}px</span>
                </div>
                <input
                  type="range"
                  min="-200"
                  max="150"
                  step="5"
                  value={config.posX}
                  onChange={(e) => updateConfig("posX", parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-beige rounded-lg appearance-none cursor-pointer accent-brown"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span>Vertical (Y):</span>
                  <span className="font-mono text-brown font-medium">{config.posY}px</span>
                </div>
                <input
                  type="range"
                  min="-150"
                  max="150"
                  step="5"
                  value={config.posY}
                  onChange={(e) => updateConfig("posY", parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-beige rounded-lg appearance-none cursor-pointer accent-brown"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span>Zoom Scale:</span>
                  <span className="font-mono text-brown font-medium">
                    {Math.round(config.scale * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="2.0"
                  step="0.05"
                  value={config.scale}
                  onChange={(e) => updateConfig("scale", parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-beige rounded-lg appearance-none cursor-pointer accent-brown"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-beige/60">
              <button
                onClick={resetConfig}
                className="inline-flex items-center gap-1 text-[11px] text-brown-light hover:text-brown font-medium transition-colors"
              >
                <FiRotateCcw className="text-xs" /> Reset
              </button>
              <span className="text-[10px] text-charcoal/50 italic">Auto-saved to device</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative floating color swatch dots */}
      <motion.div
        className="absolute -top-3 -left-3 sm:-left-6 w-6 h-6 rounded-full bg-blush/80 border border-white shadow-soft flex items-center justify-center text-[10px] text-brown font-bold"
        animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute top-1/4 -right-4 sm:-right-8 w-4 h-4 rounded-full bg-blush-dark/70 border border-white shadow-xs"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-1/3 -left-6 sm:-left-8 w-3 h-3 rounded-full bg-brown-light/60 border border-white shadow-xs"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating Designer Specialty Chip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute -top-1 right-2 sm:right-6 z-20 bg-cream/95 backdrop-blur-md rounded-full px-3.5 py-1.5 shadow-soft border border-beige/80 text-[11px] font-medium text-brown flex items-center gap-1.5 pointer-events-none"
      >
        <span className="w-2 h-2 rounded-full bg-blush-dark animate-pulse" />
        Visual Designer
      </motion.div>

      {/* Curved accent line with animated dash */}
      <svg
        className="absolute -top-4 right-0 w-28 h-28 sm:w-36 sm:h-36 text-blush-dark/40 pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden
      >
        <motion.path
          d="M 10 80 Q 50 10 90 40"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 6"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Star / sparkle accent */}
      <motion.svg
        className="absolute bottom-16 -right-2 sm:-right-4 w-9 h-9 text-brown-light/45 pointer-events-none drop-shadow-xs"
        viewBox="0 0 24 24"
        fill="currentColor"
        animate={{ rotate: [0, 90, 0], scale: [0.95, 1.1, 0.95] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" />
      </motion.svg>

      {/* Main organic portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full"
        style={{ aspectRatio: "500 / 560" }}
      >
        <svg
          viewBox="0 0 500 560"
          className="w-full h-full drop-shadow-[0_12px_30px_rgba(107,83,68,0.08)]"
          aria-hidden
        >
          <defs>
            <clipPath id="hero-portrait-blob">
              <path d={BLOB_PATH} />
            </clipPath>
          </defs>

          {/* Decorative offset outline */}
          <path
            d={OUTLINE_PATH}
            fill="none"
            stroke="#D4A5A5"
            strokeWidth="2"
            opacity="0.45"
          />

          {/* Portrait image clipped to blob — reading custom user alignment settings */}
          <image
            href={src}
            x={config.posX}
            y={config.posY}
            width={500 * config.scale}
            height={560 * config.scale}
            clipPath="url(#hero-portrait-blob)"
            preserveAspectRatio={config.aspectPreset}
            opacity={loaded ? 1 : 0}
            style={{ transition: "opacity 0.6s ease" }}
          />

          {/* Inner highlight edge */}
          <path
            d={BLOB_PATH}
            fill="none"
            stroke="#FAF7F2"
            strokeWidth="3"
            opacity="0.6"
          />
        </svg>

        {/* Hidden img for load detection */}
        <img
          src={src}
          alt={alt}
          onLoad={onLoad}
          className="sr-only"
          aria-hidden
        />
      </motion.div>

      {/* Brush-stroke accent beneath */}
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



