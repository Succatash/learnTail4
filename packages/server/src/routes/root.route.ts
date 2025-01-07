import {createRoute} from '@hono/zod-openapi';
import * as HttpStatusCodes from 'stoker/http-status-codes';
import {jsonContent} from 'stoker/openapi/helpers';
import {createMessageObjectSchema} from 'stoker/openapi/schemas';
import {createRouter} from '../lib/create-app.ts';
import {Context} from 'hono';

export const rootRouter = createRouter().openapi(
	createRoute({
		tags: ['root'],
		method: 'get',
		path: '/',
		responses: {
			[HttpStatusCodes.OK]: jsonContent(
				createMessageObjectSchema(' Root API'),
				' API for Root'
			),
		},
	}),
	(c: Context) => {
		return c.html(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Hono App</title>
        <link rel="icon" href="/favicon.ico"> 
      </head>
	  <body>
	 <div>This is html rendered on the server side</div> 
	  </body>
	  </html>`);
	}
);

export default rootRouter;
