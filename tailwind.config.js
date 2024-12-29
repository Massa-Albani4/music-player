/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: "#E9873C",
        gray: "#D9D9D9",
        black: "#1B1B1B",
        "dark-gray": "#9A9A9A",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
