import { Document } from "mongoose";

export interface Player extends Document {
  clan_code: string;
  player_code: string;
  country_code: string;
  max_stage: number;
  raid_wildcard_count: number;
  current_card_currency: number;
  name: string;
  total_raid_player_xp: string;
  player_raid_level: string;
  total_card_level: string;
  role: string;
  weekly_ticket_count: string;
  loyalty_level: string;
  daily_raid_tickets: string;
  previous_rank: string;
  cards: [
    {
      level: number;
      quantity_received: number;
      quantity_spent: number;
      skill_name: string;
    }
  ];
  equipment_set: string[];
}