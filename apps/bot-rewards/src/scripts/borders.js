import { addRandomBorder, addSpecialBorder } from '../services/db-rewards.js';

export const assingRandomBorder = async ({ username }) => {
  try {
    await addRandomBorder({ login: username });
    return console.log(`🤖 Se le ha asignado un borde al usuario ${username}.`);
  } catch (err) {
    if (err?.message === 'CODE:404')
      throw console.log(
        `❌ ${username}: No se ha encontrado el usuario. [CODE:404]`,
      );

    if (err?.message === 'CODE:9901')
      throw console.log(
        `❌ ${username}: Algo salió mal al recuperar el id del usuario. [CODE:9901]`,
      );
    if (err?.message === 'CODE:9902') {
      throw console.log(
        `❌ ${username}: Algo salió mal al asignar el borde al usuario.[CODE:9902]`,
      );
    }
    throw console.log(`❌ ${username}: ${err?.message} [CODE:XXXX]`);
  }
};

export const assingSpecialBorder = async ({ username }) => {
  try {
    await addSpecialBorder({ login: username });
    return `🤖 @${username} ya tienes tu borde especial!`;
  } catch (err) {
    if (err?.message === 'CODE:401')
      throw `❌ @${username}: Ya tienes el borde especial, solo es posible canjearlo una vez`;
    throw `❌ @${username}: No se pudo canjear tu borde, vuelva a intentarlo`;
  }
};
