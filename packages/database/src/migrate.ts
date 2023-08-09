import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { drizzle } from 'drizzle-orm/postgres-js'
import { join } from 'path'
import { migrationClient } from '.'

// This will automatically run needed migrations on the database
migrate(drizzle(migrationClient), {
  migrationsFolder: join(__dirname, 'migration'),
  migrationsTable: '_migrations',
})
  .then(() => {
    console.log('Migrations complete!')
    process.exit(0)
  })
  .catch((err) => {
    console.error('Migrations failed!', err)
    process.exit(1)
  })
