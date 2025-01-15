import {db} from '@/db.ts';
import {insertUsersSchema} from '@/db/schema.ts';
import {usersTable} from '@/db/schema.ts';
import {validator} from 'hono/validator';
// import {zValidator} from '@hono/zod-validator';
import createApp from '@/lib/create-app.ts';

export const user = createApp();

user.post(
	'/user',
	validator('json', (value, c) => {
		const parsed = insertUsersSchema.safeParse(value);
		if (!parsed.success) {
			return c.text('Invalid!', 401);
		}
		return parsed.data;
	}),
	async (c) => {
		// const {logger} = c.var;
		const {name, email, password} = c.req.valid('json');

		const [inserted] = await db
			.insert(usersTable)
			.values({name, email, password})
			.returning();
		return c.json(inserted, 201);
	}
);

export const usera = user.get('/user', async (c) => {
	const usersAll = await db.query.usersTable.findMany();
	return c.json(usersAll);
});
