/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        emerald: colors.emerald,
      }
    },
  },
  plugins: [],
}
