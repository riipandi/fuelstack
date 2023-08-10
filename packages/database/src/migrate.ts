import { join } from 'node:path'

// import { neon } from '@neondatabase/serverless'
// import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http'
import { drizzle as drizzlePg } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

const dbUrl = process.env.DATABASE_URL!

// TODO add option to choose between Neon or Postgres
// Postgres client for migrations. For the built in migrate function with DDL
// migrations strongly encourage you to use max: 1 connection configuration.
// export const migrateDbClient =
//   process.env.DATABASE_DRIVER === 'neon'
//     ? drizzleNeon(neon(dbUrl))
//     : drizzlePg(postgres(dbUrl, { max: 1 }))

export const migrateDbClient = drizzlePg(postgres(dbUrl, { max: 1 }))

// this will automatically run needed migrations on the database
migrate(migrateDbClient, {
  migrationsFolder: join(__dirname, 'migration'),
  migrationsTable: '_migrations',
})
  .then(() => {
    console.info('\n✅ Migrations complete!\n')
    process.exit(0)
  })
  .catch((err) => {
    console.error('\n🔥 Migrations failed!', err)
    process.exit(1)
  })
