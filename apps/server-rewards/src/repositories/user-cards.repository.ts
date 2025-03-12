import { Client } from '@libsql/client';

export class UserCardsRepository {
  async getLastCards(client: Client, userId: string, limit: number) {
    const { rows } = await client.execute({
      sql: `
        SELECT
          c.pack,
          c.category,
          c.name,
          c.description,
          c.cover,
          c.identify,
          c.is_special
        FROM user_cards uc
        INNER JOIN cards c ON uc.card_id = c.id
        WHERE uc.user_id = ?
        ORDER BY uc.created_at DESC
        LIMIT ?
      `,
      args: [userId, limit],
    });
    return rows;
  }
}
