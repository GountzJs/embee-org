import { Hono } from 'hono';
import { initClient } from './db';
import { RankingEntity } from './models/entities/ranking.type';
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
      .select(`users!inner(login, twitch_ref, profile_image_url)`);

    if (error) return c.json({ message: error.message }, 500);

    const result = data.reduce(
      (acc: { [key: string]: UserRanking }, { users }) => {
        const { login, twitch_ref, profile_image_url } =
          users as unknown as RankingEntity;

        const key = twitch_ref;

        if (!acc[key]) {
          acc[key] = {
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

    // Convertir el objeto de resultados en un array
    const usersCount = Object.values(result);

    return c.json(
      {
        ranking: usersCount,
      },
      200,
    );
  } catch (err) {
    console.log(err);
    return c.json({ message: 'Failed to fetch data' }, 500);
  }
});

export default app;
