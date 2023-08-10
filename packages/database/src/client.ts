import { neon, neonConfig } from '@neondatabase/serverless'
import { DrizzleConfig } from 'drizzle-orm'
import { drizzle as drizzleNeon, type NeonHttpDatabase } from 'drizzle-orm/neon-http'
import { drizzle as drizzlePg, type PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { env } from './envars'

// Configure Neon client
neonConfig.fetchConnectionCache = true

export type dbClientType = NeonHttpDatabase | PostgresJsDatabase

// Postgres client for queries.
export const dbClient =
  env.DATABASE_DRIVER === 'neon' ? neon(env.DATABASE_URL) : postgres(env.DATABASE_URL)

const dbConfig: DrizzleConfig = {
  logger: env.NODE_ENV === 'development',
}

export const db: NeonHttpDatabase | PostgresJsDatabase =
  env.DATABASE_DRIVER === 'neon'
    ? drizzleNeon(neon(env.DATABASE_URL), dbConfig)
    : drizzlePg(postgres(env.DATABASE_URL), dbConfig)
