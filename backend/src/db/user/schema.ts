import {varchar, pgTable, serial, text} from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	email: varchar('email', {length: 255}).unique().notNull(),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
