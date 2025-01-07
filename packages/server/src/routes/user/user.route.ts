// import {newUser, selectAll, selectOne} from '@/routes/user/user.handler.ts';
import {createRoute, z} from '@hono/zod-openapi';
import * as HttpStatusCodes from 'stoker/http-status-codes';
import jsonContent from 'stoker/openapi/helpers/json-content';
import {selectUsersSchema, insertUsersSchema} from '@/db/user.schema.ts';
import jsonContentRequired from 'stoker/openapi/helpers/json-content-required';
import createErrorSchema from 'stoker/openapi/schemas/create-error-schema';

const tags = ['Users'];

// export const user = new Hono().basePath('/user');

// user.get('/', (c) => {
// 	c.text('hello');
// 	return c.body(
// 		'This is the user API for more information go to www.hasbaraCMS docs users',
// 		200,
// 		{
// 			'X-Message': 'custom message on the header',
// 			'Content-Type': 'text/plain',
// 		}
// 	);
// });

export const create = createRoute({
	path: '/user',
	method: 'post',
	tags,
	request: {
		body: jsonContentRequired(insertUsersSchema, 'The task to create'),
	},
	responses: {
		[HttpStatusCodes.CREATED]: jsonContent(
			selectUsersSchema,
			'The created User'
		),
		[HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
			createErrorSchema(insertUsersSchema),
			'The validation error(s)'
		),
	},
});

export const userListAll = createRoute({
	path: '/user',
	method: 'get',
	tags,
	responses: {
		[HttpStatusCodes.OK]: jsonContent(
			z.array(selectUsersSchema),
			'get list of all users'
		),
	},
});

// user.get('selectone/:id', async (c) => {
// 	const id = parseInt(c.req.param('id'));

// 	return c.json(await selectOne(id));
// });

export type ListRoute = typeof userListAll;
export type CreateRoute = typeof create;
