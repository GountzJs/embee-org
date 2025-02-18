import { BorderService } from '../border/border.service.js';
import { borderSpecial, twitchChannel } from '../core/settings.js';
import client from '../twitch/tmi-client.js';
import { sanitizeMessage } from '../twitch/utils.js';
import { UserBordersService } from '../user-border/user-border.service.js';
import { UserController } from '../user/user.controller.js';

export class UserBordersActions {
  static async assingRandomByUsername({ username }) {
    try {
      const userId = await UserController.createIfNotExists({
        login: username,
      });
      const borderId = await BorderService.getIdRandom({ id: userId });
      await UserBordersService.create({ userId, borderId });
      console.log(
        `🤖 Se le ha asignado un borde aletorio al usuario [@${username}].`,
      );
      client.say(
        twitchChannel,
        sanitizeMessage(`🤖 @${username} Se ha asignado su borde aletorio.`),
      );
    } catch (err) {
      console.log(err?.message);
      client.say(
        twitchChannel,
        sanitizeMessage(
          `❌ @${username}: No pudimos asignar el borde. ¿Dónde estarán los MOD cuando se los necesita?`,
        ),
      );
    }
  }

  static async assignManyRandomByUsername({ username, quantity }) {
    try {
      const userId = await UserController.createIfNotExists({
        login: username,
      });
      const bordersId = await BorderService.getIdsRandoms({
        limit: quantity,
        id: userId,
      });
      await UserBordersService.createMany({ userId, bordersId });
      console.log(
        `🤖 Se le ha asignado ${quantity} al usuario [@${username}].`,
      );
      client.say(
        twitchChannel,
        sanitizeMessage(
          `🤖 @${username} Se te han asignado ${quantity} bordes aleatorios.`,
        ),
      );
    } catch (err) {
      console.log(err?.message);
      client.say(
        twitchChannel,
        sanitizeMessage(
          `❌ [@${username}]: No pudimos asignar el borde. ¿Dónde estarán los MOD cuando se los necesita?`,
        ),
      );
    }
  }

  static async assingSpecialBorder({ username }) {
    try {
      const userId = await UserController.createIfNotExists({
        login: username,
      });
      const isAssigned = await BorderService.verifyIfAlreadyAssigned({
        userId,
        borderId: borderSpecial,
      });
      if (isAssigned) {
        console.log(
          `🤖 El usuario [@${username}] ya tiene el borde especial asignado.`,
        );
        client.say(
          twitchChannel,
          sanitizeMessage(
            `❌ @${username} Ya tiene el borde especial asignado. No se puede canjear dos veces`,
          ),
        );
        return;
      }
      await UserBordersService.create({ userId, borderId: borderSpecial });
      console.log(`🤖 Se le ha asignado un borde al usuario [@${username}].`);
      client.say(
        twitchChannel,
        sanitizeMessage(
          `🤖 @${username} Se ha asignado el borde especial del día.`,
        ),
      );
    } catch (err) {
      console.log(err?.message);
      client.say(
        twitchChannel,
        sanitizeMessage(
          `❌ [@${username}]: No pudimos asignar el borde. ¿Dónde estarán los MOD cuando se los necesita?`,
        ),
      );
    }
  }
}
