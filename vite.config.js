import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: { target: 'es2019' },
  server: {
    proxy: {
      '/api': 'http://localhost:4000'
    }
  }
});
