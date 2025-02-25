import { getBordersByUserId } from '@/borders/services/borders';
import { useInfiniteQuery } from '@tanstack/react-query';
import { BorderSort } from '../models/enums/border-sort';
import { BordersOrderBy } from '../models/enums/borders-order-by.enum';

interface Props {
  id: string;
  filterByName?: string;
  orderBy: BordersOrderBy;
  sort: BorderSort;
}

export function useBordersUserHook({ id, filterByName, orderBy, sort }: Props) {
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['borders', filterByName, orderBy, sort],
    queryFn: async ({ pageParam = 1 }) => {
      const result = await getBordersByUserId({
        id,
        page: pageParam,
        filterByName,
        orderBy,
        sort,
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
    retry: false,
    refetchOnWindowFocus: false,
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
