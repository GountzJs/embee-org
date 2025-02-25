import { Presentation } from './_sections/presentation';
import { RedeemBorders } from './_sections/redeem-borders';
import { RewardsAvailable } from './_sections/rewards-available';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <Presentation />
      <RewardsAvailable />
      <RedeemBorders />
    </main>
  );
}
