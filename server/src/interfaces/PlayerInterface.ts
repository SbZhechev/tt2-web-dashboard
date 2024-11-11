import { Document } from "mongoose";

export interface Player extends Document {
  player_code: string;
  country_code: string;
  max_stage: number;
  crafting_shards_spent: number;
  raid_wildcard_count: number;
  current_card_currency: number;
  additive_relic_multiplier: number;
  relics_received: string;
  relics_spent: string;
  summon_level: number;
  name: string;
  total_tournaments: string;
  undisputed_count: string;
  titan_points: string;
  total_raid_player_xp: string;
  player_raid_level: string;
  total_card_level: string;
  equipment_set_count: string;
  total_pet_levels: string;
  total_skill_points: string;
  total_helper_weapons: string;
  total_clan_scrolls: string;
  challenge_tournaments_participation: string;
  challenge_tournaments_undisputed_count: string;
  current_world_id: string;
  clan_code: string;
  clan_name: string;
  role: string;
  weekly_ticket_count: string;
  titan_cards: [
    {
      titan_id: string;
      level: number;
      quantity_received: number;
      quantity_spent: number;
    }
  ];
  raid_research_tree: {
    ArmorDamage: number;
    BodyDamage: number;
    ChestDamage: number;
    HeadDamage: number;
    LimbDamage: number;
    RaidEnemy1Damage: number;
    RaidEnemy2Damage: number;
    RaidEnemy3Damage: number;
    RaidEnemy4Damage: number;
    RaidEnemy5Damage: number;
    RaidEnemy6Damage: number;
    RaidEnemy7Damage: number;
    RaidEnemy8Damage: number;
  };
  raid_research_bonuses: {
    RaidBaseDamage: number;
    AfflictionBaseDamage: number;
    BurstBaseDamage: number;
    ArmorBaseDamage: number;
    BodyBaseDamage: number;
    HeadBaseDamage: number;
    LimbBaseDamage: number;
    TorsoBaseDamage: number;
    HeadArmorBaseDamage: number;
    LimbArmorBaseDamage: number;
    TorsoArmorBaseDamage: number;
    HeadBodyBaseDamage: number;
    LimbBodyBaseDamage: number;
    TorsoBodyBaseDamage: number;
    Enemy1BaseDamage: number;
    Enemy2BaseDamage: number;
    Enemy3BaseDamage: number;
    Enemy4BaseDamage: number;
    Enemy5BaseDamage: number;
    Enemy6BaseDamage: number;
    Enemy7BaseDamage: number;
    Enemy8BaseDamage: number;
    Enemy1AfflictionBaseDamage: number;
    Enemy2AfflictionBaseDamage: number;
    Enemy3AfflictionBaseDamage: number;
    Enemy4AfflictionBaseDamage: number;
    Enemy5AfflictionBaseDamage: number;
    Enemy6AfflictionBaseDamage: number;
    Enemy7AfflictionBaseDamage: number;
    Enemy8AfflictionBaseDamage: number;
    Enemy1BurstBaseDamage: number;
    Enemy2BurstBaseDamage: number;
    Enemy3BurstBaseDamage: number;
    Enemy4BurstBaseDamage: number;
    Enemy5BurstBaseDamage: number;
    Enemy6BurstBaseDamage: number;
    Enemy7BurstBaseDamage: number;
    Enemy8BurstBaseDamage: number;
  };
  loyalty_level: string;
  daily_raid_tickets: string;
  previous_rank: string;
  artifacts: [
    {
      level: string;
      artifact_id: string;
      is_enchanted: boolean;
    }
  ];
  seasonal_relics_received: string;
  seasonal_relics_spent: string;
  seasonal_relic_multiplier: number;
  seasonal_artifacts: [
    {
      level: string;
      artifact_id: string;
      is_enchanted: boolean;
    }
  ];
  cards: [
    {
      level: number;
      quantity_received: number;
      quantity_spent: number;
      skill_name: string;
    }
  ];
  pets: [
    {
      level: number;
      pet_id: string;
    }
  ];
  badge_count: {
    '0': number;
    '1': number;
    '2': number;
    '3': number;
    '4': number;
  };
  hero_weapon: [
    {
      level: number;
      HelperID: string;
    }
  ];
  clan_scroll: [
    {
      level: number;
      ScrollId: string;
    }
  ];
  skill_tree: [
    {
      level: number;
      skill_id: string;
    }
  ];
  equipment_set: string[];
}