import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { io } from 'socket.io-client';
import axios from 'axios';

interface EnvironmentVariables {
  TT2_WS_URL: string;
  APP_TOKEN: string;
  PLAYER_TOKEN: string;
}

@Injectable()
export class SocketIoService {
  private readonly TT2_WS_URL;
  private readonly APP_TOKEN;
  private readonly PLAYER_TOKEN;

  constructor(private readonly configService: ConfigService<EnvironmentVariables>) {
    this.TT2_WS_URL = this.configService.get('TT2_WS_URL');
    this.APP_TOKEN = this.configService.get('APP_TOKEN');
    this.PLAYER_TOKEN = this.configService.get('PLAYER_TOKEN');
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
    const url = 'https://tt2-public.gamehivegames.com/raid/subscribe';
    const requestData = { 'player_tokens': [this.PLAYER_TOKEN] };
    const requestHeaders = {
      "API-Authenticate": this.APP_TOKEN,
      "Accept": "application/json",
      "Content-Type": "application/json"
    };
    let response = await axios.post(url, requestData, { headers: requestHeaders });
      
    if (response.status === 200 && response.data.hasOwnProperty('ok')) {
      console.log('Subscription successful!');
    } else {
      throw new Error(response.data._error.message);
    }
  }

  onAttackEventHandler = (data: any) => {
    console.log(data);
  };
}
