import { staticUrl } from '@/core/client-settings';
import Image from 'next/image';
import styles from './embee-logo.module.css';

interface Props {
  size?: number;
}

export function EmbeeLogo({ size = 50 }: Props) {
  return (
    <Image
      className={styles['avatar']}
      src={`${staticUrl}/favicon.ico`}
      loading="eager"
      width={size}
      height={size}
      alt="Embeejayz avatar"
    />
  );
}
