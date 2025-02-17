import { Client } from '@libsql/client';
import { BorderByUserIdReq } from '../models/interfaces/border-by-user-id.interface';

export class UserBordersRepository {
  async getRanking(client: Client) {
    const query = `
        SELECT 
            u.id, 
            u.login AS username, 
            u.twitch_ref AS twitchRef, 
            u.profile_image_url AS avatar, 
            COUNT(ub.id) AS quantityBorders
        FROM users u
        INNER JOIN user_borders ub ON u.id = ub.user_id
        GROUP BY u.id
        ORDER BY quantityBorders DESC, u.login ASC LIMIT 8
    `;
    const { rows } = await client.execute(query);
    return rows;
  }

  async getBorderByUserId({
    client,
    userId,
    page,
    pageSize,
    filterByName,
  }: BorderByUserIdReq) {
    const offset = (page - 1) * pageSize;

    let sql = `
    SELECT 
      b.id, 
      b.url,
      b.special,
      b.name,
      us.login AS username,
      us.profile_image_url AS avatar,
      COUNT(ub.id) AS quantity,
      MAX(ub.created_at) AS last_created_at
    FROM user_borders ub 
    JOIN borders b ON ub.border_id = b.id 
    JOIN users us ON ub.user_id = us.id
    WHERE ub.user_id = ?
  `;

    let countSql = `
    SELECT COUNT(DISTINCT b.id) AS total
    FROM user_borders ub 
    JOIN borders b ON ub.border_id = b.id 
    JOIN users us ON ub.user_id = us.id
    WHERE ub.user_id = ?
  `;

    if (filterByName) {
      sql += ` AND b.name LIKE ?`;
      countSql += ` AND b.name LIKE ?`;
    }

    sql += `
    GROUP BY b.id, ub.user_id
    ORDER BY last_created_at DESC
    LIMIT ? OFFSET ?;
  `;

    // Preparar los argumentos para ambas queries
    const args: any[] = [userId];
    const countArgs: any[] = [userId];
    if (filterByName) {
      args.push(`%${filterByName}%`);
      countArgs.push(`%${filterByName}%`);
    }
    args.push(pageSize, offset);

    const { rows: countRows } = await client.execute({
      sql: countSql,
      args: countArgs,
    });
    const totalRecords = Number(countRows[0].total || 0);

    const totalPages = Math.ceil(totalRecords / pageSize);

    const { rows } = await client.execute({ sql, args });
    return {
      borders: rows,
      pagination: {
        page,
        pageSize,
        totalRecords,
        totalPages,
      },
    };
  }
}
