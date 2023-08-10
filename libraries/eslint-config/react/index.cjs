module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'turbo'],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'turbo'],
  ignorePatterns: ['node_modules', '.cache', '.turbo', 'build', 'dist', 'out', 'specs'],
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
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
  rules: {
    'no-console': ['warn', { allow: ['error', 'info'] }],
    'react/jsx-key': 'off',
    'import/no-anonymous-default-export': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    '@next/next/no-img-element': 'off',
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
    // Automatically flag env vars missing from turbo.json
    "turbo/no-undeclared-env-vars": "error",
  },
  overrides: [
    {
      files: ['**/specs/**/*'],
      env: { jest: true },
    },
  ],
}
