import { BorderImage } from '@/rewards/components/border-image';
import { ProplayerCover } from '@/rewards/components/proplayer-cover/proplayer-cover';
import { Rank } from '@/rewards/models/enums/rank.enum';
import styles from './border-rank.module.css';

interface Props {
  rank: Rank;
  name: string;
}

export function BorderRank({ rank, name }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles['proplayer-container']}>
        <ProplayerCover name={name} width={280} height={445} />
      </div>
      <div className={styles['border-container']}>
        <BorderImage rank={rank} />;
      </div>
    </div>
  );
}
