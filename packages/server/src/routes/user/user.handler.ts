import {db} from '@/db.ts';
import {InsertUser} from '@/routes/user/user.type.ts';
import {AppRouteHandler} from '@/lib/types.ts';
import {eq, max} from 'drizzle-orm';
import * as HttpStatusCodes from 'stoker/http-status-codes';
import * as HttpStatusPhrases from 'stoker/http-status-phrases';

import type {
	CreateRoute,
	// GetOneRoute,
	ListRoute,
	// PatchRoute,
	// RemoveRoute,
} from '@/routes/user/user.route.ts';
import {usersTable} from '@/db/user.schema.ts';
import {PgInsertSelectQueryBuilder} from 'drizzle-orm/pg-core';

export const list: AppRouteHandler<ListRoute> = async (c) => {
	const usersAll = await db.query.usersTable.findMany();
	return c.json(usersAll);
};

export const getMaxUserId = async () => {
	const result = await db
		.select({max_id: max(usersTable.id)})
		.from(usersTable)
		.execute();

	return result[0].max_id || 0;
};

export const create: AppRouteHandler<CreateRoute> = async (c) => {
	const nextId = (await getMaxUserId()) + 1;
	const user = c.req.valid('json');
	const [inserted] = await db
		.insert(usersTable)
		.values({id: nextId, ...user})
		.returning();

	return c.json(inserted, HttpStatusCodes.OK);
};

// export const selectAll = await db.select().from(usersTable);

// export const selectOne = async (id: number) =>
// 	await db.select().from(usersTable).where(eq(usersTable.id, id));

// export const newUser = async (userObj: InsertUser): Promise<InsertUser> => {
// 	const user = await db.insert(usersTable).
