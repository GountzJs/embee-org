import { BordersOrderBy } from '@/borders/models/enums/borders-order-by.enum';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function getPagination({
  rewards,
  filterByName = '',
  page = 1,
  pageSize = 10,
  sort = 'DESC',
  orderBy,
}: any) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  let filteredRewards = rewards;

  if (filterByName) {
    filteredRewards = filteredRewards.filter((reward: any) =>
      reward.name.toLowerCase().includes(filterByName.toLowerCase()),
    );
  }

  filteredRewards.sort((a: any, b: any) => {
    if (orderBy === BordersOrderBy.Rank) {
      if (a.special !== b.special) {
        return sort === 'ASC' ? a.special - b.special : b.special - a.special;
      }
      return sort === 'ASC' ? a.quantity - b.quantity : b.quantity - a.quantity;
    } else {
      return sort === 'ASC'
        ? new Date(a.last_created_at).getTime() -
            new Date(b.last_created_at).getTime()
        : new Date(b.last_created_at).getTime() -
            new Date(a.last_created_at).getTime();
    }
  });

  const paginatedRewards = filteredRewards.slice(start, end);

  return {
    borders: paginatedRewards,
    pagination: {
      page,
      pageSize,
      totalRecords: filteredRewards.length,
      totalPages: Math.ceil(filteredRewards.length / pageSize),
    },
  };
}
