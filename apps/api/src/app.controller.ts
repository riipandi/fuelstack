import { Controller, Get, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiExcludeController } from '@nestjs/swagger';

@Controller()
@ApiExcludeController()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  index(@Res() res) {
    const swaggerPath = this.configService.get<string>('swaggerPath');
    res.status(302).redirect(swaggerPath);
  }

  @Get('ping')
  ping(@Res() res) {
    res.status(200).send('pong');
  }
}
