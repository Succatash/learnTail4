//basic logging middleware
import * as log from 'jsr:@std/log';
import {Context, Next} from 'npm:hono';

//create a deno logger as a side project the std/log is pretty powerful, just have to figure out how to return all the information pino returnsZZZZZZZZZ #

//Learn how to extend this to be a better logger
export const basicLogger = async (c: Context, next: Next) => {
	const start = performance.now();
	const response = await next();
	const end = performance.now();
	log.info(
		{
			method: c.req.method,
			url: c.req.url,
			//Figure out how to get the status code
			status: 200,
			duration: (end - start).toFixed(2), // Log duration in milliseconds with 2 decimal places
		},
		'Request completed'
	);

	return response;
};
