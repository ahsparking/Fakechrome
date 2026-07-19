// This file allows Chrome to install the website as a true standalone app
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Keeps the app working seamlessly offline/online
  e.respondWith(fetch(e.request));
});

