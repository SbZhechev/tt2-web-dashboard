interface DamageLog {
  id: string;
  value: number;
}

interface Part {
  part_id: string;
  total_hp: number;
}

export {
  DamageLog,
  Part
}