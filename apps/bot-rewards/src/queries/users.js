import { v4 } from 'uuid';
import { turso } from '../db/db.js';
import { createAt } from '../utils/time.js';

export const getIdUserByTwitchRef = async ({ twitchRef }) => {
  const { rows } = await turso.execute(
    'SELECT id FROM users WHERE twitch_ref = ?',
    [twitchRef],
  );
  const result = rows[0] || null;
  if (!result) throw new Error('CODE:404');
  return result;
};

export const createUser = async ({
  id,
  login,
  displayName,
  profileImageUrl,
}) => {
  const userId = v4();
  await turso.execute(
    'INSERT INTO users (id, twitch_ref, login, display_name, profile_image_url, created_at) VALUES (?, ?, ?, ?, ?, ?)',
    [userId, id, login, displayName, profileImageUrl, createAt()],
  );
  return { id: userId };
};
