import { BorderSort } from '@/borders/models/enums/border-sort';
import { BordersOrderBy } from '@/borders/models/enums/borders-order-by.enum';
import { HttpResponse, http } from 'msw';
import { borders } from '../data/boders.json';
import { getPagination } from './pagination';

export const bordersHandlers = [
  http.get(
    'http://localhost:8080/api/borders/:id',
    async ({ params, request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get('page') || 1);
      const pageSize = 8;
      const orderBy =
        url.searchParams.get('orderBy') === BordersOrderBy.Rank
          ? BordersOrderBy.Rank
          : BordersOrderBy.CreatedAt;
      const sort =
        url.searchParams.get('sort') === BorderSort.Desc
          ? BorderSort.Desc
          : BorderSort.Asc;
      const filterByName = url.searchParams.get('filterByName') || '';
      const id = params.id;
      if (!id)
        return HttpResponse.json(
          { message: 'Border not found' },
          { status: 404 },
        );
      const rewards = borders[id as keyof typeof borders];
      if (!rewards)
        return HttpResponse.json(
          { message: 'Border not found' },
          { status: 404 },
        );
      return HttpResponse.json(
        getPagination({ rewards, filterByName, page, pageSize, sort, orderBy }),
        { status: 200 },
      );
    },
  ),
];
