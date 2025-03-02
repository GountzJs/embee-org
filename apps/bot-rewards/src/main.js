import { UserBordersActions } from './actions/user-borders.js';
import { twitchChannel } from './core/settings.js';
import client from './twitch/tmi-client.js';
import { sanitizeMessage } from './twitch/utils.js';

let isActiveBorderSpecial = false;

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
  if (self || !msg?.length) return;
  const isCreator = tag['display-name'] === channel.replace('#', '');
  const isMod = tag['mod'];
  if (msg.toLowerCase().includes('gwenas')) {
    client.say(twitchChannel, '🐈 Deja de ser tan furro Suiz1de');
  }
  if ((isCreator || isMod) && msg === '!enable-day') {
    isActiveBorderSpecial = true;
    client.say(twitchChannel, '🤖 Se activó el borde especial del día.');
  }

  if (isActiveBorderSpecial && msg === '!disable-day') {
    isActiveBorderSpecial = false;
    client.say(twitchChannel, '🤖 Se desactivo el borde especial del día.');
  }

  if (isActiveBorderSpecial && msg.toLowerCase() === '!reward') {
    const username = tag['username'];
    await UserBordersActions.assingSpecialBorder({ username });
  }

  if (
    (isCreator || isMod) &&
    msg.toLowerCase().match(/!\[(\d+)\]-borders\s+(@\w+)/g)
  ) {
    const login = msg
      .split('@')[1]
      .replace(/[^a-zA-Z0-9_-\s]/g, '')
      .trim();
    const quantity = msg.split(']')[0].replace(/[^0-9]/g, '');
    const quantityNumber = Number(quantity || 1) || null;
    if (isNaN(quantityNumber)) {
      console.log(
        `❌ Se intentó asignar un número inválido de bordes al usuario [@${login}].`,
      );
    }
    if (quantity) {
      await UserBordersActions.assignManyRandomByUsername({
        username: login,
        quantity,
      });
    }
  }

  if ((isCreator || isMod) && msg.toLowerCase().startsWith('!border')) {
    const login = msg
      .replace('!border', '')
      .replace('@', '')
      .replace(/[^a-zA-Z0-9_-\s]/g, '')
      .trim();
    await UserBordersActions.assingRandomByUsername({ username: login });
    return;
  }

  if ((isCreator || isMod) && msg.toLowerCase() === '!gountzbot') {
    client.say(
      twitchChannel,
      sanitizeMessage(
        `🤖 Hola @${twitchChannel.replace('#', '')}! estoy aquí listo para canjear las recompensas`,
      ),
    );
  }
};

async function main() {
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
