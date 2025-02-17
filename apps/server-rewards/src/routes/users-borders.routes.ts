import { UsersBordersController } from '../controllers/users-borders.controller';
import { BaseRoutes } from './base.routes';

export class UsersBordersRoutes extends BaseRoutes {
  constructor(
    private usersBordersController: UsersBordersController = new UsersBordersController(),
  ) {
    super();
    this.initRoutes();
  }

  initRoutes(): void {
    this.router.get('/api/ranking', this.usersBordersController.getRanking);
    this.router.get(
      '/api/borders/:id',
      this.usersBordersController.getBordersByUserId,
    );
  }
}
