import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@core': path.resolve(__dirname, './src/core'),
      '@react': path.resolve(__dirname, './src/react'),
      '@vue-components': path.resolve(__dirname, './src/vue'),
      '@integration': path.resolve(__dirname, './src/integration'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
})
