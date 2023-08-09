// tailwind config is required for editor support

const { fontFamily } = require('tailwindcss/defaultTheme')
const tailwindConfig = require('@acme/tailwind-config/tailwind.config.cjs')

module.exports = {
  presets: [tailwindConfig],
  // include packages if not transpiling
  content: ['src/**/*.{js,ts,jsx,tsx}', '../../packages/**/*.{js,ts,jsx,tsx}'],
  extend: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      mono: ['var(--jetbrains-mono-font)', ...fontFamily.mono],
    },
  },
}
