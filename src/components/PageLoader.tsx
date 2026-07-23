import { motion } from "framer-motion";

const heroBg = "/hero-bg.png";

export const PageLoader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      onAnimationComplete={onLoadComplete}
    >
      {/* Soft photo background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(${heroBg})`,
          filter: "blur(6px) brightness(0.95) saturate(0.95)",
        }}
      />

      {/* Light cream overlay — photo stays visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/30 to-cream/50" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(61,53,48,0.08)_100%)]" />

      <div className="relative z-10 text-center px-6">
        <motion.p
          className="section-label mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          Portfolio
        </motion.p>
        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-charcoal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Cecillia Tan Handoko
        </motion.h1>
        <motion.div
          className="w-20 h-px bg-blush-dark mx-auto mt-7 origin-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.p
          className="mt-5 text-sm text-charcoal/50 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Visual Communication Designer
        </motion.p>
      </div>
    </motion.div>
  );
};
