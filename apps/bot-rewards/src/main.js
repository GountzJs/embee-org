import { twitchChannel } from './core/settings.js';
import { assingRandomBorder } from './scripts/borders.js';
import { TmiClient } from './services/tmi-client.js';

function handleOnProcess(client) {
  process.on('exit', async () => {
    console.log('🚪 Saliendo... cerrando conexión.');
    await client.disconnect();
  });
}

const messagesCallbacks = async (channel, tag, msg, self) => {
  if (self) return;
  const isCreator = tag['display-name'] === channel.replace('#', '');
  const isMod = tag['mod'];
  if ((isCreator || isMod) && msg.startsWith('!border')) {
    const login = msg.replace('!border', '').replace('@', '').trim();
    await assingRandomBorder({ username: login });
  }
};

async function main() {
  const client = new TmiClient({ channels: [twitchChannel] });
  await client.connect();

  handleOnProcess(client);

  client.on('message', messagesCallbacks);
}

main()
  .then(() => {
    console.log('🤖 Bot iniciado correctamente.');
  })
  .catch((err) => {
    console.error('Error al iniciar el bot:', err);
  });
