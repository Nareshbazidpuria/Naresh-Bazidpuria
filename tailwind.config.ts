import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A0F1E",
          surface: "#0F172A",
          card: "#131B2E",
        },
        accent: {
          DEFAULT: "#38BDF8",
          glow: "rgba(56, 189, 248, 0.15)",
        },
        muted: {
          DEFAULT: "#94A3B8",
          foreground: "#64748B",
        },
        heading: "#F1F5F9",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(56, 189, 248, 0.15)",
        "glow-lg": "0 0 50px rgba(56, 189, 248, 0.25)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "mesh-drift": "mesh-drift 20s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "mesh-drift": {
          "0%": { transform: "translate(0%, 0%) scale(1)" },
          "100%": { transform: "translate(5%, -5%) scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
