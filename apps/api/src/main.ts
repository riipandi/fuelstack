import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import fastifyAdapter from './config/adapter';
import swaggerConfig from './config/swagger';
import versioningConfig from './config/version';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter);

  // Load application configuration
  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('port', { infer: true });

  // Configure middlewares, etc.
  app.enableVersioning(versioningConfig);

  // OpenAPI Swagger setup
  const swaggerPath = configService.get<string>('swaggerPath');
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(swaggerPath, app, document);

  await app.listen(port, '0.0.0.0');
  Logger.log(`🚀 Application is running on: ${await app.getUrl()}`);
}

bootstrap();
