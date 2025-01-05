import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  root: 'demo',
  build: {
    outDir: '../dist',
  },
})
