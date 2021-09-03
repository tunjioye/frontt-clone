const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.sky,
      red: colors.rose,
      green: colors.emerald,
      indigo: colors.indigo,
    },
    fontFamily: {
      sans: ['system-ui', 'sans-serif'],
      serif: ['Lora', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
