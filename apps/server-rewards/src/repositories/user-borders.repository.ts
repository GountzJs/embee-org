import { Client } from '@libsql/client';

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

  async getBorderByUserId(client: Client, userId: string) {
    const { rows } = await client.execute({
      sql: `
        SELECT 
          b.id, 
          b.url,
          b.special,
          b.name,
          us.login AS username,
          us.profile_image_url AS avatar,
          COUNT(ub.id) AS quantity
        FROM user_borders ub 
        JOIN borders b ON ub.border_id = b.id 
        JOIN users us ON ub.user_id = us.id
        WHERE ub.user_id = ?
        GROUP BY b.id, ub.user_id;
      `,
      args: [userId],
    });
    return rows;
  }
}
