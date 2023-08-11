import 'dotenv/config'

import type { Config } from 'drizzle-kit'

export default {
  out: './src/migration',
  schema: './src/schema/*.ts',
  breakpoints: false,
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config
