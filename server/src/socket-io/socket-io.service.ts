import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { io } from 'socket.io-client';
import { TT2Service } from 'src/tt2.service';

interface EnvironmentVariables {
  TT2_WS_URL: string;
  APP_TOKEN: string;
  PLAYER_TOKEN: string;
}

@Injectable()
export class SocketIoService {
  private readonly TT2_WS_URL;
  private readonly APP_TOKEN;

  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>,
    private readonly tt2Service: TT2Service
  ) {
    this.TT2_WS_URL = this.configService.get('TT2_WS_URL');
    this.APP_TOKEN = this.configService.get('APP_TOKEN');
  }
  

  createSocketInstance = (channelName: string) => {
    return io(this.TT2_WS_URL + '/' + channelName, {
      path: '/api',
      autoConnect: false,
      reconnectionAttempts: 1,
      reconnectionDelay: 20000,
      transports: ['websocket'],
      extraHeaders: {
        'API-Authenticate': this.APP_TOKEN
      }
    });
  };

  onConnectEventHandler = async () => {
    console.log('TT2 SocketIO connected!');
    await this.tt2Service.subscribe();
    // await this.tt2Service.getClanData();
  }

  onAttackEventHandler = (data: any) => {
    console.log(data);
  };
}
