import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
    },
  },
  plugins: [react()],
});
