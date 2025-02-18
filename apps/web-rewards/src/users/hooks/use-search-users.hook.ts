import { useQuery } from '@tanstack/react-query';
import { getUserByUsername } from '../services/users';

interface Props {
  username: string;
}

export function useSearchUsers({ username }: Props) {
  const { data, isFetching, error } = useQuery({
    queryKey: ['search-users', username],
    queryFn: () => getUserByUsername(username),
    enabled: username.length >= 3,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    error,
    isLoading: isFetching,
  };
}
