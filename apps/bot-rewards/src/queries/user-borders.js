import { v4 } from 'uuid';
import { turso } from '../db/db.js';
import { createAt } from '../utils/time.js';

export const createUserBorder = ({ userId, borderId }) => {
  return turso.execute(
    'INSERT INTO user_borders (id, user_id, border_id, created_at) VALUES (?, ?, ?, ?)',
    [v4(), userId, borderId, createAt()],
  );
};
