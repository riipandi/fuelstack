import { Module } from '@nestjs/common';

import { PrismaService } from '@/services/prisma.service';
import { UserService } from '@/services/user.service';
import { UserController } from '@/handlers/user/user.controller';

@Module({
  providers: [PrismaService, UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
