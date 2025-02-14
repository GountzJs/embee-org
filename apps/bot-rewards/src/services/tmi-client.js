import tmi from 'tmi.js';
import { debug } from '../core/settings.js';

export class TmiClient {
  #client;
  #isConnected;

  constructor({ identity, channels }) {
    this.#isConnected = false;
    this.#initClient({ identity, channels });
  }

  #initClient({ identity, channels }) {
    const options = {
      connection: { reconnect: true },
      channels,
      debugger: debug,
    };
    if (identity) options.identity = identity;
    this.#client = new tmi.Client({
      connection: { reconnect: true },
      channels,
    });
  }

  connect() {
    return this.#client.connect().then(() => (this.#isConnected = true));
  }

  disconnect() {
    if (!this.#isConnected) return;
    return this.#client.disconnect();
  }

  on(key, callback) {
    return this.#client.on(key, callback);
  }

  get isConnected() {
    return this.#isConnected;
  }
}
