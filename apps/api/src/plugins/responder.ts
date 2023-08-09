import fp from 'fastify-plugin'
import { jsonResponse } from '@acme/utils'

/**
 * Using declaration merging, add plugin props to the appropriate
 * fastify interfaces. If prop type is defined here, the value will
 * be typechecked when you call decorate {Instance,Request,Reply}.
 */
declare module 'fastify' {
  export interface FastifyInstance {
    jsonResponse: typeof jsonResponse
  }
}

/**
 * This plugins adds Drizzle ORM integration using decorator
 */
export default fp(async (fastify) => {
  fastify.decorate<typeof jsonResponse>('jsonResponse', jsonResponse)
})
