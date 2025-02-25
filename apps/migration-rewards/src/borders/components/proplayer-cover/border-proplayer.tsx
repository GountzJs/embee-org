import { staticUrl } from '@/core/client-settings';
import styles from './border-proplayer.module.css';

interface Props {
  url: string;
  width?: number;
  height?: number;
}

export function BorderProplayer({ url, width = 100, height = 100 }: Props) {
  return (
    <img
      className={styles.container}
      src={`${staticUrl}${url}`}
      width={width}
      height={height}
      loading="lazy"
      alt={'Avatar proplayer'}
    />
  );
}
