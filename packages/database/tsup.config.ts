import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
  outDir: 'dist',
  entry: {
    index: 'src/index.ts',
  },
  publicDir: 'src/migration',
  format: ['cjs', 'esm'],
  silent: true,
  splitting: false,
  sourcemap: true,
  minify: false,
  clean: true,
  dts: true,
  target: 'es2020',
  injectStyle: false,
  ...options,
}))
