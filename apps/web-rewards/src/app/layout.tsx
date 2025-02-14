import { BtnLogin } from '@/auth/components/btn-login/btn-login';
import { UserDetail } from '@/auth/components/user-detail/user-detail';
import { useSessionStore } from '@/auth/store/session.store';
import { Footer } from '@/shared/components/footer/footer';
import { GlobalNavigation } from '@/shared/components/global-navigation/global-navigation';
import { EmbeeWorldsLogo } from '@/shared/logos/embee-worlds-logo';
import { SktT1Logo } from '@/shared/logos/skt-t1-logo';
import { T1Logo } from '@/shared/logos/t1-logo';
import { Typography } from '@embeeorg/ui-kit';
import { Outlet } from 'react-router';
import styles from './layout.module.css';

export default function RootLayout() {
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-end',
          }}
        >
          {isAuthenticated ? <UserDetail /> : <BtnLogin />}
        </div>
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
      <Footer />
    </div>
  );
}
