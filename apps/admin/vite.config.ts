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
})
