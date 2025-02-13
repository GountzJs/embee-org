import { useGetRanking } from '@/rewards/hooks/use-get-ranking.hook';
import { getRankByIndex } from '@/rewards/utils/get-rank-by-index';
import { UserRanking } from '../user-ranking/user-ranking';
import styles from './list-ranking.module.css';

export function ListRanking() {
  const { data, error, isLoading } = useGetRanking();

  if (isLoading) return <div>Cargando...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
      {data?.map(({ id, username, quantityBorders }, index) => (
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
