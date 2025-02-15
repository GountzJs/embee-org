import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
// import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   workbox: {
    //     runtimeCaching: [
    //       {
    //         urlPattern:
    //           /\/.*\.(?:js|css|html|png|jpg|jpeg|svg|ico|woff2?|ttf|eot|json)$/,
    //         handler: 'CacheFirst',
    //         options: {
    //           cacheName: 'static-assets',
    //           expiration: {
    //             maxEntries: 100,
    //             maxAgeSeconds: 60 * 60 * 24 * 30,
    //           },
    //         },
    //       },
    //       {
    //         urlPattern: /https:\/\/embee-org\.github\.io\//,
    //         handler: 'CacheFirst',
    //         options: {
    //           cacheName: 'cdn-assets',
    //           expiration: {
    //             maxEntries: 10,
    //             maxAgeSeconds: 60 * 60 * 24,
    //           },
    //         },
    //       },
    //     ],
    //   },
    //   manifest: {
    //     name: 'Web Rewards App',
    //     short_name: 'rewards_app',
    //     description: 'Web Rewards app embeejayz',
    //     start_url: '.',
    //     display: 'standalone',
    //     background_color: '#ffffff',
    //     theme_color: '#000000',
    //   },
    // }),
  ],

  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
});
