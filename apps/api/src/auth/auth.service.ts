import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User as UserModel } from '@prisma/client';
import { Prisma, VerificationRequest } from '@prisma/client';

import { PrismaService } from '../libraries/prisma.service';
import { UserService } from '../user/user.service';
import { expiredDateTimeInUTC } from '../utils/datetime';
import { verify } from '../utils/hash';
import { nanoid } from '../utils/string';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async isEmailExists(email: string): Promise<boolean> {
    const user = await this.userService.user({ email });
    return !!user;
  }

  async isNicknameExists(nickname: string): Promise<boolean> {
    const user = await this.userService.user({ nickname });
    return !!user;
  }

  async validateUser(identifier: string, pass: string): Promise<UserModel> {
    const user = await this.userService.user({ email: String(identifier) });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    const isPasswordMatched = await verify(pass, user.password);

    if (!isPasswordMatched) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async login(user: any) {
    const accessToken = this.jwtService.sign({
      identifier: user.nickname,
      sub: user.id,
    });
    return {
      access_token: accessToken,
      expires_in: 3600,
      session_token: nanoid({ useUpperCase: true, length: 32 }),
      refresh_token: null,
    };
  }

  async createVerificationRequest(user: UserModel) {
    return this.prisma.verificationRequest.create({
      data: {
        identifier: user.email,
        token: nanoid({ useUpperCase: true, length: 20 }),
        expires: expiredDateTimeInUTC(7),
      },
    });
  }

  async getVerificationRequest(
    where: Prisma.VerificationRequestWhereUniqueInput,
  ): Promise<VerificationRequest | null> {
    return this.prisma.verificationRequest.findUnique({ where });
  }

  async deleteVerificationRequest(
    where: Prisma.VerificationRequestWhereUniqueInput,
  ): Promise<VerificationRequest> {
    return this.prisma.verificationRequest.delete({ where });
  }
}
