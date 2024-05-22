/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        secondary: "#3C3C3C",
        third: "#FFD685",
        fourth: "#17AB52",
        fifth: "#333333"
      },
      container: {
        center: true,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

