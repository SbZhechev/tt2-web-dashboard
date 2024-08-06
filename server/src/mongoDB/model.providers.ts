import { Connection } from 'mongoose';
import { PlayerSchema } from './schemas/player.schema';
import { ClanSchema } from './schemas/clan.schema';
import { CONNECTION_TOKEN } from 'src/constants';
import { PLAYER_MODEL_TOKEN, CLAN_MODEL_TOKEN } from 'src/constants';

export const modelProviders = [
  {
    provide: PLAYER_MODEL_TOKEN,
    useFactory: (connetion: Connection) => connetion.model('Player', PlayerSchema),
    inject: [CONNECTION_TOKEN]
  },
  {
    provide: CLAN_MODEL_TOKEN,
    useFactory: (connetion: Connection) => connetion.model('Clan', ClanSchema),
    inject: [CONNECTION_TOKEN]
  }
]