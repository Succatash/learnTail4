import {varchar, pgTable, serial, timestamp} from 'drizzle-orm/pg-core';
import {createInsertSchema, createSelectSchema} from 'drizzle-zod';

export const usersTable = pgTable('users', {
	id: serial('id').primaryKey().notNull(),
	name: varchar('name').notNull(),
	email: varchar('email', {length: 255}).unique().notNull(),
	createdAt: timestamp('created_at', {
		mode: 'date',
		precision: 3,
		withTimezone: true,
	})
		.defaultNow()
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: timestamp({mode: 'date'})
		.$defaultFn(() => new Date())
		.$onUpdate(() => new Date()),
});

export const selectUsersSchema = createSelectSchema(usersTable);

export const insertUsersSchema = createInsertSchema(usersTable, {
	id: (schema) => schema.positive(),
	name: (schema) =>
		schema
			.min(1, {message: 'Must be 1 or more characters long'})
			.max(100, {message: "Can't be more characters long"}),
}).omit({id: true, createdAt: true, updatedAt: true});
