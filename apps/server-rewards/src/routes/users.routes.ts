import { UsersController } from '../controllers/users.controller';
import { BaseRoutes } from './base.routes';

export class UsersRoutes extends BaseRoutes {
  constructor(
    private usersController: UsersController = new UsersController(),
  ) {
    super();
    this.initRoutes();
  }

  initRoutes(): void {
    this.router.get('/api/users/:id', this.usersController.getById);
    this.router.get('/api/users', this.usersController.getManyByUsername);
  }
}
