import { Document } from "mongoose";

interface ClanMember {
  player_code: string;
  name: string;
}

export interface Clan extends Document {
  clan_code: string;
  clan_name: string;
  member_list: ClanMember[];
}