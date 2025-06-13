// Controller for OTP endpoints
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('send-otp')
  sendOtp(@Body('phone') phone: string) {
    return this.authService.sendOtp(phone);
  }

  @Post('validate-otp')
  async validateOtp(@Body('phone') phone: string, @Body('code') code: string) {
    return this.authService.validateOtp(phone, code);
  }
}
