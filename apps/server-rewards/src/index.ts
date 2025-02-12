import { Hono } from 'hono';
import { initClient } from './db';

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get('/ranking', async (c) => {
  const { page = '0' } = c.req.query();
  const qPage = Number(page) || null;

  if (!qPage || qPage < 0)
    return c.json({ message: 'Failed to parse page query param' }, 400);

  const limit = 10;
  const offset = qPage * limit;

  const client = initClient({
    SUPABASE_URL: c.env.SUPABASE_URL,
    SUPABASE_KEY: c.env.SUPABASE_KEY,
  });

  try {
    const { data, error } = await client
      .from('user_borders')
      .select('user_id, users(login, avatar), count(*) as quantityBorders')
      .order('quantityBorders', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) return c.json({ message: error.message }, 500);

    const { count } = await client
      .from('user_borders')
      .select('user_id', { count: 'exact', head: true });

    const moreItems = count ? offset + limit < count : false;

    console.log(data);

    return c.json(
      {
        ranking: [],
        moreItems,
      },
      200,
    );
  } catch {
    return c.json({ message: 'Failed to fetch data' }, 500);
  }
});

export default app;
