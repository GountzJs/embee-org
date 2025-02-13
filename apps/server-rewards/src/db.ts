import { createClient as tursoCreateClient } from '@libsql/client/web';

export function initTursoClient(env: {
  TURSO_DATABASE_URL: string;
  TURSO_AUTH_TOKEN: string;
}) {
  const url = env.TURSO_DATABASE_URL?.trim();
  if (!url) throw new Error('TURSO_DATABASE_URL env var is not defined');
  const token = env.TURSO_AUTH_TOKEN?.trim();
  if (!token) throw new Error('TURSO_AUTH_TOKEN env var is not defined');
  return tursoCreateClient({
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  });
}
