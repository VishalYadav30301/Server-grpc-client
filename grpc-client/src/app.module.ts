import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join, resolve } from 'path';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: join(__dirname, 'proto/hero.proto'),
          url: 'localhost:5000',
        },
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}