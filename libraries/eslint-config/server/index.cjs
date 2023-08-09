module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'turbo'],
  env: {
    node: true,
    es6: true,
  },
  settings: {
    jest: {
      version: 29,
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  overrides: [
    {
      files: ['**/specs/**/*'],
      env: {
        jest: true,
      },
    },
  ],
}
