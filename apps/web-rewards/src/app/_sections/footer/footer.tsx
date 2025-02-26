import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.detail}></div>
      <div className={styles['collaborators-container']}></div>
    </footer>
  );
}
