const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: '#121314',
        gray: colors.slate,
        primary: colors.indigo,
        secondary: colors.teal,
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    iconsPlugin({ collections: getIconCollections(['heroicons', 'ph']) }),
  ],
}
