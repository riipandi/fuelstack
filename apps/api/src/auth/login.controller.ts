import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../libraries/guards';

@Controller('auth')
@ApiTags('authentication')
export class LoginController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiQuery({ name: 'identifier', type: 'string' })
  @ApiQuery({ name: 'password', type: 'string' })
  async login(@Req() req) {
    return this.authService.login(req.user);
  }
}
