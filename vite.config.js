import resolve from '@rollup/plugin-node-resolve';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import json from '@rollup/plugin-json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    resolve({
      browser: true,
      preferBuiltins: false,
      dedupe: ['react'],
    }),
    json(),
  ],
  base: '/',
});
