import * as mongoose from 'mongoose';

export const RaidAttackSchema = new mongoose.Schema({
  clan_code: String,
  raid_id: Number,
  cycle: Number,
  player: {
    name: String,
    player_code: String,
    raid_level: Number,
    attacks_remaining: Number
  },
  attack_log: {
    cards_damage: {
      titan_index: Number,
      id: Number,
      damage_log: [{
        id: Number,
        value: Number
      }]
    },
    cards_level: [{
      id: String,
      value: Number
    }],
    attack_datetime: Date
  },
  raid_state: {
    titan_index: Number,
    current: {
      current_hp: Number,
      enemy_id: String,
      parts: [{
        part_id: String,
        current_hp: Number
      }]
    }
  }
});