import { DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('FuelStack')
  .setDescription('Full stack monorepo application with Turborepo, Next.js, Next.js, Prisma, and Typescript')
  .setVersion('1.0.0')
  .addBearerAuth()
  .build();

export default config;
