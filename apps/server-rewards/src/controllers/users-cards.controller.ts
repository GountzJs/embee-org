import { Context } from 'hono';
import { BlankInput } from 'hono/types';
import { initTursoClient } from '../db';
import { UserCardsService } from '../services/user-cards.service';

type CardsLatestContext = Context<
  {
    Bindings: CloudflareBindings;
  },
  '/api/cards/latest/:id',
  BlankInput
>;

export class UsersCardsController {
  constructor(
    private readonly userCardsService: UserCardsService = new UserCardsService(),
  ) {}

  getLatestCards = async (c: CardsLatestContext) => {
    const { id } = c.req.param();
    const { quantity } = await c.req.json();
    const qnt = Number(quantity || 0);
    if (!qnt) return c.json({ message: 'Invalid quantity' }, 400);
    const client = initTursoClient({
      TURSO_DATABASE_URL: c.env.TURSO_DATABASE_URL,
      TURSO_AUTH_TOKEN: c.env.TURSO_AUTH_TOKEN,
    });
    try {
      const cards = await this.userCardsService.getLastCards({
        client,
        userId: id,
        limit: qnt,
      });
      return c.json({ cards }, 200);
    } catch {
      return c.json({ message: 'Something went wrong' }, 500);
    }
  };
}
