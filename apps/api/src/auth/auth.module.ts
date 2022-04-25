import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from '../auth/auth.service';
import { LoginController } from '../auth/login.controller';
import { RegisterController } from '../auth/register.controller';
import { JwtStrategy, LocalStrategy } from '../libraries/guards';
import { PrismaService } from '../libraries/prisma.service';
import { MailModule } from '../mail/mail.module';
import { UserModule } from '../user/user.module';

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
