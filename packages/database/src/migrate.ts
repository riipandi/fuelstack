import { join } from 'node:path'

import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'

import { migrationClient } from './client'

// This will automatically run needed migrations on the database
migrate(drizzle(migrationClient), {
  migrationsFolder: join(__dirname, 'migration'),
  migrationsTable: '_migrations',
})
  .then(() => {
    console.info('Migrations complete!')
    process.exit(0)
  })
  .catch((err) => {
    console.error('Migrations failed!', err)
    process.exit(1)
  })
