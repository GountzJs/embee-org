import { setupWorker } from 'msw/browser';
import { bordersHandlers } from './borders/handlers';
import { userHandlers } from './users/handlers';

export const worker = setupWorker(...userHandlers, ...bordersHandlers);
