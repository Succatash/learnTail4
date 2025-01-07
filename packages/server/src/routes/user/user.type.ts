import {usersTable} from '@/db/user.schema.ts';

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
