import { twitchChannel } from './core/settings.js';
import { assingRandomBorder, assingSpecialBorder } from './scripts/borders.js';
import { TmiClient } from './services/tmi-client.js';
import { sanitizeMessage } from './utils/tmi.js';

let isActiveBorderSpecial = false;

let client;

function handleOnProcess() {
  process.on('exit', async () => {
    console.log('🚪 Saliendo... cerrando conexión.');
    await client.disconnect();
  });

  process.on('SIGINT', async () => {
    console.log('🚪 Interrumpido manualmente... cerrando conexión.');
    await client.disconnect();
    process.exit();
  });
}

const messagesCallbacks = async (channel, tag, msg, self) => {
  if (self) return;
  const isCreator = tag['display-name'] === channel.replace('#', '');
  const isMod = tag['mod'];
  if ((isCreator || isMod) && msg?.startsWith('!border')) {
    const login = msg.replace('!border', '').replace('@', '').trim();
    assingRandomBorder({ username: login })
      .then(() =>
        client.say(
          channel,
          sanitizeMessage(`🤖 @${login} ya tienes tú borde aletorio`),
        ),
      )
      .catch(() =>
        client.say(
          channel,
          sanitizeMessage(
            `❌ @${login}: no pudismos entregarte el borde [¿Por qué @suiz1de nunca trabaja?].`,
          ),
        ),
      );
  }
  if ((isCreator || isMod) && msg === '!enable-day') {
    isActiveBorderSpecial = true;
    client.say(channel, 'Se activó el borde especial del día.');
  }

  if (isActiveBorderSpecial && msg === '!disable-day') {
    isActiveBorderSpecial = false;
    client.say(channel, 'Se desactivo el borde especial del día.');
  }
  if (isActiveBorderSpecial && msg.startsWith('!reward')) {
    const username = tag['username'];
    assingSpecialBorder({ username })
      .then((res) => client.say(channel, sanitizeMessage(res)))
      .catch((err) => client.say(channel, sanitizeMessage(err)));
  }
};

async function main() {
  client = new TmiClient();
  await client.connect().then((res) => console.log(res));
  client.say(twitchChannel, '🤖 Un stream nuevo comienza!');
  handleOnProcess();

  client.on('message', messagesCallbacks);
}

main()
  .then(() => console.log('🤖 Bot iniciado correctamente.'))
  .catch((err) => {
    console.error('Error al iniciar el bot:', err);
  });
