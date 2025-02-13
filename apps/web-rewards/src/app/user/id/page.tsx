import { Typography } from '@embeeorg/ui-kit';
import styles from './page.module.css';

export default function UserIdPage() {
  return (
    <main className={styles.container}>
      <Typography
        variant="h1"
        family="primary"
        color="secondary"
        size="4xl"
        weight="extrabold"
        style={{ maxWidth: '80%', width: '900px' }}
      >
        El único desarrollador está trabajando en este momento, vuelva a
        intentarlo más tarde 🚧🏗️👷‍♀️
      </Typography>
    </main>
  );
}
