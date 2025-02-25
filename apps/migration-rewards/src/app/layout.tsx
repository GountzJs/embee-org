import { poppins } from '@/consts/fonts';
import { staticUrl } from '@/core/client-settings';
import type { Metadata } from 'next';
import { Footer } from './_sections/footer';
import { Navbar } from './_sections/navbar';
import './globals.css';
import styles from './layout.module.css';
import Providers from './provider';

export const metadata: Metadata = {
  title: 'Recompensas',
  description:
    'Embeejayz recompensas del canal de twitch, basadas en el competitivo de League of Legends, en el equipo de esport T1 y en el mismo canal de Embeejayz',
  authors: [{ name: 'Gountzjs' }],
  keywords: [
    'embeejayz',
    'twitch',
    'twitter',
    'patreon',
    't1',
    'skt',
    'skt t1',
    'lck',
    'worlds',
    'msi',
    'faker',
    'league of legends',
    'lol',
    'x',
    'youtube',
    'patreon',
    'streamlabs',
    'marcos',
    'bordes',
    'rank',
    'ranking',
    'clasificatoria',
  ],
  openGraph: {
    title: 'Embeejayz redes sociales',
    description:
      'Embeejayz recompensas del canal de Twitch, basadas en el competitivo de League of Legends, en el equipo de esport T1 y en el mismo canal de Embeejayz',
    url: '/',
    siteName: 'Embeejayz Rewards',
    type: 'website',
    images: [
      {
        url: `${staticUrl}/favicon.ico`,
        width: 512,
        height: 512,
      },
    ],
  },
  icons: {
    icon: `${staticUrl}/favicon.ico`,
    shortcut: `${staticUrl}/favicon.ico`,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} ${styles['body-container']} `}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
