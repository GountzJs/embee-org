import { Presentation } from './_sections/presentation';
import { RewardsAvailable } from './_sections/rewards-available';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <Presentation />
      <RewardsAvailable />
    </main>
  );
}
