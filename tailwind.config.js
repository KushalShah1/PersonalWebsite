/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...colors,
      "t-green": "#1BC100",
      "t-green-hover": "#e2f6da",
      "t-ivory": "#FAF5E9",
      "t-ivory-hover":"#EEE8D9",
      "t-ivory-outline":"#F0D79C",
      "t-black": "#050A16",
    },
    extend: {
      fontFamily: {
        sans: ["Inter"],
        mono: ["Source Code Pro"],
      },
    },
  },
  plugins: [],
};
