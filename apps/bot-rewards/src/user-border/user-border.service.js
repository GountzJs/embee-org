import { UserBorderRepository } from './user-border.repository.js';

export class UserBordersService {
  static async create({ userId, borderId }) {
    try {
      await UserBorderRepository.create({
        userId,
        borderId,
      });
    } catch (err) {
      throw new Error('[CODE:9900] Algo salió mal al crear el borde aletorio.');
    }
  }

  static async createMany({ userId, bordersId }) {
    try {
      await UserBorderRepository.createMany({
        userId,
        bordersId,
      });
    } catch (err) {
      throw new Error('[CODE:9900] Algo salió mal al crear el borde aletorio.');
    }
  }
}
