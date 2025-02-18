import { BorderRepository } from './border.repository.js';

export class BorderService {
  static async getIdRandom({ id }) {
    try {
      const { id: userId } = await BorderRepository.getRandomBorder({ id });
      return userId;
    } catch (err) {
      console.log(err);
      throw new Error(
        '[CODE:9900] Algo salió mal al generar el borde aletorio.',
      );
    }
  }

  static async getIdsRandoms({ limit, id }) {
    try {
      const ids = await BorderRepository.getRandomBorders({ limit, id });
      return ids;
    } catch {
      throw new Error(
        '[CODE:9900] Algo salió mal al recuperar los id de los bordes aletorios.',
      );
    }
  }

  static async verifyIfAlreadyAssigned({ userId, borderId }) {
    try {
      const isAssigned = await BorderRepository.verifyIfAlreadyAssigned({
        userId,
        borderId,
      });
      return isAssigned;
    } catch {
      throw new Error(
        '[CODE:9900] Algo salió mal al verificar si el borde ya está asignado.',
      );
    }
  }
}
