import * as mongoose from 'mongoose';

export const RaidSchema = new mongoose.Schema({
  clan_code: String,
  raid_id: Number,
  player: {
    name: String,
    player_code: String
  },
  keys_remaining: Number,
  morale: {
    bonus_amount: Number,
    used: Number
  },
  raid: {
    level: Number,
    tier: Number,
    spawn_sequence: [String],
    titans: [{
      enemy_name: String,
      enemy_id: String,
      total_hp: Number,
      parts: [{
        part_id: String,
        total_hp: Number
      }]
    }]
  },
  start_at: Date,
  ended_at: Date,
  num_attacks: Number,
  total_damage: Number,
  log: [{
    enemy_id: String,
    titan_index: Number,
    damage_log: [{
      id: String,
      value: Number
    }]
  }]
});