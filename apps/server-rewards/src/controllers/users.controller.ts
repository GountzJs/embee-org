import { Context } from 'hono';
import { BlankInput } from 'hono/types';
import { initTursoClient } from '../db';
import { UsersService } from '../services/users.service';

type UserByIdContext = Context<
  {
    Bindings: CloudflareBindings;
  },
  '/api/users/:id',
  BlankInput
>;

type UsersByUsernameContext = Context<
  {
    Bindings: CloudflareBindings;
  },
  '/api/users',
  BlankInput
>;

export class UsersController {
  constructor(private usersService: UsersService = new UsersService()) {}

  getById = async (c: UserByIdContext) => {
    const { id } = c.req.param();
    const client = initTursoClient({
      TURSO_DATABASE_URL: c.env.TURSO_DATABASE_URL,
      TURSO_AUTH_TOKEN: c.env.TURSO_AUTH_TOKEN,
    });
    try {
      const user = await this.usersService.getById({ client, id });

      return c.json({ user }, 200);
    } catch (err) {
      if (err instanceof Error) {
        return c.json({ message: 'User not found' }, 404);
      }
      return c.json({ message: 'Generic error, try later' }, 500);
    }
  };

  getManyByUsername = async (c: UsersByUsernameContext) => {
    const { username } = c.req.query();
    if (!username || username.length < 3)
      return c.json({ message: 'Username invalid or too short' }, 400);

    const client = initTursoClient({
      TURSO_DATABASE_URL: c.env.TURSO_DATABASE_URL,
      TURSO_AUTH_TOKEN: c.env.TURSO_AUTH_TOKEN,
    });

    try {
      const users = await this.usersService.getManyByUsername({
        client,
        username,
      });
      return c.json({ users }, 200);
    } catch (error) {
      if (error instanceof Error)
        return c.json(
          { message: "We can't find users with that username" },
          406,
        );
      return c.json({ message: 'Generic error, try later' }, 500);
    }
  };
}
