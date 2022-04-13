module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended'],
  ignorePatterns: ['.eslintrc.js', '.cache', 'build', '**/node_modules/**'],
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: false,
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: false,
    },
    sourceType: 'module',
  },
  globals: {
    strapi: true,
  },
  rules: {
    'no-console': false,
    'linebreak-style': ['error', 'unix'],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
