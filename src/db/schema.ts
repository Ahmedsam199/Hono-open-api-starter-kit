import { integer, pgTable, varchar, timestamp,boolean } from "drizzle-orm/pg-core";

export const todoTable = pgTable("todos", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    text: varchar({ length: 255 }).notNull(),
    created_at: timestamp().defaultNow(),
    is_complete: boolean().default(false)
});
