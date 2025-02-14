import { addRandomBorder } from '../services/db-rewards.js';

export const assingRandomBorder = async ({ username }) => {
  try {
    await addRandomBorder({ login: username });
    console.log(`🤖 Se le ha asignado un borde al usuario ${username}.`);
  } catch (err) {
    if (err?.message === 'CODE:404')
      return console.log(
        `❌ ${username}: No se ha encontrado el usuario. [CODE:404]`,
      );

    if (err?.message === 'CODE:9901')
      return console.log(
        `❌ ${username}: Algo salió mal al recuperar el id del usuario. [CODE:9901]`,
      );
    if (err?.message === 'CODE:9902') {
      return console.log(
        `❌ ${username}: Algo salió mal al asignar el borde al usuario.[CODE:9902]`,
      );
    }
    console.error(`❌ ${username}: ${err?.message} [CODE:XXXX]`);
  }
};
