import { HttpException, HttpStatus } from '@nestjs/common';

export function httpBadRequest(message: string) {
  throw new HttpException(message, HttpStatus.BAD_REQUEST);
}
