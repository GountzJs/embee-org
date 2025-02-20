import App from '@/app/app.tsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
}

if ('caches' in window) {
  caches.keys().then((cacheNames) => {
    cacheNames.forEach((cacheName) => {
      caches.delete(cacheName);
    });
  });
}

const root = document.getElementById('root') as HTMLElement;

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') return;

  const { worker } = await import('@mocks/browser');
  return worker.start();
}

enableMocking().then(() =>
  createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  ),
);
