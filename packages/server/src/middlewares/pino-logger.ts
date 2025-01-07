import {pinoLogger as logger} from 'jsr:@maou-shonen/hono-pino';
import pretty from 'npm:pino-pretty';
import pino from 'npm:pino@^9.4.0';
import env from '../env.ts';

export function pinoLogger() {
	return logger({
		// @ts-expect-error pino is a node library / types not compatible
		pino: pino(
			{level: env.LOG_LEVEL || 'info'},
			env.DENO_ENV === 'production' ? undefined : pretty()
		),
	});
}
