module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'turbo'],
  plugins: ['@typescript-eslint', 'turbo'],
  ignorePatterns: ['*.cjs', '*.mjs'],
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
}
