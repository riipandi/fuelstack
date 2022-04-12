import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import appConfig from '@/config/default';

import { AuthModule } from '@/modules/auth.module';
import { UserModule } from '@/modules/user.module';
import { AppController } from '@/handlers/app.controller';

@Module({
  imports: [ConfigModule.forRoot({ load: [appConfig], isGlobal: true }), AuthModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
