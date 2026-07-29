import { motion } from "framer-motion";

const heroBg = "/hero-bg.png";

export const PageLoader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-cream"
      onAnimationComplete={onLoadComplete}
    >
      {/* Soft photo background with controlled contrast */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(${heroBg})`,
          filter: "blur(12px) brightness(0.85) saturate(0.9)",
        }}
      />

      {/* Warm opaque backdrop overlay for high legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-cream/80 to-cream/95 backdrop-blur-md" />

      {/* Soft vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(61,53,48,0.12)_100%)] pointer-events-none" />

      {/* High contrast glass card container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 text-center px-8 py-10 sm:px-12 sm:py-12 bg-soft-white/90 backdrop-blur-md border border-beige/80 shadow-elevated rounded-3xl max-w-lg mx-4"
      >
        <motion.p
          className="text-xs uppercase tracking-[0.25em] text-brown font-semibold mb-3"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Portfolio
        </motion.p>
        <motion.h1
          className="font-display text-3xl sm:text-5xl font-semibold text-charcoal tracking-tight leading-tight"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Cecillia Tan Handoko
        </motion.h1>
        <motion.div
          className="w-20 h-0.5 bg-gradient-to-r from-blush via-blush-dark to-blush mx-auto my-5 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.p
          className="text-xs sm:text-sm font-medium text-charcoal/85 tracking-widest uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Visual Communication Designer
        </motion.p>

        {/* Elegant loading progress indicator */}
        <div className="w-32 h-1 bg-beige/60 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-brown rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

