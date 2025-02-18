import { useQuery } from '@tanstack/react-query';
import { getUserById } from '../services/users';

interface Props {
  id: string;
}

export function useGetProfileHook({ id }: Props) {
  const { data, isFetching, error } = useQuery({
    queryKey: ['get-profile', id],
    queryFn: () => getUserById(id),
    enabled: !!id,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    error,
    isLoading: isFetching,
  };
}
