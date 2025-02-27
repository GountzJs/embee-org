import { ListRanking } from '@/ranking/components/list-ranking/list-ranking';
import { useScrollTopHook } from '@/shared/hooks/use-scroll-top.hook';
import { SearchUsers } from '@/users/components/search-users/search-users';
import { Typography } from '@embeeorg/ui-kit';
import styles from './page.module.css';

export default function RankingPage() {
  useScrollTopHook();

  return (
    <main className={styles.container}>
      <section className={styles['section-container']}>
        <Typography
          variant="h4"
          family="primary"
          color="white"
          size="xl"
          weight="extrabold"
        >
          Ingrese su nombre de usuario para ver sus bordes canjeados
        </Typography>
        <SearchUsers />
      </section>
      <Typography
        variant="h2"
        family="primary"
        color="white"
        size="4xl"
        weight="extrabold"
        className={styles['title-page']}
      >
        Nuestros usuarios con más bordes
      </Typography>
      <ListRanking />
    </main>
  );
}
