import { migrateDatabase } from '@acme/database'

import { env } from '../env'

migrateDatabase(env.DATABASE_DRIVER, env.DATABASE_URL)
  .then(() => {
    console.info('\n✅ Database migrations complete!\n')
    process.exit(0)
  })
  .catch((err) => {
    console.error('\n🔥 Database migrations failed!', err)
    process.exit(1)
  })
