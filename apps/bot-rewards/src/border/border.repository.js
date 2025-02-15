import { turso } from '../db/db.js';

const query = `
  SELECT 
    b.id
  FROM 
    borders b
  WHERE 
    b.special = 0
  AND (
    SELECT 
      COUNT(*) 
    FROM 
      user_borders ub
    WHERE 
      ub.user_id = ? AND ub.border_id = b.id
  ) < 7
  ORDER BY RANDOM()
  LIMIT 1;
`;

export class BorderRepository {
  static async getRandomBorder({ id }) {
    const { rows } = await turso.execute({
      sql: query,
      args: [id],
    });
    return rows[0];
  }

  static async getRandomBorders({ limit, id }) {
    const queries = Array.from({ length: limit }, () => ({
      sql: query,
      args: [id],
    }));

    const res = await turso.batch(queries, 'read');
    const borders = res
      .map((result) => result.rows.map((row) => row.id))
      .flat();
    return borders;
  }

  static async verifyIfAlreadyAssigned({ userId, borderId }) {
    const { rows } = await turso.execute({
      sql: `
        SELECT 
          COUNT(*) 
        FROM 
          user_borders ub
        WHERE 
          ub.user_id = ? AND ub.border_id = ?
      `,
      args: [userId, borderId],
    });

    return rows[0]['COUNT(*)'] !== 0;
  }
}
