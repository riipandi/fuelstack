module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'turbo'],
  env: { node: true },
  settings: {
    react: {
      version: 'detect',
    },
    jest: {
      version: 29,
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': ['warn', { allow: ['error', 'info'] }],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
