/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        orange: "#E9873C",
        gray: "#191919",
        black: "#020202",
        "gray-500": "#2F2F2F",
        "gray-400": "#878787",
        white: "#F8F8FF",
      },
      screens: {
        sm: "432px",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
