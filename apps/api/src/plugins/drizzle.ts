import fp from 'fastify-plugin'
import { db, dbClient, type PostgresJsDatabase } from '@acme/database'

/**
 * Using declaration merging, add plugin props to the appropriate
 * fastify interfaces. If prop type is defined here, the value will
 * be typechecked when you call decorate {Instance,Request,Reply}.
 */
declare module 'fastify' {
  export interface FastifyInstance {
    db: PostgresJsDatabase
  }
}

/**
 * This plugins adds Drizzle ORM integration using decorator
 */
export default fp(async (fastify) => {
  fastify.decorate<PostgresJsDatabase>('db', db)
  fastify.addHook('onClose', async (_fastify) => {
    dbClient.CLOSE
  })
})
