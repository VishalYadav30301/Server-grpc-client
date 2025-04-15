import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join, resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, 'proto/hero.proto'),
      url: 'localhost:5005',
    },
  });

  await app.listen();
  console.log('gRPC server is running on http://localhost:5005');
}
bootstrap();
