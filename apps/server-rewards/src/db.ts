import { createClient } from '@supabase/supabase-js';

export function initClient(env: {
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
}) {
  const url = env.SUPABASE_URL?.trim();
  if (!url) throw new Error('SUPABASE_URL env var is not defined');
  const key = env.SUPABASE_KEY?.trim();
  if (!key) throw new Error('SUPABASE_KEY env var is not defined');
  return createClient(url, key);
}
