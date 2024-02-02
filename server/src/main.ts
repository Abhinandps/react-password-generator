import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length'], 
    credentials: true, 
  })
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();


