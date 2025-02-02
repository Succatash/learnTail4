// import {newUser, selectAll, selectOne} from '@/routes/user/user.handler.ts';
// import {createRoute, z} from '@hono/zod-openapi';
// import * as HttpStatusCodes from 'stoker/http-status-codes';
// import jsonContent from 'stoker/openapi/helpers/json-content';
// import {
// 	insertUsersSchema,
// 	patchUsersSchema,
// 	selectUsersSchema,
// } from '@/db/schema.ts';
// import jsonContentRequired from 'stoker/openapi/helpers/json-content-required';
// import createErrorSchema from 'stoker/openapi/schemas/create-error-schema';
// import IdUUIDParamsSchema from 'stoker/openapi/schemas/id-uuid-params';
// import {notFoundSchema} from '@/lib/constants.ts';

// const tags = ['Users'];

// export const create = createRoute({
// 	path: '/user',
// 	method: 'post',
// 	tags,
// 	request: {
// 		body: {
// 			required: true,
// 			description: 'Created a user',
// 			content: {
// 				'application/json': {
// 					schema: insertUsersSchema,
// 				},
// 			},
// 		},
// 	},
// 	responses: {
// 		[HttpStatusCodes.CREATED]: {
// 			description: 'User was created',
// 			content: {
// 				'application/json': {
// 					schema: insertUsersSchema,
// 					example: {
// 						name: 'lamar jackson',
// 						email: 'example@email.com',
// 						password: 'Ex@mple2PASS!@Sfn0',
// 					},
// 				},
// 			},
// 		},
// 		[HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
// 			createErrorSchema(insertUsersSchema),
// 			'The validation error(s)'
// 		),
// 	},
// });

// export const userListAll = createRoute({
// 	path: '/user',
// 	method: 'get',
// 	tags,
// 	responses: {
// 		[HttpStatusCodes.OK]: {
// 			content: {
// 				'application/json': {
// 					schema: z.array(selectUsersSchema),
// 					example: {
// 						name: 'lamar jackson',
// 						email: 'example@email.com',
// 						password: 'Ex@mple2PASS!@Sfn0',
// 					},
// 				},
// 			},
// 			description: 'get list of all users',
// 		},
// 	},
// });

// export const getOne = createRoute({
// 	path: '/user/{id}',
// 	method: 'get',
// 	request: {
// 		params: IdUUIDParamsSchema,
// 	},
// 	tags,
// 	responses: {
// 		//code 200
// 		[HttpStatusCodes.OK]: {
// 			content: {
// 				'application/json': {
// 					schema: z.array(selectUsersSchema),
// 					example: {
// 						name: 'lamar jackson',
// 						email: 'example@email.com',
// 						password: 'Ex@mple2PASS!@Sfn0',
// 					},
// 				},
// 			},
// 			description: 'get a single user based on ID',
// 		},
// 		[HttpStatusCodes.NOT_FOUND]: jsonContent(notFoundSchema, 'Task not found'),
// 		[HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
// 			createErrorSchema(IdUUIDParamsSchema),
// 			'Invalid id error'
// 		),
// 	},
// });

// export const remove = createRoute({
// 	path: '/user/{id}',
// 	method: 'delete',
// 	request: {
// 		params: IdUUIDParamsSchema,
// 	},
// 	tags,
// 	responses: {
// 		[HttpStatusCodes.NO_CONTENT]: {
// 			description: 'Task deleted',
// 		},
// 		[HttpStatusCodes.NOT_FOUND]: jsonContent(notFoundSchema, 'Task not found'),
// 		[HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
// 			createErrorSchema(IdUUIDParamsSchema),
// 			'Invalid id error'
// 		),
// 	},
// });

// export const patch = createRoute({
// 	path: '/user/{id}',
// 	method: 'patch',
// 	request: {
// 		params: IdUUIDParamsSchema,
// 		body: jsonContentRequired(patchUsersSchema, 'The task updates'),
// 	},
// 	tags,
// 	responses: {
// 		[HttpStatusCodes.OK]: jsonContent(selectUsersSchema, 'The updated task'),
// 		[HttpStatusCodes.NOT_FOUND]: jsonContent(notFoundSchema, 'Task not found'),
// 		[HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
// 			createErrorSchema(patchUsersSchema).or(
// 				createErrorSchema(IdUUIDParamsSchema)
// 			),
// 			'The validation error(s)'
// 		),
// 	},
// });

// export type ListRoute = typeof userListAll;
// export type CreateRoute = typeof create;
// export type GetOneRoute = typeof getOne;
// export type RemoveRoute = typeof remove;
// export type PatchRoute = typeof patch;
