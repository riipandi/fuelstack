import { sql } from 'drizzle-orm'
import { timestamp } from 'drizzle-orm/pg-core'

// Generate UUIDv1 for primary key or UUID columns
export const defaultId = sql`uuid_generate_v1mc()`

// Generate default value for JSONB column
export const defaultJsonbValue = sql`'{}'::jsonb`

// This is common columns, `deleted_at` are optional
export const timeStamps = (softDelete = false) => {
  const commonTimestamps = {
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  }
  const deleteTimestamp = { deletedAt: timestamp('deleted_at', { withTimezone: true }) }
  return softDelete ? { ...commonTimestamps, ...deleteTimestamp } : commonTimestamps
}
