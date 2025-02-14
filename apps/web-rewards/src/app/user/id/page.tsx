import { ListBorders } from '@/borders/components/list-borders/list-borders';
import styles from './page.module.css';

export default function UserIdPage() {
  return (
    <main className={styles.container}>
      <section className={styles['borders-section']}>
        <ListBorders />
      </section>
    </main>
  );
}
