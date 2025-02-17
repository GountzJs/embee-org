/* eslint-disable @typescript-eslint/no-explicit-any */
import { getBordersByUserId } from '@/borders/services/borders';
import { useInfiniteQuery } from '@tanstack/react-query';

interface Props {
  id: string;
  filterByName?: string;
}

export function useBordersUserHook({ id, filterByName }: Props) {
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['borders', filterByName],
    queryFn: async ({ pageParam = 1 }) => {
      const result = await getBordersByUserId({
        id,
        page: pageParam,
        filterByName,
      });
      return {
        ...result,
        nextCursor:
          typeof pageParam === 'number' &&
          result.pagination.page < result.pagination.totalPages
            ? true
            : false,
      };
    },
    getNextPageParam: (lastPage) =>
      lastPage.nextCursor ? lastPage.pagination.page + 1 : undefined,
    initialPageParam: 1,
  });

  return {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    hasNextPage,
    fetchNextPage,
  };
}
