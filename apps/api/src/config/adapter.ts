import { FastifyAdapter } from '@nestjs/platform-fastify';

const adapter = new FastifyAdapter({
  logger: {
    level: 'error',
  },
});

export default adapter;
