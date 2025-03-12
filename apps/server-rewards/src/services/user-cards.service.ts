import { Client } from '@libsql/client';
import { UserCardsRepository } from '../repositories/user-cards.repository';

export class UserCardsService {
  constructor(
    private readonly userCardsRepository: UserCardsRepository = new UserCardsRepository(),
  ) {}

  async getLastCards({
    client,
    limit,
    userId,
  }: {
    userId: string;
    limit: number;
    client: Client;
  }) {
    const cards = await this.userCardsRepository.getLastCards(
      client,
      userId,
      limit,
    );
    return cards;
  }
}
