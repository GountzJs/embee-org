import axios from 'axios';
import {
  twitchApiUrl,
  twitchAuthToken,
  twitchClientId,
} from '../core/settings.js';

export class TwitchApiService {
  static async getUser({ id, login }) {
    const query = new URLSearchParams();
    if (id) query.append('id', id);
    else if (login) {
      query.append('login', login);
    } else {
      throw new Error('[CODE:406] No se ha especificado el id o el login.');
    }
    const { data } = await axios.get(
      `${twitchApiUrl}/helix/users?${query.toString()}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Client-ID': twitchClientId,
          Authorization: `Bearer ${twitchAuthToken}`,
        },
      },
    );
    return data;
  }
}
