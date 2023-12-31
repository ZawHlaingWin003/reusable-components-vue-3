/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        'title': 'DM Serif Display, serif',
        'body': 'Lexend Deca, sans-serif',
        'poppins': 'Poppins, sans - serif'
      },
      fontSize: {
        'xxs': '0.7rem',
        'xs': '0.8rem'
      }
    },
  },
  plugins: [
    require("tailwindcss-brand-colors")
  ],
}

