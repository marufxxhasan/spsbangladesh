
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/spsbangladesh/',

  plugins: [react()],

  build: {
    outDir: 'dist',
  },
});
