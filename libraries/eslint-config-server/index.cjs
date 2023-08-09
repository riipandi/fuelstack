module.exports = {
  extends: ['eslint:recommended', 'turbo'],
  env: {
    node: true,
    es6: true,
  },
  settings: {
    jest: {
      version: 29,
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
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
