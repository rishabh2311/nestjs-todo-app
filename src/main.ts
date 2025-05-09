import 'reflect-metadata'; // Import reflect-metadata first
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Enable global validation pipe
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
