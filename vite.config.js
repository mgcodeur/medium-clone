import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'assets/js/main.js'),
      name: 'mgc_blog',
      fileName: () => 'js/app.min.js',
      formats: ['iife'],
    },
    outDir: resolve(__dirname, 'dist/'),
  },
});
