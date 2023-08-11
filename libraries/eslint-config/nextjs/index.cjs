module.exports = {
  extends: ['next/core-web-vitals'],
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    jest: {
      version: 29,
    },
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'react/jsx-key': 'off',
        '@next/next/no-html-link-for-pages': 'off',
        '@next/next/no-img-element': 'off',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `node` related come first.
              ['^node(?!:?$)', '^dotenv'],
              // Packages `react` and `nextjs` related come after.
              ['^react', '^next(?!/?$)', '^@?\\w', '^next(?!-?$)'],
              // Internal packages.
              ['^(@|components)(/.*|$)', '^(@|context)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Other relative imports. Put same-folder imports and `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Stylesheet file imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
    {
      files: ['**/specs/**/*'],
      env: { jest: true },
    },
  ],
  globals: {
    React: true,
    JSX: true,
  },
}
