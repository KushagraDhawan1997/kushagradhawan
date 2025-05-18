/**
 * Tailwind CSS Configuration
 *
 * This file configures Tailwind CSS for the project.
 * It includes settings for dark mode, content paths, container sizing,
 * and plugins (including the typography plugin for markdown rendering).
 *
 * @type {import('tailwindcss').Config}
 */
const config = {
  // Enable dark mode with the 'class' strategy (controlled via classes rather than media queries)
  darkMode: ["class"],

  // Specify the files that Tailwind should scan for class usage
  content: [
    "./pages/**/*.{ts,tsx}", // Pages directory
    "./components/**/*.{ts,tsx}", // Components directory
    "./app/**/*.{ts,tsx}", // App directory (Next.js App Router)
    "./src/**/*.{ts,tsx}", // Source directory
  ],

  // Optional prefix for all utility classes
  prefix: "",

  // Theme configuration
  theme: {
    // Container configuration
    container: {
      center: true, // Center containers
      padding: "2rem", // Default padding
      // Screen-specific settings
      screens: {
        "2xl": "1400px", // Max width for 2xl screens
      },
    },
    // Extensions to the base theme
    extend: {
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spin: "spin 15s linear infinite",
        "spin-reverse": "spin 20s linear infinite reverse",
      },
    },
    typography: {
      DEFAULT: {
        css: {
          // Used for article content rendering
          maxWidth: "100%",
        },
      },
    },
  },

  // Plugins
  plugins: [
    // Typography plugin enables styling for markdown content
    // Used for article content rendering
    require("@tailwindcss/typography"),
  ],
};

export default config;
