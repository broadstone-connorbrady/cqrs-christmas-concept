import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create<
    NestExpressApplication
    >(AppModule, {
    logger: console,
  });

  console.log("TEST");

  await app.startAllMicroservicesAsync();
}
