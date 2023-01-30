/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["mundial", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      fontWeight: {
        hair: "100",
        thin: "200",
        regular: "400",
        bold: "700",
      },
      colors: {
        ...colors,
        primary: {
          100: "#06F7F7",
          200: "#26D9D9",
          300: "#40BFBF",
          400: "#59A6A6",
        },
        black: "#0F1212",
        gray: {
          DEFAULT: "#929292",
          dark: "#414141",
        },

        red: "#FD004C",
      },
    },
  },
  plugins: [],
};
