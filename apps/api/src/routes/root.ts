import { FastifyInstance, FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify'

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          status_code: {
            type: 'number',
          },
          message: {
            type: 'string',
          },
        },
      },
    },
  },
}

export default async function (fastify: FastifyInstance) {
  // This is root endpoint
  fastify.get('/', opts, async function (_request: FastifyRequest, reply: FastifyReply) {
    reply.send(fastify.jsonResponse('All is well', undefined, 200))
  })

  // Helath check endpoint
  fastify.get('/health', {}, async function (_request: FastifyRequest, reply: FastifyReply) {
    reply.status(200).send('All is well')
  })
}
