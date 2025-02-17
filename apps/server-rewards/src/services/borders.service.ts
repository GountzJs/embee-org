import { Client } from '@libsql/client';
import { BordersRepository } from '../repositories/borders.repository';

export class BordersService {
  constructor(
    private bordersRepository: BordersRepository = new BordersRepository(),
  ) {}

  async getByUserId({ client, userId }: { client: Client; userId: string }) {
    const borders = await this.bordersRepository.getByUserId(client, userId);
    return borders;
  }
}
