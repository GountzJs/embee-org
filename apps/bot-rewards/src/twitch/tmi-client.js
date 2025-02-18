import tmi from 'tmi.js';
import {
  debug,
  twitchAuthToken,
  twitchChannel,
  twitchUsername,
} from '../core/settings.js';

export class TmiClient {
  #client;
  #isConnected;

  constructor() {
    this.#isConnected = false;
    this.#initClient();
  }

  #initClient() {
    const options = {
      connection: { reconnect: true },
      channels: [twitchChannel, `#${twitchUsername}`],
      debugger: debug,
    };
    options.identity = {
      username: twitchUsername,
      password: `oauth:${twitchAuthToken}`,
    };
    this.#client = new tmi.Client(options);
  }

  connect() {
    return this.#client.connect().then(() => {
      this.#isConnected = true;
    });
  }

  disconnect() {
    if (!this.#isConnected) return;
    return this.#client.disconnect();
  }

  on(key, callback) {
    return this.#client.on(key, callback);
  }

  say(channel, message) {
    return this.#client.say(channel, message);
  }

  get isConnected() {
    return this.#isConnected;
  }
}

const client = new TmiClient();

export default client;
