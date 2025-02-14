import { v4 } from 'uuid';
import { turso } from '../db/db.js';
import { createAt } from '../utils/time.js';

export const getRandomBorder = async () => {
  const { rows } = await turso.execute(
    'SELECT id FROM borders WHERE special = 0 ORDER BY RANDOM() LIMIT 1',
  );
  const result = rows[0];
  return result;
};

export const userAlreadyHaveBorderSpecial = async ({ userId, borderId }) => {
  const { rows } = await turso.execute({
    sql: `
      SELECT 1
      FROM user_borders
      WHERE user_id = ? AND border_id = ?
      LIMIT 1
    `,
    args: [userId, borderId],
  });
  if (rows.length > 0) throw new Error('CODE:401');
};

export const addBorderSpecial = async ({ userId, borderId }) => {
  return turso.execute({
    sql: 'INSERT INTO user_borders (id, user_id, border_id, created_at) VALUES (?, ?, ?, ?)',
    args: [v4(), userId, borderId, createAt()],
  });
};
