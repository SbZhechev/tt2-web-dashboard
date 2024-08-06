import { Document } from "mongoose";
import { DamageLog, Part } from "./UtilityInterfaces";

interface Titan {
  enemy_name: string;
  enemy_id: string;
  total_hp: number;
  parts: Part[]
}

interface Log {
  enemy_id: string;
  titan_index: number;
  damage_log: DamageLog[];
}

export interface Raid extends Document {
  clan_code: string,
  raid_id: number,
  player: {
    name: string,
    player_code: string
  },
  keys_remaining: number,
  morale: {
    bonus_amount: number,
    used: number
  },
  raid: {
    level: number,
    tier: number,
    spawn_sequence: string[],
    titans: Titan[]
  },
  start_at: Date,
  ended_at: Date,
  num_attacks: number,
  total_damage: number,
  log: Log[]
}