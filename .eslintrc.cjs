module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@acme/eslint-config`
  extends: ['@acme/eslint-config', 'plugin:tailwindcss/recommended'],
  plugins: ['@typescript-eslint'],
}
