import { ListBorders } from '@/borders/components/list-borders/list-borders';
import { UserProfile } from '@/users/components/user-profile/user-profile';
import { useParams } from 'react-router';
import styles from './page.module.css';

export default function UserIdPage() {
  const { id } = useParams();

  return (
    <main className={styles.container}>
      <article className={styles['profile-container']}>
        {id && <UserProfile id={id} />}
      </article>
      <section className={styles['borders-section']}>
        {id && <ListBorders id={id} />}
      </section>
    </main>
  );
}
