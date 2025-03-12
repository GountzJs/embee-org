import { UsersCardsController } from '../controllers/users-cards.controller';
import { BaseRoutes } from './base.routes';

export class UsersCardsRoutes extends BaseRoutes {
  constructor(
    private usersCardsController: UsersCardsController = new UsersCardsController(),
  ) {
    super();
    this.initRoutes();
  }

  initRoutes(): void {
    this.router.get(
      '/api/cards/latest/:id',
      this.usersCardsController.getLatestCards,
    );
  }
}
