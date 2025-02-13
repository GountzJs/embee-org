import { Hono } from 'hono';
import { initClient } from './db';
import { BorderEntity } from './models/entities/border.type';
import { RankingEntity } from './models/entities/ranking.type';
import { BorderUser } from './models/type/border-user.type';
import { UserRanking } from './models/type/user-ranking.type';

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get('/ranking', async (c) => {
  const client = initClient({
    SUPABASE_URL: c.env.SUPABASE_URL,
    SUPABASE_KEY: c.env.SUPABASE_KEY,
  });

  try {
    const { data, error } = await client
      .from('user_borders')
      .select(`users!inner(login, twitch_ref, profile_image_url, id)`);

    if (error) return c.json({ message: error.message }, 500);

    const result = data.reduce(
      (acc: { [key: string]: UserRanking }, { users }) => {
        const { login, twitch_ref, profile_image_url, id } =
          users as unknown as RankingEntity;

        const key = twitch_ref;

        if (!acc[key]) {
          acc[key] = {
            id,
            username: login,
            twitchRef: twitch_ref,
            avatar: profile_image_url,
            quantityBorders: 0,
          };
        }

        acc[key].quantityBorders += 1;
        return acc;
      },
      {},
    );

    const usersCount = Object.values(result);

    return c.json(
      {
        ranking: usersCount,
      },
      200,
    );
  } catch (err) {
    return c.json({ message: 'Failed to fetch data' }, 500);
  }
});

app.get('/borders/:id', async (c) => {
  const { id } = c.req.param();
  const client = initClient({
    SUPABASE_URL: c.env.SUPABASE_URL,
    SUPABASE_KEY: c.env.SUPABASE_KEY,
  });

  const { data, error } = await client
    .from('user_borders')
    .select('borders!inner(id, url)')
    .eq('user_id', id);

  if (error) return c.json({ message: error.message }, 500);

  const result = data.reduce(
    (acc: { [key: string]: BorderUser }, { borders }) => {
      const { id, url } = borders as unknown as BorderEntity;

      if (!acc[id]) {
        acc[id] = {
          id,
          url,
          quantity: 0,
        };
      }

      acc[id].quantity += 1;
      return acc;
    },
    {},
  );

  return c.json(
    {
      borders: Object.values(result),
    },
    200,
  );
});

export default app;
