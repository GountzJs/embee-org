import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { v4 } from 'uuid';
import { origins } from './consts/origin';
import { initTursoClient } from './db';
import { getUserInfo } from './services/twitch';

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.use('/*', cors({ origin: origins }));

app.get('/ranking', async (c) => {
  const turso = initTursoClient({
    TURSO_DATABASE_URL: c.env.TURSO_DATABASE_URL,
    TURSO_AUTH_TOKEN: c.env.TURSO_AUTH_TOKEN,
  });

  try {
    const { rows: ranking } = await turso.execute(`
      SELECT 
        u.id, 
        u.login AS username, 
        u.twitch_ref AS twitchRef, 
        u.profile_image_url AS avatar, 
        COUNT(ub.id) AS quantityBorders
      FROM users u
      INNER JOIN user_borders ub ON u.id = ub.user_id
      GROUP BY u.id
      ORDER BY quantityBorders DESC, u.login ASC
    `);
    return c.json(
      {
        ranking,
      },
      200,
    );
  } catch {
    return c.json({ message: 'Failed to fetch data' }, 500);
  }
});

app.get('/borders/:id', async (c) => {
  const { id } = c.req.param();
  const turso = initTursoClient({
    TURSO_DATABASE_URL: c.env.TURSO_DATABASE_URL,
    TURSO_AUTH_TOKEN: c.env.TURSO_AUTH_TOKEN,
  });
  try {
    const { rows: borders } = await turso.execute({
      sql: `
      SELECT 
          b.id, 
          b.url,
          b.special,
          b.name,
          us.login AS username,
          us.profile_image_url AS avatar,
          COUNT(ub.id) AS quantity
      FROM user_borders ub 
      JOIN borders b ON ub.border_id = b.id 
      JOIN users us ON ub.user_id = us.id
      WHERE ub.user_id = ?
      GROUP BY b.id, ub.user_id;

      `,
      args: [id],
    });
    return c.json(
      {
        borders: borders.map((border) => ({
          ...border,
          special: Boolean(border.special),
        })),
      },
      200,
    );
  } catch (err) {
    console.log(err);
    return c.json({ message: 'Failed to fetch data' }, 500);
  }
});

app.post('/register', async (c) => {
  const authentication = c.req.header('Authorization');

  if (!authentication || !authentication.startsWith('Bearer ')) {
    return c.json({ message: 'Unauthorized' }, 401);
  }

  const turso = initTursoClient({
    TURSO_DATABASE_URL: c.env.TURSO_DATABASE_URL,
    TURSO_AUTH_TOKEN: c.env.TURSO_AUTH_TOKEN,
  });

  try {
    const { data: user } = await getUserInfo(
      authentication.replace('Bearer ', ''),
      c.env.TWITCH_CLIENT_ID,
    );
    if (!user.length) return c.json({ message: 'Unauthorized' }, 401);
    await turso.execute({
      sql: 'INSERT INTO users (id, twitch_ref, login, display_name, profile_image_url) VALUES (?, ?, ?, ?, ?)',
      args: [
        v4(),
        user[0].id,
        user[0].login,
        user[0].display_name,
        user[0].profile_image_url,
      ],
    });
    return c.json({ message: 'Register success' }, 201);
  } catch (err: any) {
    if (err?.code === 'SQLITE_CONSTRAINT')
      return c.json({ message: 'User already register' }, 200);
    return c.json({ message: 'Failed to register user' }, 500);
  }
});

export default app;
