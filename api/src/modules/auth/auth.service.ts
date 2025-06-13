// Service mocking OTP behaviour
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwt: JwtService) {}

  async sendOtp(phone: string): Promise<string> {
    return '123456';
  }

  async validateOtp(phone: string, code: string): Promise<string | null> {
    if (code === '123456') {
      return this.jwt.sign({ phone });
    }
    return null;
  }
}
