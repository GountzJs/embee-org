import { Hono } from 'hono';
import { app } from '../app';

export class BaseRoutes {
  readonly router: Hono<{ Bindings: CloudflareBindings }>;

  constructor() {
    this.router = app;
  }

  initRoutes(): void {}
}
