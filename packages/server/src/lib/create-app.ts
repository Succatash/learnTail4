import {notFound, onError} from 'stoker/middlewares';
import {requestId} from 'hono/request-id';
import {pinoLogger} from '@/middlewares/pino-logger.ts';
import {cors} from 'hono/cors';
import serveEmojiFavicon from 'stoker/middlewares/serve-emoji-favicon';
import {Hono} from 'hono';
import {AppBindings} from '@/lib/types.ts';

export default function createApp() {
	const app = new Hono<AppBindings>({strict: false});

	app.use(requestId(), pinoLogger());

	app.use(
		cors({
			origin: '*', // Allow requests from a specific origin
			allowHeaders: ['X-Custom-Headers', 'Authorization'], // Allow specific headers
			allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], // Allow specific HTTP methods
			credentials: true, // Allow sending cookies or authentication credentials
		})
	);

	app.use(serveEmojiFavicon('📝'));
	app.notFound(notFound);
	app.onError(onError);

	return app;
}
