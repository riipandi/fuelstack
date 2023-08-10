import { neon, neonConfig } from '@neondatabase/serverless'
import { DrizzleConfig } from 'drizzle-orm'
import { drizzle as drizzleNeon, type NeonHttpDatabase } from 'drizzle-orm/neon-http'
import { drizzle as drizzlePg, type PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

console.info('Database Connection:', process.env.DATABASE_URL)

// Configure Neon client
neonConfig.fetchConnectionCache = true

export type dbClientType = NeonHttpDatabase | PostgresJsDatabase

// Postgres client for queries.
export const dbClient =
  process.env.DATABASE_DRIVER === 'neon'
    ? neon(process.env.DATABASE_URL!)
    : postgres(process.env.DATABASE_URL!)

const dbConfig: DrizzleConfig = {
  logger: process.env.NODE_ENV === 'development',
}

export const db: NeonHttpDatabase | PostgresJsDatabase =
  process.env.DATABASE_DRIVER === 'neon'
    ? drizzleNeon(neon(process.env.DATABASE_URL!), dbConfig)
    : drizzlePg(postgres(process.env.DATABASE_URL!), dbConfig)
