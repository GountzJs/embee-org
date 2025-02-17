import { Client } from '@libsql/client';
import { UserBordersRepository } from '../repositories/user-borders.repository';

export class UsersBordersService {
  constructor(
    private userBordersRepository: UserBordersRepository = new UserBordersRepository(),
  ) {}

  async getRanking({ client }: { client: Client }) {
    const userBorders = await this.userBordersRepository.getRanking(client);
    return userBorders;
  }

  async getBordersByUserId({
    client,
    userId,
  }: {
    client: Client;
    userId: string;
  }) {
    const borders = await this.userBordersRepository.getBorderByUserId(
      client,
      userId,
    );
    return borders;
  }
}
