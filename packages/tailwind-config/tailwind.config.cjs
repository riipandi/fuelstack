const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: '#121314',
        gray: colors.gray,
        primary: colors.blue,
        secondary: colors.indigo,
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
    debugScreens: {
      position: ['bottom', 'left'],
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
