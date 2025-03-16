import { Client } from '@libsql/client';

export class UsersRepository {
  async getById(client: Client, id: string) {
    const query = `
      WITH NonStaffRanked AS (
        SELECT
          u.id,
          u.login AS username,
          u.profile_image_url AS avatar,
          COUNT(ub.id) AS quantityBorders,
          RANK() OVER (ORDER BY COUNT(ub.id) DESC, u.login ASC) AS rank_position
        FROM users u
        LEFT JOIN user_borders ub ON u.id = ub.user_id
        WHERE u.is_staff = false
        GROUP BY u.id
      ),

      StaffUsers AS (
        SELECT
          u.id,
          u.login AS username,
          u.profile_image_url AS avatar,
          COUNT(ub.id) AS quantityBorders,
          NULL AS rank_position
        FROM users u
        LEFT JOIN user_borders ub ON u.id = ub.user_id
        WHERE u.is_staff = true
        GROUP BY u.id
      )

      SELECT
        id,
        username,
        avatar,
        quantityBorders,
        CASE
          WHEN is_staff = true THEN 'CHALLENGER'
          WHEN rank_position = 1 THEN 'CHALLENGER'
          WHEN rank_position = 2 THEN 'MASTER'
          WHEN rank_position = 3 THEN 'DIAMOND'
          WHEN rank_position = 4 THEN 'PLATINIUM'
          WHEN rank_position = 5 THEN 'GOLD'
          WHEN rank_position = 6 THEN 'SILVER'
          WHEN rank_position = 7 THEN 'BRONZE'
          ELSE 'UNRANKED'
        END AS rank
      FROM (
        SELECT *, true as is_staff FROM StaffUsers
        UNION ALL
        SELECT *, false as is_staff FROM NonStaffRanked
      )
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
