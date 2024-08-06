import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketIoService } from './socket-io/socket-io.service';
import { ConfigModule } from '@nestjs/config';
import { socketIoProvider } from './socket-io/socket-io.provider';

@Module({
  controllers: [AppController],
  providers: [AppService, SocketIoService, socketIoProvider],
  imports: [ConfigModule.forRoot({ isGlobal: true})]
})
export class AppModule {}
