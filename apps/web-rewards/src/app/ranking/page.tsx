import { ListRanking } from '@/ranking/components/list-ranking/list-ranking';
import styles from './page.module.css';

export default function RankingPage() {
  return (
    <main className={styles.container}>
      <ListRanking />
    </main>
  );
}
