import { Outlet } from 'react-router';
import styles from './layout.module.css';

export default function RootLayout() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}
