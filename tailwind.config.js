// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: "#00FFD1",
        chatbg: "#F0EFF9",
        chatbubble: "#CCC4FD",
        userbubble: "#A3EFFA",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
