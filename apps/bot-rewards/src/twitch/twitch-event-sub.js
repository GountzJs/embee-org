import { EventEmitter } from 'events';
import fetch from 'node-fetch';
import WebSocket from 'ws';

import {
  debug,
  twitchChannelId,
  twitchClientId,
  twitchClientSecret,
} from '../core/settings.js';

export class EventSubWsClient extends EventEmitter {
  #clientId;
  #clientSecret;
  #broadcasterId;

  #accessToken = null;
  #sessionId = null;
  #socket = null;
  #isConnected = false;

  constructor(options) {
    super(); // importante para usar EventEmitter
    this.#clientId = options.clientId;
    this.#clientSecret = options.clientSecret;
    this.#broadcasterId = options.broadcasterId;
  }

  async connect() {
    if (this.#isConnected) return;

    debug && console.log('[EventSubWsClient] Obteniendo AccessToken...');
    this.#accessToken = await this.#getAppAccessToken();

    debug && console.log('[EventSubWsClient] Conectando a WebSocket...');
    this.#socket = new WebSocket('wss://eventsub.wss.twitch.tv/ws');

    this.#socket.on('open', () => {
      debug && console.log('[EventSubWsClient] WebSocket abierto.');
      this.emit('connected');
    });

    this.#socket.on('message', (data) => {
      const message = JSON.parse(data.toString());
      const type = message.metadata?.message_type;

      if (type === 'session_welcome') {
        this.#sessionId = message.payload.session.id;
        this.#isConnected = true;

        debug &&
          console.log(
            '[EventSubWsClient] Bienvenido. Session ID:',
            this.#sessionId,
          );

        this.#subscribeToCheerEvents();
      }

      if (type === 'session_keepalive') {
        debug && console.log('[EventSubWsClient] KeepAlive recibido.');
      }

      if (type === 'notification') {
        const { subscription, event } = message.payload;
        if (subscription.type === 'channel.cheer') {
          debug &&
            console.log(
              `[EventSubWsClient]🎉 Bits recibidos: ${event.bits} de ${event.user_name}`,
            );
          this.emit('cheer', event);
        }
      }

      if (type === 'session_reconnect') {
        const reconnectUrl = message.payload.session.reconnect_url;
        debug &&
          console.log('[EventSubWsClient] Reconectando a:', reconnectUrl);

        this.#socket.close();
        this.#socket = new WebSocket(reconnectUrl);
      }
    });

    this.#socket.on('close', () => {
      debug && console.log('[EventSubWsClient] WebSocket cerrado.');
      this.#isConnected = false;
      this.emit('disconnected');
    });

    this.#socket.on('error', (error) => {
      console.error('[EventSubWsClient] WebSocket error:', error);
      this.emit('error', error);
    });
  }

  disconnect() {
    if (!this.#isConnected) return;

    debug && console.log('[EventSubWsClient] Desconectando...');
    this.#socket.close();
    this.#isConnected = false;
  }

  get isConnected() {
    return this.#isConnected;
  }

  async #getAppAccessToken() {
    const response = await fetch(`https://id.twitch.tv/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `client_id=${this.#clientId}&client_secret=${this.#clientSecret}&grant_type=client_credentials`,
    });

    const data = await response.json();

    if (!data.access_token) {
      throw new Error('No se pudo obtener el Access Token de Twitch');
    }

    debug && console.log('[EventSubWsClient] AccessToken obtenido con éxito.');

    return data.access_token;
  }

  async #subscribeToCheerEvents() {
    if (!this.#accessToken || !this.#sessionId) {
      throw new Error('No hay sessionId o accessToken válido');
    }

    const response = await fetch(
      `https://api.twitch.tv/helix/eventsub/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Client-ID': this.#clientId,
          Authorization: `Bearer ${this.#accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'channel.cheer',
          version: '1',
          condition: {
            broadcaster_user_id: this.#broadcasterId,
          },
          transport: {
            method: 'websocket',
            session_id: this.#sessionId,
          },
        }),
      },
    );

    const data = await response.json();

    if (response.status !== 202) {
      console.error(
        '[EventSubWsClient] Error al suscribirse a channel.cheer:',
        data,
      );
      this.emit('error', new Error('Error al suscribirse a channel.cheer'));
      return;
    }

    debug &&
      console.log(
        '[EventSubWsClient] Suscripción a channel.cheer exitosa:',
        data,
      );
  }
}

const eventSubClient = new EventSubWsClient({
  clientId: twitchClientId,
  clientSecret: twitchClientSecret,
  broadcasterId: twitchChannelId,
});

export default eventSubClient;
