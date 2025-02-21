import { Client } from '@libsql/client';
import { borderByIdAdapter } from '../adapters/border-by-id.adapter';
import { BorderByUserIdReq } from '../models/interfaces/border-by-user-id.interface';
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
    page,
    pageSize,
    filterByName,
    orderBy,
    sort,
  }: BorderByUserIdReq) {
    const { borders, pagination } =
      await this.userBordersRepository.getBorderByUserId({
        client,
        userId,
        page,
        pageSize,
        filterByName,
        orderBy,
        sort,
      });
    return {
      borders: borders.map((border) => borderByIdAdapter(border)),
      pagination,
    };
  }
}
