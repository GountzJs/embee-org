import { Rank } from '@/rewards/models/enums/rank.enum';
import { Typography } from '@embeeorg/ui-kit';
import { Link } from 'react-router';
import { IconRank } from '../icon-rank/icon-rank';
import styles from './user-ranking.module.css';

interface Props {
  id: string;
  rank: Rank;
  username: string;
  quantityBorders: number;
}

export function UserRanking({ id, rank, username, quantityBorders }: Props) {
  return (
    <Link to={`/user/${id}`} className={styles.container}>
      <div style={{ alignSelf: 'center', justifySelf: 'center' }}>
        <IconRank rank={rank} width={80} height={80} />
      </div>
      <Typography
        variant="h4"
        color="white"
        size="3xl"
        family="primary"
        weight="extrabold"
        style={{
          textShadow: '0px 0px 10px #000',
          width: '100%',
          textAlign: 'center',
          alignSelf: 'center',
        }}
      >
        {username}
      </Typography>
      <div className={styles['details-container']}>
        <Typography
          variant="p"
          color="white"
          size="4xl"
          family="secondary"
          weight="extrabold"
          style={{ textShadow: '0px 0px 10px #000' }}
        >
          {quantityBorders}
        </Typography>
        <Typography
          variant="p"
          color="white"
          size="base"
          family="primary"
          weight="bold"
          style={{ textShadow: '0px 0px 10px #000' }}
        >
          Bordes
        </Typography>
      </div>
    </Link>
  );
}
