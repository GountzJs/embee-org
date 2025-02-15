import { TwitchApiService } from '../twitch/twitch-service.js';
import { UserService } from './user.service.js';

export class UserController {
  static async createIfNotExists({ login }) {
    const { data } = await TwitchApiService.getUser({ login });
    const user = data[0];
    if (!user) throw new Error('[CODE:404] No se ha encontrado el usuario.');
    try {
      const id = await UserService.getIdByTwitchRef({
        twitchRef: user.id,
      });
      return id;
    } catch (err) {
      if (!err.message.includes('[CODE:404]')) throw err;
    }
    try {
      const id = await UserService.createUser({
        id: user.id,
        login: user.login,
        displayName: user['display_name'],
        profileImageUrl: user['profile_image_url'],
      });
      return id;
    } catch (err) {
      throw err;
    }
  }
}
