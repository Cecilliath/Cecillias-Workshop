import { motion } from "framer-motion";
import React from "react";

interface FloatingDecorationsProps {
  variant?: "light" | "warm";
}

const bubbles = [
  { size: 6, top: "12%", left: "8%", delay: 0, duration: 3.5 },
  { size: 4, top: "28%", right: "12%", delay: 0.6, duration: 4 },
  { size: 5, bottom: "20%", left: "15%", delay: 1.2, duration: 3.8 },
  { size: 3, top: "55%", right: "6%", delay: 0.3, duration: 3.2 },
  { size: 7, bottom: "35%", right: "20%", delay: 0.9, duration: 4.5 },
];

export const FloatingDecorations: React.FC<FloatingDecorationsProps> = ({
  variant = "light",
}) => {
  const fill = variant === "warm" ? "bg-blush-dark/35" : "bg-blush-dark/25";
  const fillSm = variant === "warm" ? "bg-brown-light/30" : "bg-brown-light/20";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${i % 2 === 0 ? fill : fillSm}`}
          style={{
            width: b.size * 4,
            height: b.size * 4,
            top: b.top,
            left: b.left,
            right: b.right,
            bottom: b.bottom,
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          animate={{ y: [0, -10, 0], x: [0, i % 2 === 0 ? 4 : -4, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: b.delay },
            scale: { duration: 0.5, delay: b.delay },
            y: { duration: b.duration, repeat: Infinity, ease: "easeInOut", delay: b.delay },
            x: {
              duration: b.duration + 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: b.delay,
            },
          }}
        />
      ))}

      <motion.svg
        className="absolute top-16 right-8 w-20 h-20 text-blush-dark/25"
        viewBox="0 0 80 80"
        fill="none"
        initial={{ opacity: 0, rotate: -20 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <path
          d="M 10 70 Q 40 5 70 30"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 5"
          strokeLinecap="round"
        />
      </motion.svg>

      <motion.div
        className="absolute bottom-24 left-10 w-8 h-8 rounded-full border-2 border-blush/40"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ rotate: 360 }}
        transition={{
          opacity: { duration: 0.5, delay: 0.5 },
          scale: { duration: 0.5, delay: 0.5 },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      />
    </div>
  );
};
