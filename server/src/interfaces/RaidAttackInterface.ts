import { Document } from "mongoose";
import { DamageLog, Part } from "./UtilityInterfaces";

interface CardLevel {
  id: string,
  value: number
}

export interface RaidAttackInterface extends Document {
  clan_code: string,
  raid_id: number,
  cycle: number,
  player: {
    name: string,
    player_code: string,
    raid_level: number,
    attacks_remaining: number
  },
  attack_log: {
    cards_damage: {
      titan_index: number,
      id: number,
      damage_log: DamageLog[]
    },
    cards_level: CardLevel[],
    attack_datetime: Date
  },
  raid_state: {
    titan_index: number,
    current: {
      current_hp: number,
      enemy_id: string,
      parts: Part[]
    }
  }
}