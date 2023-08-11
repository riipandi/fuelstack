module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'turbo'],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  ignorePatterns: [
    '.cache',
    '.next',
    '.turbo',
    '*.cjs',
    '*.mjs',
    'dist',
    'node_modules',
    'out',
    'specs',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'turbo/no-undeclared-env-vars': 'error',
    'import/no-anonymous-default-export': 'off',
    'no-console': [
      'warn',
      {
        allow: ['error', 'info'],
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'simple-import-sort/exports': 'warn',
  },
}
