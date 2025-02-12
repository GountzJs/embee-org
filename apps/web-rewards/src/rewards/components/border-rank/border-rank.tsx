import { BorderImage } from '@/rewards/components/border-image';
import { ProplayerCover } from '@/rewards/components/proplayer-cover/proplayer-cover';
import { Rank } from '@/rewards/models/enums/rank.enum';
import { Typography } from '@embeeorg/ui-kit';
import styles from './border-rank.module.css';

interface Props {
  rank: Rank;
  name: string;
  username: string;
  avatarUrl: string;
}

export function BorderRank({ rank, name, username, avatarUrl }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles['proplayer-container']}>
        <ProplayerCover name={name} width={280} height={445} />
      </div>
      <div className={styles['border-container']}>
        <BorderImage rank={rank} />
      </div>
      <Typography
        className={styles.username}
        variant="p"
        color="white"
        size="base"
        family="primary"
        weight="bold"
      >
        {username}
      </Typography>
      <div
        className={styles.avatar}
        style={{
          backgroundImage: `url(${avatarUrl})`,
        }}
      ></div>
    </div>
  );
}
