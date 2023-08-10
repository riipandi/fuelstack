import { InferModel } from 'drizzle-orm'
import { jsonb, pgEnum, pgTable, uuid, varchar } from 'drizzle-orm/pg-core'

import { defaultId, timeStamps } from '../extend'

export const roleEnum = pgEnum('role', ['admin', 'user'])

export const userTable = pgTable('users', {
  id: uuid('id').default(defaultId).primaryKey(),
  tid: varchar('tid', { length: 100 }).notNull().unique(),
  email: varchar('email').notNull().unique(),
  firstName: varchar('first_name').notNull(),
  lastName: varchar('last_name').notNull(),
  avatarUrl: varchar('avatar_url'),
  billingProvider: varchar('billing_provider').$type<'lemonsqueezy' | 'stripe'>(),
  billingAddress: jsonb('billing_address'),
  paymentMethod: jsonb('payment_method'),
  phone: varchar('phone', { length: 20 }),
  role: roleEnum('role').default('user').notNull(),
  passwordHash: varchar('password_hash'),
  ...timeStamps(false),
})

export type User = InferModel<typeof userTable, 'select'>

export type NewUser = InferModel<typeof userTable, 'insert'>
