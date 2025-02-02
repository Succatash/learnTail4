import {drizzle} from 'npm:drizzle-orm/neon-http';
import {neon} from 'npm:@neondatabase/serverless';
import * as DBSchema from './db/schema.ts';
// import {reset} from 'drizzle-seed';

const sql = neon(Deno.env.get('DATABASE_URL')!);
export const db = drizzle({
	client: sql,
	schema: DBSchema,
});
// //Seeding the database
// await reset(db, DBSchema);
