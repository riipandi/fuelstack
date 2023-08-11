import fp from 'fastify-plugin'
import { db, dbClientType } from '@acme/database'

/**
 * Using declaration merging, add plugin props to the appropriate
 * fastify interfaces. If prop type is defined here, the value will
 * be typechecked when you call decorate {Instance,Request,Reply}.
 */
declare module 'fastify' {
  export interface FastifyInstance {
    db: dbClientType
  }
}

/**
 * This plugins adds Drizzle ORM integration using decorator
 */
export default fp(async (fastify) => {
  fastify.decorate<dbClientType>('db', db)
  fastify.addHook('onClose', async (_fastify) => {
    // TODO close connection after transaction finish
    // dbClient.CLOSE
  })
})
