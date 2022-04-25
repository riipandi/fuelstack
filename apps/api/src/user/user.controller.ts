import { Controller, Get, HttpStatus, Req, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';

import { UserService } from './user.service';
import { JwtAuthGuard } from '../libraries/guards';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getAllUsers(@Res() res): Promise<UserModel> {
    const resp: any = await this.userService.users({});
    const users = this.userService.exclude(resp, ['password']);
    return res.status(HttpStatus.OK).send(users);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('profile')
  async getProfile(@Req() req): Promise<UserModel> {
    const { userId } = req.user;
    const user = await this.userService.user({ id: Number(userId) });
    return user;
  }
}
