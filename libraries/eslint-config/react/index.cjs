module.exports = {
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
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
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `node` related come first.
              ['^node(?!:?$)', '^dotenv'],
              // Packages `react` related come after.
              ['^react', '^@?\\w'],
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
      files: ['**/test/**/*'],
      env: { jest: true },
    },
  ],
  globals: {
    React: true,
    JSX: true,
  },
}
