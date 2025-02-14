import { useBordersUserHook } from '@/borders/hooks/use-borders-user.hook';
import { Rank } from '@/ranking/models/enums/rank.enum';
import { quantityBorderToRank } from '@/ranking/utils/quantity-border-to-rank';
import { useParams } from 'react-router';
import { BorderRank } from '../border-rank/border-rank';
import styles from './list-borders.module.css';

export function ListBorders() {
  const { id } = useParams();
  const { data, isLoading, error } = useBordersUserHook({ id });

  if (isLoading) return <div>Buscando bordes...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
      {data?.map(({ id, url, special, quantity, username, avatar, name }) => (
        <BorderRank
          key={id}
          name={name}
          rank={special ? Rank.Challenger : quantityBorderToRank(quantity)}
          url={url}
          username={username}
          avatarUrl={avatar}
        />
      ))}
    </div>
  );
}
