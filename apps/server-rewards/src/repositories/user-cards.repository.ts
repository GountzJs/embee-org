import { Client } from '@libsql/client';

export class UserCardsRepository {
  async getLastCards(client: Client, userId: string, limit: number) {
    const { rows } = await client.execute({
      sql: `
        SELECT
          pack,
          category, 
          name,
          description,
          identify,
          cover,
          is_special
        FROM user_cards
        WHERE user_id = ?
        ORDER BY created_at DESC
        LIMIT ?
      `,
      args: [userId, limit],
    });
    return rows;
  }
}
