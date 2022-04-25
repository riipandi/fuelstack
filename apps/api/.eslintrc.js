const preset = require('@acme/config-nest/eslint-preset-nest');

module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ...preset,
};
