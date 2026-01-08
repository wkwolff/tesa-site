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
        // Brand colors (from TESA logo)
        primary: {
          DEFAULT: "#1a237e", // Deep navy blue
          50: "#e8eaf6",
          100: "#c5cae9",
          200: "#9fa8da",
          300: "#7986cb",
          400: "#5c6bc0",
          500: "#3f51b5",
          600: "#3949ab",
          700: "#303f9f",
          800: "#283593",
          900: "#1a237e", // Primary brand color
        },
        secondary: {
          DEFAULT: "#3949ab", // Royal blue
          light: "#6f74dd",
          dark: "#00227b",
        },
        accent: {
          DEFAULT: "#d4a017", // Gold
          light: "#ffcf40",
          dark: "#9f7200",
        },
        highlight: {
          DEFAULT: "#c62828", // Red
          light: "#ff5f52",
          dark: "#8e0000",
        },
        // Neutral palette
        surface: {
          DEFAULT: "#f8fafc", // Light surface
          dark: "#1e293b", // Dark text/surface
        },
        // CSS variable based colors for dark mode support
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // Typography configuration
      fontFamily: {
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      // Custom spacing for touch targets
      spacing: {
        "touch": "44px", // Minimum touch target size
        "touch-lg": "48px",
      },
      // Minimum touch target sizes
      minHeight: {
        "touch": "44px",
        "touch-lg": "48px",
      },
      minWidth: {
        "touch": "44px",
        "touch-lg": "48px",
      },
      // Focus ring styles for accessibility
      ringWidth: {
        DEFAULT: "2px",
      },
      // Custom animations
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
