// E2E test for auth flow
import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app/app.module';

describe('Auth', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/auth/send-otp (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/send-otp')
      .send({ phone: '0000000000' })
      .expect(201);
  });
});
