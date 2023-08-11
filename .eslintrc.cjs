module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
  // This tells ESLint to load the config from the package `@acme/eslint-config`
  extends: ['@acme/eslint-config', 'plugin:tailwindcss/recommended', 'prettier'],
	plugins: ['@typescript-eslint'],
	ignorePatterns: ['*.cjs', '*.mjs'],
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
