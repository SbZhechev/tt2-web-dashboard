import * as mongoose from 'mongoose';

export const ClanSchema = new mongoose.Schema({
  clan_code: String,
  clan_name: String,
  member_list: [
    {
      player_code: String,
      name: String
    }
  ]
});