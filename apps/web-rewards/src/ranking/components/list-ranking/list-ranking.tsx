import { useGetRanking } from '@/ranking/hooks/use-get-ranking.hook';
import { getRankByIndex } from '@/ranking/utils/get-rank-by-index';
import { UserRanking } from '../user-ranking/user-ranking';
import styles from './list-ranking.module.css';

export function ListRanking() {
  const { data, error, isLoading } = useGetRanking();
  const ranking = data?.ranking || [];

  if (isLoading) return <div>Cargando...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.container}>
      {ranking.map(({ id, username, quantityBorders }, index) => (
        <UserRanking
          key={id}
          id={id}
          rank={getRankByIndex(index)}
          username={username}
          quantityBorders={quantityBorders}
        />
      ))}
    </div>
  );
}
