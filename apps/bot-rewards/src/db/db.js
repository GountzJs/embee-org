import { createClient } from '@libsql/client';
import { tursoAuthToken, tursoDatabaseUrl } from '../core/settings.js';

export const turso = createClient({
  url: tursoDatabaseUrl,
  authToken: tursoAuthToken,
});
