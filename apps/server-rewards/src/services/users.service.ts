import { Client } from '@libsql/client';
import { UsersRepository } from '../repositories/users.repository';

export class UsersService {
  constructor(
    private usersRepository: UsersRepository = new UsersRepository(),
  ) {}

  async getById({ client, id }: { client: Client; id: string }) {
    const user = await this.usersRepository.getById(client, id);
    if (!user) throw new Error('CODE[404]: User not found');
    return user;
  }

  async getManyByUsername({
    client,
    username,
  }: {
    client: Client;
    username: string;
  }) {
    const users = await this.usersRepository.getManyByUsername(
      client,
      username,
    );
    if (!users.length) throw new Error('CODE[404]: User not found');
    return users;
  }
}
