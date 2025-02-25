import { UserBorderEntity } from '@/borders/models/entities/user-border.entity';

import { rewardsApiUrl } from '@/core/client-settings';
import { BorderSort } from '../models/enums/border-sort';
import { BordersOrderBy } from '../models/enums/borders-order-by.enum';
import { Pagination } from '../models/interfaces/pagination.interface';

type BordersByUsersIdProps = {
  id: string;
  page: number;
  filterByName?: string;
  orderBy: BordersOrderBy;
  sort: BorderSort;
};

export const getBordersByUserId = async ({
  id,
  page,
  filterByName,
  orderBy,
  sort,
}: BordersByUsersIdProps): Promise<{
  borders: UserBorderEntity[];
  pagination: Pagination;
}> => {
  const url = new URL(`${rewardsApiUrl}/api/borders/${id}`);
  url.searchParams.append('page', page.toString());
  if (filterByName) url.searchParams.append('filterByName', filterByName);
  url.searchParams.append('orderBy', orderBy);
  url.searchParams.append('sort', sort);
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const data = await res.json();
  if (!res.ok) throw data;
  return data;
};
