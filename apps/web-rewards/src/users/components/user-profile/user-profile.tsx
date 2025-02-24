import { IconRank } from '@/ranking/components/icon-rank/icon-rank';
import { Rank } from '@/ranking/models/enums/rank.enum';
import { useGetProfileHook } from '@/users/hooks/use-get-profile.hook';
import { DotsSpinner, Typography } from '@embeeorg/ui-kit';
import { Link, Navigate } from 'react-router';
import styles from './user-profile.module.css';

interface Props {
  id: string;
}

export function UserProfile({ id }: Props) {
  const { data, isLoading, error } = useGetProfileHook({ id });
  const user = data?.user;
  const { username, avatar, rank, quantityBorders } = user || { undefined };

  if (isLoading)
    return (
      <div className={styles.container}>
        <Link to="/ranking" className={styles['nav-link']}>
          Volver
        </Link>
        <DotsSpinner size={100} />
      </div>
    );

  if (error) return <Navigate to="/" replace />;

  return (
    <div className={styles.container}>
      <Link to="/ranking" className={styles['nav-link']}>
        Volver
      </Link>
      <img
        src={avatar}
        className={styles.avatar}
        alt={username}
        width={100}
        height={100}
      />
      <div className={styles.detail}>
        <Typography
          variant="h2"
          color="secondary"
          size="3xl"
          family="primary"
          weight="extrabold"
        >
          {username}
        </Typography>
        {rank && (
          <IconRank
            rank={rank}
            width={80}
            height={rank === Rank.Unranked ? 65 : 80}
          />
        )}
      </div>
      <div className={styles.detail}>
        <Typography
          variant="p"
          color="secondary"
          size="xl"
          family="primary"
          weight="semibold"
        >
          Bordes
        </Typography>
        <Typography
          variant="p"
          color="secondary"
          size="2xl"
          family="primary"
          weight="extrabold"
        >
          {quantityBorders}
        </Typography>
      </div>
    </div>
  );
}
