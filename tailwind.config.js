/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Add this
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1C3D",
          dark: "#08142B",
          blue: "#2563EB",
          glow: "#38BDF8", // cyan-400 equivalent
          teal: "#14B8A6",
        },
      },
    },
  },
  plugins: [],
}