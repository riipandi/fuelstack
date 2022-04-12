module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', '.next', '.cache', 'build', 'dist', 'out'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'no-unused-vars': 'off',
    'no-console': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@next/next/no-img-element': 'off',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^@?\\w', '^\\u0000', '^@/config'],
          ['^@/libraries', '^@/hooks', '^@/layouts', '^@/components'],
          ['^@/styles', '^.+\\.s?css$', '^@/'],
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ],
          ['^@/types'],
          ['^'],
        ],
      },
    ],
  },
  globals: {
    React: true,
    JSX: true,
  },
};
