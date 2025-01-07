import {OpenAPIHono} from '@hono/zod-openapi';
import {notFound, onError} from 'stoker/middlewares';
import {defaultHook} from 'stoker/openapi';
import {requestId} from 'hono/request-id';
import {pinoLogger} from '@/middlewares/pino-logger.ts';
import {cors} from 'hono/cors';
import serveEmojiFavicon from 'stoker/middlewares/serve-emoji-favicon';

import type {AppBindings, AppOpenAPI} from './types.ts';

export function createRouter() {
	return new OpenAPIHono<AppBindings>({
		strict: false,
		defaultHook,
	});
}

export default function createApp() {
	const app = new OpenAPIHono({strict: false});

	app.use(requestId(), pinoLogger());

	app.use(
		cors({
			origin: '*', // Allow requests from a specific origin
			allowHeaders: ['X-Custom-Headers', 'Authorization'], // Allow specific headers
			allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow specific HTTP methods
			credentials: true, // Allow sending cookies or authentication credentials
		})
	);
	app.use(serveEmojiFavicon('📝'));
	app.notFound(notFound);
	app.onError(onError);

	return app;
}

// export function createTestApp<R extends AppOpenAPI>(router: R) {
// 	return createApp().route('/', router);
// }
