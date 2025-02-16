import App from '@/app/app.tsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      newWorker?.addEventListener('statechange', () => {
        if (
          newWorker.state === 'installed' &&
          navigator.serviceWorker.controller
        ) {
          console.log('Nueva versión disponible. Recargando...');
          window.location.reload();
        }
      });
    });
  });
}

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
