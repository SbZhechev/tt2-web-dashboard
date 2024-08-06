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

interface CardBonus {
  id: string,
  value: number
}

interface TitanTargetState {
  id: string,
  state: string
}

interface TitanTarget {
  updated_at: Date,
  enemy_id: string,
  state: TitanTargetState[]
}

interface RaidSummary {
  player_code: string,
  name: string,
  num_attacks: number,
  total_damage: number,
  log: Log[]
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
  retired_at: Date,
  next_reset_at: Date,
  card_bonuses: CardBonus[],
  titan_target: TitanTarget[],
  raid_summary: RaidSummary[]
}