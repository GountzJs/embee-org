import { turso } from '../db/db.js';

export const getRandomBorder = async () => {
  const { rows } = await turso.execute(
    'SELECT id FROM borders WHERE special = 0 ORDER BY RANDOM() LIMIT 1',
  );
  const result = rows[0];
  return result;
};
