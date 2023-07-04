module.exports = {
  extends: ['next', 'turbo', 'prettier'],
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
    '@next/next/no-html-link-for-pages': 'off',
    '@next/next/no-img-element': 'off',
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
}
