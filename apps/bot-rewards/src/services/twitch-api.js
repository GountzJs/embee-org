import axios from 'axios';
import {
  twitchApiUrl,
  twitchAuthToken,
  twitchClientId,
} from '../core/settings.js';

export class TwitchApi {
  static async getUser({ id, login }) {
    const url = new URL(`${twitchApiUrl}/helix/users`);
    if (id) url.searchParams.append('id', id);
    else if (login) url.searchParams.append('login', login);
    const { data } = await axios.get(url.toString(), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Client-ID': twitchClientId,
        Authorization: `Bearer ${twitchAuthToken}`,
      },
    });
    return data;
  }
}
