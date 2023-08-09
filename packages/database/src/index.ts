import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

console.info('Database Connection:', process.env.DATABASE_URL)

// Postgres client for migrations. For the built in migrate function with DDL
// migrations strongly encourage you to use max: 1 connection configuration.
export const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 })

// Postgres client for queries.
export const dbClient = postgres(process.env.DATABASE_URL!)

export const db: PostgresJsDatabase = drizzle(dbClient, {
  logger: process.env.NODE_ENV !== 'production',
})
