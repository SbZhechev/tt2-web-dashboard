import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketIoService } from './socket-io/socket-io.service';
import { ConfigModule } from '@nestjs/config';
import { socketIoProvider } from './socket-io/socket-io.provider';
import { databaseConnectionProvider } from './mongoDB/databaseConnection.provider';
import { modelProviders } from './mongoDB/model.providers';
import { TT2Service } from './tt2.service';

@Module({
  controllers: [AppController],
  providers: [
    AppService, 
    SocketIoService, 
    TT2Service,
    socketIoProvider, 
    databaseConnectionProvider,
    ...modelProviders
  ],
  imports: [ConfigModule.forRoot({ isGlobal: true})]
})
export class AppModule {}
