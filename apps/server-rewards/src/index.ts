import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { initClient } from './db';
import { BorderEntity } from './models/entities/border.type';
import { RankingEntity } from './models/entities/ranking.type';
import { BorderUser } from './models/type/border-user.type';
import { UserRanking } from './models/type/user-ranking.type';
import { getUserInfo } from './services/twitch';

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.use('/*', cors({ origin: ['http://localhost:3000'] }));

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
        ranking: usersCount.sort(
          (a, b) => b.quantityBorders - a.quantityBorders,
        ),
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

app.post('/register', async (c) => {
  const authentication = c.req.header('Authorization');

  if (!authentication || !authentication.startsWith('Bearer ')) {
    return c.json({ message: 'Unauthorized' }, 401);
  }

  const clientId = c.env.TWITCH_CLIENT_ID;

  const client = initClient({
    SUPABASE_URL: c.env.SUPABASE_URL,
    SUPABASE_KEY: c.env.SUPABASE_KEY,
  });

  try {
    const { data: user } = await getUserInfo(
      authentication.replace('Bearer ', ''),
      clientId,
    );
    if (!user.length) return c.json({ message: 'Unauthorized' }, 401);

    const { data, error } = await client
      .from('users')
      .select('id')
      .eq('twitch_ref', user[0].id)
      .single();

    if (error) return c.json({ message: error.message }, 500);

    if (data) {
      return c.json({ message: 'Registered successfully' }, 200);
    }

    await client.from('users').insert([
      {
        twitch_ref: user[0].id,
        login: user[0].login,
        display_name: user[0].display_name,
        email: user[0].email,
        profile_image_url: user[0].profile_image_url,
      },
    ]);

    return c.json({ message: 'Registered successfully' }, 200);
  } catch {
    return c.json({ message: 'Failed to register user' }, 500);
  }
});

export default app;
