import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const todo = pgTable('todo', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  todo: text('todo').notNull(),
});
export type InsertTodo = typeof todo.$inferInsert;
export type SelectTodo = typeof todo.$inferSelect;
