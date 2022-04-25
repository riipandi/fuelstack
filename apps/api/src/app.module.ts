import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import appConfig from './config/default';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({ load: [appConfig], isGlobal: true }), AuthModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
