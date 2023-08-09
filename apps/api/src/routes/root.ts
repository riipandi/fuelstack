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
  fastify.get('/', opts, async function (_request: FastifyRequest, reply: FastifyReply) {
    reply.send(fastify.jsonResponse('All is well', undefined, 200))
  })
}
