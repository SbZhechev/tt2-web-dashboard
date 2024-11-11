import { Connection } from 'mongoose';
import { PlayerSchema } from './schemas/player.schema';
import { ClanSchema } from './schemas/clan.schema';
import { RaidSchema } from './schemas/raid.schema';
import { RaidAttackSchema } from './schemas/raidAttack.schema';
import { ClanMemberSchema } from './schemas/clanMember.schema';
import { CONNECTION_TOKEN } from 'src/constants';
import { PLAYER_MODEL_TOKEN, CLAN_MODEL_TOKEN, RAID_MODEL_TOKEN, RAID_ATTACK_MODEL_TOKEN, CLAN_MEMBER_MODEL_TOKEN } from 'src/constants';

export const modelProviders = [
  {
    provide: PLAYER_MODEL_TOKEN,
    useFactory: (connetion: Connection) => connetion.model('Player', PlayerSchema),
    inject: [CONNECTION_TOKEN]
  },
  {
    provide: CLAN_MEMBER_MODEL_TOKEN,
    useFactory: (connetion: Connection) => connetion.model('ClanMember', ClanMemberSchema),
    inject: [CONNECTION_TOKEN]
  },
  {
    provide: CLAN_MODEL_TOKEN,
    useFactory: (connetion: Connection) => connetion.model('Clan', ClanSchema),
    inject: [CONNECTION_TOKEN]
  },
  {
    provide: RAID_MODEL_TOKEN,
    useFactory: (connetion: Connection) => connetion.model('Raid', RaidSchema),
    inject: [CONNECTION_TOKEN]
  },
  {
    provide: RAID_ATTACK_MODEL_TOKEN,
    useFactory: (connetion: Connection) => connetion.model('RaidAttack', RaidAttackSchema),
    inject: [CONNECTION_TOKEN]
  }
]