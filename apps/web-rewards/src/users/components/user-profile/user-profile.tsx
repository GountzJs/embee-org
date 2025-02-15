import { IconRank } from '@/ranking/components/icon-rank/icon-rank';
import { Rank } from '@/ranking/models/enums/rank.enum';
import { useGetProfileHook } from '@/users/hooks/use-get-profile.hook';
import { Typography } from '@embeeorg/ui-kit';
import { Navigate } from 'react-router';
import styles from './user-profile.module.css';

interface Props {
  id: string;
}

export function UserProfile({ id }: Props) {
  const { data, isLoading, error } = useGetProfileHook({ id });

  if (isLoading || !data) return <div>Cargando perfil...</div>;

  if (error) return <Navigate to="/" replace />;

  return (
    <div className={styles.container}>
      <img
        src={data?.avatar}
        className={styles.avatar}
        alt={data?.username}
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
          {data?.username}
        </Typography>
        <IconRank
          rank={data?.rank}
          width={80}
          height={data?.rank === Rank.Unranked ? 65 : 80}
        />
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
          {data?.quantityBorders}
        </Typography>
      </div>
    </div>
  );
}
