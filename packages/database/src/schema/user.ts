import { InferModel } from 'drizzle-orm'
import { json, pgEnum, pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'

export const roleEnum = pgEnum('role', ['user', 'admin'])

/**
 * This table contains user data. Users should only be able to view and update their own data.
 */
export const userTable = pgTable('users', {
  id: uuid('id').primaryKey(),
  firstName: varchar('first_name').notNull(),
  lastName: varchar('last_name').notNull(),
  avatarUrl: varchar('avatar_url'),
  billingProvider: varchar('billing_provider').$type<'lemonsqueezy' | 'stripe' | 'xendit'>(),
  billingAddress: json('billing_address'),
  paymentMethod: json('payment_method'),
  phone: varchar('phone', { length: 20 }),
  role: roleEnum('role').default('user').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})

export type User = InferModel<typeof userTable>

export type NewUser = InferModel<typeof userTable, 'insert'>
