/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "rgb(240, 240, 240)", // or '#f0f0f0'
      },
    },
  },
  plugins: [],
};
