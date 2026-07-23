export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        blush: "#F0D4D4",
        "blush-dark": "#D4A5A5",
        beige: "#E8DFD4",
        "warm-beige": "#D9CEC1",
        brown: "#6B5344",
        "brown-light": "#8B7355",
        charcoal: "#3D3530",
        "soft-white": "#FEFCFA",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(107, 83, 68, 0.08)",
        card: "0 8px 32px rgba(107, 83, 68, 0.1)",
        elevated: "0 16px 48px rgba(107, 83, 68, 0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out",
        slideUp: "slideUp 0.7s ease-out",
        slideDown: "slideDown 0.3s ease-out",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
};
