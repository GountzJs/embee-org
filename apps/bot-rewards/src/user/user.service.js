import { UserRepository } from './user.repository.js';

export class UserService {
  static async getIdByTwitchRef({ twitchRef }) {
    try {
      const { id } = await UserRepository.getByTwitchRef({ twitchRef });
      return id;
    } catch (err) {
      if (err?.message?.includes('[CODE:404]')) throw err;
      throw new Error(
        '[CODE:9900] Algo salió mal al buscar el id del usuario.',
      );
    }
  }

  static async createUser({ id, login, displayName, profileImageUrl }) {
    try {
      const userId = await UserRepository.create({
        id,
        login,
        displayName,
        profileImageUrl,
      });
      return userId;
    } catch (err) {
      throw new Error('[CODE:9900] Algo salió mal al crear el usuario.');
    }
  }
}
