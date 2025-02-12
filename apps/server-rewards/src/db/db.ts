import { createClient } from '@libsql/client/web';
import { drizzle } from 'drizzle-orm/libsql';
import config from '../../drizzle.config';

const turso = createClient({
  url: config.dbCredentials.url,
  authToken: config.dbCredentials.authToken,
});

export const db = drizzle(turso);
