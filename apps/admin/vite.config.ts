/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { join, resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  envDir: join(__dirname),
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '~', replacement: resolve(__dirname, 'public') },
    ],
  },
  server: {
    strictPort: true,
    host: '127.0.0.1',
    port: 4100,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setupTests.ts',
    // you might want to disable it, if you don't have tests
    // that rely on CSS since parsing CSS is slow
    css: true,
  },
})
