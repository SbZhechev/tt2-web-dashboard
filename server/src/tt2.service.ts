import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PLAYER_DATA_PROPERTIES, PLAYER_MODEL_TOKEN, CLAN_MODEL_TOKEN } from './constants';
import { Player } from './interfaces/PlayerInterface';
import { Clan } from './interfaces/ClanInterface';
import axios from 'axios';

@Injectable()
export class TT2Service {
  private readonly APP_TOKEN;
  private readonly PLAYER_TOKEN;
  private readonly requestHeaders;

  constructor(
    private readonly configService: ConfigService,
    @Inject(PLAYER_MODEL_TOKEN)
    private readonly playerModel: Model<Player>,
    @Inject(CLAN_MODEL_TOKEN)
    private readonly clanModel: Model<Clan>
  ) {
    this.APP_TOKEN = this.configService.get('APP_TOKEN');
    this.PLAYER_TOKEN = this.configService.get('PLAYER_TOKEN');
    this.requestHeaders = {
      "API-Authenticate": this.APP_TOKEN,
      "Accept": "application/json",
      "Content-Type": "application/json"
    };
  }

  subscribe = async () => {
    const url = 'https://tt2-public.gamehivegames.com/raid/subscribe';
    const requestData = { 'player_tokens': [this.PLAYER_TOKEN] };
    const requestHeaders = this.requestHeaders;

    try {
      let response = await axios.post(url, requestData, { headers: requestHeaders });
        
      if (response.status === 200 && response.data.hasOwnProperty('ok')) {
        console.log('Subscription successful!');

        // await this.clanModel.insertMany(response.data.ok);

        // console.log('Clan\'s data saved successfully!');
      } else {
        throw new Error(response.data._error.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  getPlayerData = async () => {
    const url = 'https://tt2-public.gamehivegames.com/player/data';
    const requestData = {
      player_token: this.PLAYER_TOKEN,
      properties: PLAYER_DATA_PROPERTIES
    };
    const requestHeaders = this.requestHeaders;

    try {
      let response = await axios.post(url, requestData, { headers: requestHeaders });

      const playerDocument = new this.playerModel(response.data);
      await playerDocument.save();

      console.log('Player\'s data saved successfully!');
    } catch (error) {
      console.log(error);
    }
  }

  getClanData = async () => {
    const url = 'https://tt2-public.gamehivegames.com/raid/clan_data';
    const requestData = {
      player_token: this.PLAYER_TOKEN,
      properties: PLAYER_DATA_PROPERTIES
    };
    const requestHeaders = this.requestHeaders;

    try {
      let response = await axios.post(url, requestData, { headers: requestHeaders });
      let playersData = response.data.players_data;
      playersData.forEach((playerData: Player) => {
        playerData.clan_code = response.data.clan_code;
      });

      await this.playerModel.insertMany(playersData);

      console.log('Clan members data saved successfully!');
    } catch (error) {
      console.log(error);
    }
  }
}
