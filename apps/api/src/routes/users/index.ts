import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { type User, userTable } from '@acme/database'

export default async function (fastify: FastifyInstance) {
  fastify.get('/', {}, async function (_request: FastifyRequest, reply: FastifyReply) {
    const statusCode = 200
    const allUsers: User[] = await fastify.db.select().from(userTable).execute()
    const response = fastify.jsonResponse<User[]>(undefined, allUsers, statusCode)

    reply.code(statusCode).send(response)
  })
}
