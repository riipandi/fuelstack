module.exports = {
  extends: ['turbo', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
    jest: {
      version: 29,
    },
  },
  rules: {
    'no-console': 'warn',
  },
}
