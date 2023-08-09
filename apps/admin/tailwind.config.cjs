// tailwind config is required for editor support

const { fontFamily } = require('tailwindcss/defaultTheme')
const tailwindConfig = require('@acme/tailwind-config/tailwind.config.cjs')

module.exports = {
  presets: [tailwindConfig],
  // include packages if not transpiling
  content: ['src/**/*.{js,ts,jsx,tsx}', '../../packages/**/*.{js,ts,jsx,tsx}', 'index.html'],
  extend: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      mono: ['Jetbrains Mono', ...fontFamily.mono],
    },
  },
}
