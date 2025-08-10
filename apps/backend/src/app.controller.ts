import { Controller, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Post('ping')
  getHello(): string {
    return 'pong';
  }
}
