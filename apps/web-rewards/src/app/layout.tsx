import { GlobalNavigation } from '@/shared/components/global-navigation/global-navigation';
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
          Recompensas del canal
        </Typography>
        <GlobalNavigation />
      </header>
      <Outlet />
    </div>
  );
}
