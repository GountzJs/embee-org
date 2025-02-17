import { cors } from 'hono/cors';
import { app } from './app';
import { origins } from './consts/origin';
import { UsersBordersRoutes } from './routes/users-borders.routes';
import { UsersRoutes } from './routes/users.routes';

app.use('/api/*', cors({ origin: origins }));

new UsersRoutes();

new UsersBordersRoutes();

export default app;
