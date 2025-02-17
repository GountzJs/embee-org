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

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
