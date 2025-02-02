import type {PinoLogger} from '@maou-shonen/hono-pino';

export interface AppBindings {
	Variables: {
		logger: PinoLogger;
		pizza: 'pizza';
	};
}
