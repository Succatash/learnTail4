import {drizzle} from 'npm:drizzle-orm/neon-http';
import {neon} from 'npm:@neondatabase/serverless';
import * as dbSchema from './user/schema.ts';
// import {seed} from 'drizzle-seed';

const sql = neon(Deno.env.get('DATABASE_URL')!);
export const db = drizzle({client: sql, schema: dbSchema});

// await seed(db, {users: dbSchema.usersTable});

const _result = await db.execute('select 1');

// Insert user.
export async function insertUser(userObj: dbSchema.InsertUser) {
	return await db.insert(dbSchema.usersTable).values(userObj);
}
