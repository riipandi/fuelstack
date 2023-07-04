import { FastifyPluginAsync, RouteShorthandOptions } from 'fastify'

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string',
          },
        },
      },
    },
  },
}

const root: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get('/', opts, async (_request, _reply) => {
    return { pong: 'it worked!' }
  })
}

export default root
