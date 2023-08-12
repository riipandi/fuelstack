import { join } from 'node:path'

import Fastify, { FastifyInstance } from 'fastify'
import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload'
import fastifyRequestLogger from '@mgcrea/fastify-request-logger'

import { env } from './env'

// Place your custom options for app below here.
export type AppOptions = {
  autoMigrate?: boolean
} & Partial<AutoloadPluginOptions>

// Pass --options via CLI arguments in command to enable these options.
const _options: AppOptions = {
  autoMigrate: false,
}

const server: FastifyInstance = Fastify({
  logger: {
    level: 'debug',
    transport: {
      target: '@mgcrea/pino-pretty-compact',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
})

// Register fastify plugins
server.register(fastifyRequestLogger)

server.register(AutoLoad, {
  dir: join(__dirname, 'plugins'),
})

server.register(AutoLoad, {
  dir: join(__dirname, 'routes'),
  dirNameRoutePrefix: true, // lack of prefix will mean no prefix, instead of directory name
})

export const start = async () => {
  try {
    await server.listen({ port: env.PORT, host: env.HOST })
    const address = server.server.address()
    const _port = typeof address === 'string' ? address : address?.port
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
