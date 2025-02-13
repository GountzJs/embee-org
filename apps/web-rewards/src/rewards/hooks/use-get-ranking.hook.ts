import { useEffect, useState } from 'react';
import { UserRankEntity } from '../models/entities/user-rank.entity';
import { getRanking } from '../services/ranking';

export function useGetRanking() {
  const [data, setData] = useState<UserRankEntity[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRanking()
      .then(({ ranking }) => setData(ranking))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    error,
    isLoading,
  };
}
