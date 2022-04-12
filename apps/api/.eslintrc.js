const preset = require('appconfig/eslint-preset-nest');

module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ...preset,
};
