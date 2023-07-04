// tailwind config is required for editor support

const tailwindConfig = require('@acme/tailwind-config/tailwind.config.cjs')

module.exports = {
  content: [
    'app/**/*.{js,jsx,ts,tsx}',
    // include packages if not transpiling
    '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [tailwindConfig],
}
