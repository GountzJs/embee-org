import { getRanking } from '@/ranking/services/ranking';
import { useQuery } from '@tanstack/react-query';

export function useGetRanking() {
  const { data, isFetching, error } = useQuery({
    queryKey: ['ranking'],
    queryFn: () => getRanking(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    error,
    isLoading: isFetching,
  };
}
