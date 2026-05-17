import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "Arial Narrow",
          "Roboto Condensed",
          "Impact",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      colors: {
        carbon: "#07090d",
        steel: "#121821",
        "steel-light": "#1b2430",
        bluefire: "#1687ff",
        "bluefire-soft": "#54b7ff",
        gold: "#d7a84d",
        "gold-soft": "#f0cf83"
      },
      boxShadow: {
        glow: "0 0 42px rgba(22, 135, 255, 0.26)",
        gold: "0 0 32px rgba(215, 168, 77, 0.18)"
      },
      backgroundImage: {
        "steel-grid":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "radial-blue":
          "radial-gradient(circle at 50% 0%, rgba(22,135,255,0.24), transparent 42%)"
      }
    }
  },
  plugins: []
};

export default config;
