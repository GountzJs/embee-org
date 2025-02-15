import { turso } from '../db/db.js';
import { createDateAt, createId } from '../utils/functions.js';

export class UserRepository {
  static async getByTwitchRef({ twitchRef }) {
    const { rows } = await turso.execute(
      'SELECT id FROM users WHERE twitch_ref = ?',
      [twitchRef],
    );
    const result = rows[0] || null;
    if (!result) throw new Error('[CODE:404] No se ha encontrado el usuario.');
    return result;
  }

  static async create({ id, login, displayName, profileImageUrl }) {
    const userId = createId();
    await turso.execute(
      'INSERT INTO users (id, twitch_ref, login, display_name, profile_image_url, created_at) VALUES (?, ?, ?, ?, ?, ?)',
      [userId, id, login, displayName, profileImageUrl, createDateAt()],
    );
    return userId;
  }
}
