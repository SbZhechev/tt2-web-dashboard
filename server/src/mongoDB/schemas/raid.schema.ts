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
  retired_at: Date,
  next_reset_at: Date,
  card_bonuses: [{
    id: String,
    value: Number
  }],
  titan_target: [{
    updated_at: Date,
    enemy_id: String,
    state: [{
      id: String,
      state: String
    }]
  }],
  raid_summary: [{
    player_code: String,
    name: String,
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
  }]
});