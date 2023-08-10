import { join } from 'node:path'

import { neon } from '@neondatabase/serverless'
import { MigrationConfig } from 'drizzle-orm/migrator'
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http'
import { migrate as migrateNeon } from 'drizzle-orm/neon-http/migrator'
import { drizzle as drizzlePg } from 'drizzle-orm/postgres-js'
import { migrate as migratePg } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

import { env } from '../envars'

const migrationConfig: MigrationConfig = {
  migrationsFolder: join(__dirname, '..', 'migration'),
  migrationsTable: '_migrations',
}

/**
 * Postgres client for migrations. For the built in migrate function with DDL
 * migrations strongly encourage you to use max: 1 connection configuration.
 */
const migrateDatabase = () => {
  console.info('Database Connection:', env.DATABASE_URL)
  return env.DATABASE_DRIVER === 'neon'
    ? migrateNeon(drizzleNeon(neon(env.DATABASE_URL)), migrationConfig)
    : migratePg(drizzlePg(postgres(env.DATABASE_URL, { max: 1 })), migrationConfig)
}

// this will automatically run needed migrations on the database
migrateDatabase()
  .then(() => {
    console.info('\n✅ Databaes migrations complete!\n')
    process.exit(0)
  })
  .catch((err) => {
    console.error('\n🔥 Database migrations failed!', err)
    process.exit(1)
  })
