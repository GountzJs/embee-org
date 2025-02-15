import { BorderRepository } from './border.repository.js';

export class BorderService {
  static async getIdRandom() {
    try {
      const { id } = await BorderRepository.getRandomBorder();
      return id;
    } catch {
      throw new Error(
        '[CODE:9900] Algo salió mal al generar el borde aletorio.',
      );
    }
  }

  static async getIdsRandoms({ limit }) {
    try {
      const ids = await BorderRepository.getRandomBorders({ limit });
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
