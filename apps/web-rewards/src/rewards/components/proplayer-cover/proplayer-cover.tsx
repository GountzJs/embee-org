import { staticUrl } from '@/core/settings';
import styles from './proplayer-cover.module.css';

interface Props {
  url: string;
  width?: number;
  height?: number;
}

export function ProplayerCover({ url, width = 100, height = 100 }: Props) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${staticUrl}${url})`,
        width,
        height,
      }}
    ></div>
  );
}
