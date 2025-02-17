import { Client } from '@libsql/client';

export class UsersRepository {
  async getById(client: Client, id: string) {
    const query = `
      WITH RankedUser AS (
        SELECT
          u.id,
          u.login AS username,
          u.profile_image_url AS avatar,
          COUNT(ub.id) AS quantityBorders,
          RANK() OVER (ORDER BY COUNT(ub.id) DESC, u.login ASC) AS rank_position
        FROM users u
        LEFT JOIN user_borders ub ON u.id = ub.user_id
        GROUP BY u.id
      )
      SELECT
          id,
          username,
          avatar,
          quantityBorders,
          CASE
            WHEN rank_position = 1 THEN 'CHALLENGER'
            WHEN rank_position = 2 THEN 'MASTER'
            WHEN rank_position = 3 THEN 'DIAMOND'
            WHEN rank_position = 4 THEN 'PLATINIUM'
            WHEN rank_position = 5 THEN 'GOLD'
            WHEN rank_position = 6 THEN 'SILVER'
            WHEN rank_position = 7 THEN 'BRONZE'
            ELSE 'UNRANKED'
          END AS rank
      FROM RankedUser
      WHERE id = ?
    `;
    const { rows } = await client.execute({
      sql: query,
      args: [id],
    });
    return rows[0];
  }

  async getManyByUsername(client: Client, username: string) {
    const { rows } = await client.execute({
      sql: 'SELECT id, login as username, profile_image_url as avatar FROM users WHERE login LIKE ?',
      args: [`%${username}%`],
    });
    return rows;
  }
}
