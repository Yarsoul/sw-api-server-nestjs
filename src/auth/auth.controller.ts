import { Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import RequestWithUser from './requestWithUser.interface.';

@Controller('auth')
export class AuthController {
  constructor(private readonly authenticationService: AuthService) {}

  /*@Post('register')
  async register(@Body() registrationData: RegisterDto) {
    return this.authenticationService.register(registrationData);
  }*/

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('auth')
  async logIn(@Req() req) {
    return this.authenticationService.login(req.user);
  }
}
