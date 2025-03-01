import { Context } from 'hono';
import { BlankInput } from 'hono/types';
import { initTursoClient } from '../db';
import { BorderSort } from '../models/enums/border-sort';
import { BordersOrderBy } from '../models/enums/borders-order-by.enum';
import { UsersBordersService } from '../services/user-borders.service';

type GetRankingContext = Context<
  {
    Bindings: CloudflareBindings;
  },
  '/api/ranking',
  BlankInput
>;

type GetBordersByUserIdContext = Context<
  {
    Bindings: CloudflareBindings;
  },
  '/api/borders/:id',
  BlankInput
>;

export class UsersBordersController {
  constructor(
    private userBordersRepository: UsersBordersService = new UsersBordersService(),
  ) {}

  getRanking = async (c: GetRankingContext) => {
    const client = initTursoClient({
      TURSO_DATABASE_URL: c.env.TURSO_DATABASE_URL,
      TURSO_AUTH_TOKEN: c.env.TURSO_AUTH_TOKEN,
    });
    try {
      const ranking = await this.userBordersRepository.getRanking({
        client,
      });
      return c.json({ ranking }, 200);
    } catch {
      return c.json({ message: 'Generic error, try later' }, 500);
    }
  };

  getBordersByUserId = async (c: GetBordersByUserIdContext) => {
    const { id } = c.req.param();
    const { page, filterByName } = c.req.query();
    const orderBy =
      c.req.query('orderBy') === BordersOrderBy.Rank
        ? BordersOrderBy.Rank
        : BordersOrderBy.CreatedAt;
    const sort =
      c.req.query('sort') === BorderSort.Asc ? BorderSort.Asc : BorderSort.Desc;
    const pageNumber = Number(page);
    const client = initTursoClient({
      TURSO_DATABASE_URL: c.env.TURSO_DATABASE_URL,
      TURSO_AUTH_TOKEN: c.env.TURSO_AUTH_TOKEN,
    });
    try {
      const res = await this.userBordersRepository.getBordersByUserId({
        client,
        userId: id,
        page: isNaN(pageNumber) || 0 ? 1 : pageNumber,
        pageSize: 10,
        filterByName,
        orderBy,
        sort,
      });
      return c.json(res, 200);
    } catch {
      return c.json({ message: 'Generic error, try later' }, 500);
    }
  };
}
