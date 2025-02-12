import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { v4 as uuidv4 } from 'uuid';

export const borderSchema = sqliteTable('borders', {
  id: text('id')
    .primaryKey()
    .$default(() => uuidv4()),
  rank: text().notNull(),
  img: text().notNull(),
});
