/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    extend: {
      colors: {
        surface: {
          DEFAULT: "var(--color-surface)",
          light: "var(--color-surface-light)",
        },
        accent: "var(--color-accent)",
        highlight: "var(--color-highlight)",
        "muted-foreground": "var(--color-text-secondary)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(94, 234, 212, 0.45)",
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
      },
      animation: {
        "fade-in": "fade-in 0.6s ease both",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0, transform: "translateY(12px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      screens: {
        "3xl": "1600px",
        "4k": "1980px",
      },
    },
  },
  plugins: [],
};
