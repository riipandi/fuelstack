import { Controller, Get, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

import { AuthService } from '../auth/auth.service';
import { MailService } from '../mail/mail.service';
import { UserService } from '../user/user.service';
import { currentDateTimeInUTC, isDateExpired } from '../utils/datetime';
import { httpBadRequest } from '../utils/exception';

@Controller('auth')
@ApiTags('authentication')
export class RegisterController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private readonly mailService: MailService,
  ) {}

  @Post('register')
  @ApiQuery({ name: 'name', type: 'string' })
  @ApiQuery({ name: 'nickname', type: 'string' })
  @ApiQuery({ name: 'email', type: 'string' })
  @ApiQuery({ name: 'password', type: 'string' })
  async register(@Req() req, @Res() res) {
    const data = req.body;
    const emailExists = await this.authService.isEmailExists(data.email);
    const nicknameExists = await this.authService.isNicknameExists(data.nickname);

    if (emailExists || nicknameExists) {
      httpBadRequest('User already registered');
    }

    const user = await this.userService.createUser(data);
    if (!user) {
      httpBadRequest('Failed to create user');
    }

    // Create verification token and send confirmation email
    const token = await this.authService.createVerificationRequest(user);
    await this.mailService.sendUserConfirmation(data, token.token);

    return res.status(HttpStatus.OK).send({
      message: 'User created successfully',
    });
  }

  @Get('confirm/:token')
  async getProfile(@Res() res, @Param('token') token) {
    const verificationToken = await this.authService.getVerificationRequest({
      token,
    });

    if (!verificationToken || isDateExpired(verificationToken.expires)) {
      httpBadRequest('Invalid or expired verification token');
    }

    const email: string = verificationToken.identifier;
    const user = await this.userService.user({ email });

    if (user.emailVerified) {
      httpBadRequest('User already verified');
    }

    const setVerified = await this.userService.updateUser({
      where: { id: user.id },
      data: { emailVerified: currentDateTimeInUTC() },
    });

    if (!setVerified) {
      httpBadRequest('Failed to verify user');
    }

    // Delete verification token
    // await this.authService.deleteVerificationRequest({ token });

    return res.status(HttpStatus.OK).send({
      message: 'User confirmed successfully',
      email,
      token,
    });
  }
}
