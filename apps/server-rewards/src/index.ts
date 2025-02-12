import { Hono } from 'hono';

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get('/api', (c) => {
  return c.json({ message: 'Hello World!' });
});

export default app;
