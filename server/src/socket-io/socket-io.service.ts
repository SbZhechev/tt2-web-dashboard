import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { io } from 'socket.io-client';
import { TT2Service } from 'src/tt2.service';
import { Model } from 'mongoose';
import { RaidAttackInterface } from 'src/interfaces/RaidAttackInterface';
import { Raid } from 'src/interfaces/RaidInterface';
import { RAID_ATTACK_MODEL_TOKEN, RAID_MODEL_TOKEN } from 'src/constants';

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
    private readonly tt2Service: TT2Service,
    @Inject(RAID_ATTACK_MODEL_TOKEN)
    private readonly raidAttackModel: Model<RaidAttackInterface>,
    @Inject(RAID_MODEL_TOKEN)
    private readonly raidModel: Model<Raid>
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
  }

  onAttackEventHandler = async (data: RaidAttackInterface) => {
    const raidAttackDocument = new this.raidAttackModel(data);
    await raidAttackDocument.save();

    console.log('Raid attack saved successfully!');
  };

  onRaidStartEventHandler = async (data: Raid) => {
    const raidDocument = new this.raidModel(data);
    await raidDocument.save();

    console.log('Raid saved successfully!');
  }
}
