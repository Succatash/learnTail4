import {Hono} from 'npm:hono';
import {db} from './db/db.ts';
import {usersTable} from './db/user/schema.ts';
import {eq} from 'drizzle-orm';

const app = new Hono();

app.get('/', (c) => c.text('Hello Deno!'));

app.get('/users', async (c) => {
	const selectOne = await db
		.select()
		.from(usersTable)
		.where(eq(usersTable.id, 1));
	return c.json(selectOne);
});

app.post('/users', async (c) => {
	const body = await c.req.json();
	const newUser = await db.insert(usersTable).values(body).returning();
	return c.json(newUser[0]);
});

export default app;
