import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: resolve(__dirname, 'src/assets'),
      },
      {
        find: '@loaders',
        replacement: resolve(__dirname, 'src/loaders'),
      },
      {
        find: '@models',
        replacement: resolve(__dirname, 'src/models'),
      },
      {
        find: '@scenes',
        replacement: resolve(__dirname, 'src/scenes'),
      },
      {
        find: '@consts',
        replacement: resolve(__dirname, 'src/consts'),
      },
      {
        find: '@services',
        replacement: resolve(__dirname, 'src/services'),
      },
      {
        find: '@animations',
        replacement: resolve(__dirname, 'src/animations'),
      },
      {
        find: '@utils',
        replacement: resolve(__dirname, 'src/utils'),
      },
    ],
  },
});
