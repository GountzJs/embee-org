import { Typography } from '@embeeorg/ui-kit';
import styles from './chip-reward.module.css';

interface Props {
  url: string;
  detail: string;
  width?: number;
  height?: number;
}

export function ChipReward({ url, detail, width = 140, height = 140 }: Props) {
  return (
    <div className={styles.container}>
      <img src={url} loading="lazy" alt="march" height={height} width={width} />
      <Typography
        variant="p"
        family="secondary"
        color="white"
        size="base"
        weight="regular"
      >
        {detail}
      </Typography>
    </div>
  );
}
