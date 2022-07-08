import { Controller, Get, Post, Put, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  /*@Get()
  getHello(): string {
    return this.appService.getHello();
  }*/

  @UseGuards(LocalAuthGuard)
  @Post('auth/')
  async login(@Req() req) {
    return 'Вы авторизованы';
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile/tweet')
  getProfile(@Req() req) {
    return req.user;
  }
}
