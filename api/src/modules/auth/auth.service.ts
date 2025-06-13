import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async sendOtp(phone: string): Promise<string> {
    return '123456';
  }

  async validateOtp(phone: string, code: string): Promise<boolean> {
    return code === '123456';
  }
}
