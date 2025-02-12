import { Hono } from 'hono';
import { db } from './db/db';
import { borderSchema } from './db/schemas/border.schema';

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get('/api', async (c) => {
  const result = await db.select().from(borderSchema).all();
  return c.json({ message: result });
});

export default app;
