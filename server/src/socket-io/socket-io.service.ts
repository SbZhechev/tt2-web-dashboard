import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { io } from 'socket.io-client';

interface EnvironmentVariables {
  TT2_WS_URL: string;
  APP_TOKEN: string;
  PLAYER_TOKEN: string;
}

@Injectable()
export class SocketIoService {
  constructor(private readonly configService: ConfigService<EnvironmentVariables>) {
    [this.tt2Socket_Player, this.tt2Socket_Raid] = this.createSocketInstances();
    this.attachEventListeners();
    this.tt2Socket_Raid.connect();
  }

  private readonly tt2Socket_Player;
  private readonly tt2Socket_Raid;
  private readonly TT2_WS_URL = this.configService.get('TT2_WS_URL');
  private readonly APP_TOKEN = this.configService.get('APP_TOKEN');
  private readonly PLAYER_TOKEN = this.configService.get('PLAYER_TOKEN');

  private createSocketInstances() {
    return ['/player', '/raid'].map((channel) => {
      return io(this.TT2_WS_URL + channel, {
        path: '/api',
        autoConnect: false,
        reconnectionAttempts: 1,
        reconnectionDelay: 20000,
        transports: ['websocket'],
        extraHeaders: {
          'API-Authenticate': this.APP_TOKEN
        }
      });
    });
  };

  private attachEventListeners() {
    this.tt2Socket_Raid.on('connect', async () => {
      console.log('TT2 SocketIO connected!');

      let response = await fetch("https://tt2-public.gamehivegames.com/raid/subscribe",
        {
          method: "POST",
          headers: {
            "API-Authenticate": this.APP_TOKEN,
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "player_tokens": [this.PLAYER_TOKEN],
          })
        });
      
      let data = await response.json();
      console.log(data);
    });
    
    this.tt2Socket_Raid.on('attack', (data) => {
      console.log(data.attack_log.cards_damage);
      console.log(data.attack_log.cards_damage[0]);
      console.log(data.attack_log.cards_damage[1]);
      console.log(data.attack_log.cards_damage[2]);
      console.log(data.attack_log.cards_damage[3]);
    });
  };
}
