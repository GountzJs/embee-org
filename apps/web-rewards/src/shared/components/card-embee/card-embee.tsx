import { EmbeeLogo } from '@/shared/logos/embee-logo';
import styles from './card-embee.module.css';

interface Props {
  children: React.ReactNode;
}

export function CardEmbee({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles['embee-logo']}>
        <EmbeeLogo size={50} />
      </div>
      {children}
    </div>
  );
}
