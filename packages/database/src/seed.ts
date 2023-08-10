import { type NeonHttpDatabase } from 'drizzle-orm/neon-http'
import { type PostgresJsDatabase } from 'drizzle-orm/postgres-js'

import { db, dbClient } from './client'
import { userSeeder } from './seeders'

async function seed() {
  await userSeeder(db)
}

seed()
  .then(async () => {
    console.info('🍀 Database has been populated with seeders')
    // return (typeof dbClient === NeonHttpDatabase) ? dbClient.
    process.exit(0)
  })
  .catch(async (e) => {
    console.error('🔥 Failed running database seeder:', e.message)
    // dbClient.CLOSE
    process.exit(1)
  })
