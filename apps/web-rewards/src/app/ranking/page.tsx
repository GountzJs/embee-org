import { ListRanking } from '@/ranking/components/list-ranking/list-ranking';
import { SearchUsers } from '@/users/components/search-users/search-users';
import styles from './page.module.css';

export default function RankingPage() {
  return (
    <main className={styles.container}>
      <section className={styles['section-container']}>
        <SearchUsers />
      </section>
      <ListRanking />
    </main>
  );
}
