import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { JwtStrategy, LocalStrategy } from '@/libraries/guards';

import { MailModule } from '@/modules/mail.module';
import { UserModule } from '@/modules/user.module';
import { AuthService } from '@/services/auth.service';
import { PrismaService } from '@/services/prisma.service';
import { LoginController } from '@/handlers/auth/login.controller';
import { RegisterController } from '@/handlers/auth/register.controller';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('jwt.secret', { infer: true }),
      }),
      inject: [ConfigService],
    }),
    MailModule,
  ],
  providers: [AuthService, PrismaService, LocalStrategy, JwtStrategy],
  controllers: [LoginController, RegisterController],
  exports: [AuthService],
})
export class AuthModule {}
