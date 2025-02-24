import { twitchChannel } from '@consts/channel';
import { Client, Options } from 'tmi.js';

export class TmiService {
  private _client: Client;

  constructor() {
    this.client = {
      channels: [twitchChannel],
    };
  }

  connect() {
    return this.client.connect();
  }

  disconnect() {
    return this.client.disconnect();
  }

  on(
    callback: (
      channel: string,
      tags: any,
      message: string,
      self: boolean,
    ) => void,
  ) {
    const data = 'message';
    this.client.on(data, callback);
  }

  set client(opts: Options) {
    this._client = new Client(opts);
  }

  get client(): Client {
    return this._client;
  }
}
