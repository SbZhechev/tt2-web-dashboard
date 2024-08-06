import * as mongoose from 'mongoose';

export const PlayerSchema = new mongoose.Schema({
  clan_code: String,
  player_code: String,
  country_code: String,
  max_stage: Number,
  raid_wildcard_count: Number,
  current_card_currency: Number,
  name: String,
  total_raid_player_xp: String,
  player_raid_level: String,
  total_card_level: String,
  role: String,
  weekly_ticket_count: String,
  loyalty_level: String,
  daily_raid_tickets: String,
  previous_rank: String,
  cards: [
    {
      level: Number,
      quantity_received: Number,
      quantity_spent: Number,
      skill_name: String
    }
  ],
  equipment_set: [String]
});