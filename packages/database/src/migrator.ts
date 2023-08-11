import { join } from 'node:path'

import { neon } from '@neondatabase/serverless'
import { MigrationConfig } from 'drizzle-orm/migrator'
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http'
import { migrate as migrateNeon } from 'drizzle-orm/neon-http/migrator'
import { drizzle as drizzlePg } from 'drizzle-orm/postgres-js'
import { migrate as migratePg } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

const migrationConfig: MigrationConfig = {
  migrationsFolder: join(__dirname, 'migration'),
  migrationsTable: '_migrations',
}

/**
 * Postgres client for migrations. For the built in migrate function with DDL
 * migrations strongly encourage you to use max: 1 connection configuration.
 */
export const migrateDatabase = (driver: 'neon' | 'postgres', connectionString: string) => {
  return driver === 'neon'
    ? migrateNeon(drizzleNeon(neon(connectionString)), migrationConfig)
    : migratePg(drizzlePg(postgres(connectionString, { max: 1 })), migrationConfig)
}
