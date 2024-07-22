import { pgTable, uuid, text } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const todo = pgTable("todo", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	todo: text("todo").notNull(),
});