import { Footer } from '@/app/_sections/footer/footer';
import { GlobalNavigation } from '@/app/_sections/global-navigation/global-navigation';
import { EmbeeWorldsLogo } from '@/shared/logos/embee-worlds-logo';
import { SktT1Logo } from '@/shared/logos/skt-t1-logo';
import { T1Logo } from '@/shared/logos/t1-logo';
import { Typography } from '@embeeorg/ui-kit';
import { Outlet } from 'react-router';
import styles from './layout.module.css';

export default function RootLayout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles['decorator-container']}>
          <SktT1Logo />
          <EmbeeWorldsLogo />
          <T1Logo />
        </div>
        <Typography
          variant="h1"
          family="primary"
          color="white"
          weight="extrabold"
          size="4xl"
        >
          Recompensa del canal
        </Typography>
        <p className={styles['disclaimer-container']}>
          <strong>Embee rewards</strong> no cuenta con el respaldo de{' '}
          <strong>Riot games</strong> y no refleja las opiniones ni los puntos
          de vista de <strong>Riot games</strong> ni de ninguna persona
          involucrada oficialmente en la producción o administración de
          propiedades de <strong>Riot games</strong>.{' '}
          <strong>Riot games</strong> y todas las propiedades asociadas son
          marcas comerciales o marcas comerciales registradas de{' '}
          <strong>Riot games, Inc</strong>.
        </p>
        <GlobalNavigation />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}
