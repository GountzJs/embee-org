import { turso } from '../db/db.js';
import { createDateAt, createId } from '../utils/functions.js';

export class UserBorderRepository {
  static create({ userId, borderId }) {
    return turso.execute(
      'INSERT INTO user_borders (id, user_id, border_id, created_at) VALUES (?, ?, ?, ?)',
      [createId(), userId, borderId, createDateAt()],
    );
  }

  static async createMany({ userId, bordersId }) {
    const query = ({ id }) => ({
      sql: 'INSERT INTO user_borders (id, user_id, border_id, created_at) VALUES (?, ?, ?, ?)',
      args: [createId(), userId, id, createDateAt()],
    });
    const queryArray = bordersId.map((id) => query({ id }));
    return turso.batch(queryArray, 'write');
  }
}
