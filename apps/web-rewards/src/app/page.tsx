import { BorderDetail } from '@/app/_sections/borders-detail/borders-detail';
import { MainPage } from '@/shared/components/main-page/main-page';
import { Typography } from '@embeeorg/ui-kit';
import { Presentation } from './_sections/presentation/presentation';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <MainPage className={styles['main-container']}>
      <Presentation />
      <Typography
        variant="h2"
        family="primary"
        color="white"
        size="4xl"
        weight="extrabold"
      >
        Detalles de las recompensa
      </Typography>
      <BorderDetail />
    </MainPage>
  );
}
