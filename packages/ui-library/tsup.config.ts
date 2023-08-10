import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
  outDir: 'dist',
  entry: {
    index: 'src/index.tsx',
  },
  format: ['cjs', 'esm'],
  silent: true,
  splitting: false,
  sourcemap: true,
  minify: !options.watch,
  clean: true,
  dts: true,
  target: 'es2020',
  injectStyle: false,
  external: ['react'],
  banner: {
    js: "'use client'",
  },
  ...options,
}))
