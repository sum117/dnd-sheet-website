export type Reference = {
  index: string;
  name: string;
  url: string;
};

export interface BaseEquipment {
  special: string[];
  index: string;
  name: string;
  cost: {
    quantity: number;
    unit: string;
  };
  weight: number;
  desc: string[];
  url: string;
  contents: unknown[];
  properties: unknown[];
}

export interface EquipmentGear extends BaseEquipment {
  gear_category: Reference;
  equipment_category: Reference;
}

export interface EquipmentWeapon extends BaseEquipment {
  weapon_category: string;
  weapon_range: string;
  category_range: string;
  damage: {
    damage_dice: string;
    damage_type: Reference;
  };
  range: {
    normal?: number;
    long?: number;
  };
  equipment_category: Reference;
  normal: number;
}

export interface EquipmentArmor extends BaseEquipment {
  armor_category: string;
  armor_class: {
    base: number;
    dex_bonus: boolean;
    max_bonus: number;
  };
  equipment_category: Reference;
  str_minimum: number;
  stealth_disadvantage: boolean;
}

export type EquipmentType = EquipmentGear | EquipmentWeapon | EquipmentArmor;
