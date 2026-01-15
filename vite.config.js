import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  },
  server: {
    host: '0.0.0.0', // Allows access from local network
    port: 3000,
    open: true,
    strictPort: true
  }
})
