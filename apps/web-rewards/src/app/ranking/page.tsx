import { ListRanking } from '@/ranking/components/list-ranking/list-ranking';
import { InputOutline } from '@embeeorg/ui-kit';
import styles from './page.module.css';

export default function RankingPage() {
  return (
    <main className={styles.container}>
      <search
        style={{
          width: '500px',
          maxWidth: '80%',
        }}
      >
        <InputOutline placeholder="Buscar por nombre de usuario" />
      </search>
      <ListRanking />
    </main>
  );
}
