import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { z } from "@hono/zod-openapi";

//TODO:add to user a plan tier and tenantID
export const usersTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  createdAt: timestamp("created_at", {
    mode: "date",
    precision: 3,
    withTimezone: true,
  })
    .defaultNow()
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: timestamp({ mode: "date" })
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
});

export const selectUsersSchema = createSelectSchema(usersTable);

export const insertUsersSchema = createInsertSchema(usersTable)
  .required({ name: true, email: true, password: true })
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  });

export const patchUsersSchema = insertUsersSchema.partial();
