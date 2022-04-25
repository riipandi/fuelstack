import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as path from 'path';

import { MailService } from './mail.service';

@Global() // 👈 optional to make module global
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get<string>('mailer.host', { infer: true }),
          port: config.get<number>('mailer.port', { infer: true }),
          secure: config.get<boolean>('mailer.secure', { infer: true }),
          auth: {
            user: config.get<string>('mailer.username', { infer: true }),
            pass: config.get<string>('mailer.password', { infer: true }),
          },
        },
        defaults: {
          from: config.get<string>('mailer.from', { infer: true }),
        },
        template: {
          dir: path.join(process.env.PWD, 'src/mail/templates/'),
          adapter: new HandlebarsAdapter(),
          options: { strict: true },
        },
        options: {
          partials: {
            dir: path.join(process.env.PWD, 'src/mail/partials/'),
            options: { strict: true },
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
