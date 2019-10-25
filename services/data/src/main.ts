import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Transport} from "@nestjs/common/enums/transport.enum";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.REDIS,
  });
  await app.startAllMicroservicesAsync();
  app.enableCors();
  await app.listen(8000);
}
bootstrap();
