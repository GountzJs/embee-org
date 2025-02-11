import { staticUrl } from '@/core/settings';
import styles from './proplayer-cover.module.css';

interface Props {
  name: string;
  width?: number;
  height?: number;
}

export function ProplayerCover({ name, width = 100, height = 100 }: Props) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${staticUrl}/images/proplayers/${name}.png)`,
        width,
        height,
      }}
    ></div>
  );
}
