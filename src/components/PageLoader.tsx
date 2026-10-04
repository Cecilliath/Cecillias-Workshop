import { motion } from "framer-motion";

const heroBg = "/hero-bg.png";

export const PageLoader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      onAnimationComplete={onLoadComplete}
    >
      <div className="absolute inset-0 bg-soft-white" />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
        style={{
          backgroundImage: `url(${heroBg})`,
          filter: "blur(20px) brightness(1.2) saturate(0.65)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-cream/92 via-soft-white/94 to-cream/90" />

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="inline-block rounded-[2rem] border border-beige/60 bg-soft-white/85 backdrop-blur-md px-8 py-8 md:px-12 md:py-10 shadow-soft"
        >
          <motion.p
            className="section-label mb-3 text-brown-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.08, duration: 0.25 }}
          >
            Welcome
          </motion.p>
          <motion.h1
            className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-brown leading-tight tracking-normal"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.12 }}
          >
            Cecillia Tan Handoko
          </motion.h1>
          <motion.div
            className="w-14 h-px bg-blush-dark mx-auto mt-5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.22, duration: 0.35 }}
          />
          <motion.p
            className="mt-4 text-sm text-charcoal/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.25 }}
          >
            Multidisciplinary Visual Designer · Jakarta
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};
