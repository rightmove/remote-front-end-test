import { setupServer } from 'msw/node';
import { initialHandlers } from './handlers';

export const server = setupServer(...initialHandlers);
