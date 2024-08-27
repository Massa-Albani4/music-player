/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bwquintapro: ["bwquintapro", "sans-serif"],
      },
    },
    colors: {
      white: "#F8F8FF",
      black: "#313638",
      gray: "#D8D8D8",
      orange: "#EE6C4D",
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
