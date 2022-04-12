import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from '@prisma/client';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService, private readonly configService: ConfigService) {}

  private readonly baseUrl = this.configService.get<string>('baseUrl');

  async sendUserConfirmation(user: User, token: string) {
    const url = `${this.baseUrl}/auth/confirm/${token}?email=${user.email}`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Confirm your FuelStack account',
      template: 'confirmation', // `.hbs` extension is appended automatically
      context: { name: user.firstName, url },
    });
  }
}
