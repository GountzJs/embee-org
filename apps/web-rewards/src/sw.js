self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['static-assets-v2', 'cdn-assets-v2'];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log(`Borrando caché vieja: ${cacheName}`);
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
