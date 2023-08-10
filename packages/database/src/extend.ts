import { sql } from 'drizzle-orm'
import { timestamp } from 'drizzle-orm/pg-core'
import UUID from 'pure-uuid'
import { TypeID } from 'typeid-js'

export const defaultId = sql`uuid_generate_v1mc()`

export const insertId = (prefix: string) => {
  const id = new UUID(1).toString()
  const tid = TypeID.fromUUID(prefix, id).toString()
  return { id, tid }
}

export const timeStamps = (softDelete = false) => {
  const commonTimestamps = {
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  }
  const deleteTimestamp = { deletedAt: timestamp('deleted_at', { withTimezone: true }) }
  return softDelete ? { ...commonTimestamps, ...deleteTimestamp } : commonTimestamps
}
