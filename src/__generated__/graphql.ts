/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Int or string */
  ActionCount: { input: any; output: any; }
  /** AreaOfEffectType ("SPHERE", "CUBE", "CYLINDER", "LINE", "CONE") or list of AreaOfEffectTypes */
  AreaOfEffectTypeFilter: { input: any; output: any; }
  /** Float, list of floats, or object with gte (>=), gt (>), lte (<=), and lt (<) properties for range of values */
  FloatFilter: { input: any; output: any; }
  /** Int, list of ints, or object with gte (>=), gt (>), lte (<=), and lt (<) properties for range of values */
  IntFilter: { input: any; output: any; }
  /** LanguageScript ("COMMON", "ELVISH", "DWARVISH", "INFERNAL", "DRACONIC", "CELESTIAL") or list of LanguageScripts */
  LanguageScriptFilter: { input: any; output: any; }
  /** MonsterSubtype ("ANY_RACE", "HUMAN", "DWARF", "ELF", "GOBLINOID", "MERFOLK", "SHAPECHANGER", "DEMON", "DEVIL", "ORC", "SAHUAGIN", "TITAN", "KOBOLD", "GNOLL", "GRIMLOCK", "LIZARDFOLK", "GNOME") or list of MonsterSubtypes */
  MonsterSubtypeFilter: { input: any; output: any; }
  /** MonsterTypes ("BEAST", "MONSTROSITY", "DRAGON", "HUMANOID", "UNDEAD", "FIEND", "CELESTIAL", "CONSTRUCT", "GIANT", "ELEMENTAL", "FEY", "ABERRATION", "OOZE", "SWARM", "PLANT") or list of MonsterTypes */
  MonsterTypeFilter: { input: any; output: any; }
  /** ProficiencyType ("WEAPONS", "ARTISANS_TOOLS", "SKILLS", "ARMOR", "MUSICAL_INSTRUMENTS", "SAVING_THROWS", "OTHER", "GAMING_SETS", "VEHICLES") or list of ProficiencyTypes */
  ProficiencyTypeFilter: { input: any; output: any; }
  /** Size ("TINY", "SMALL", "MEDIUM", "LARGE", "HUGE", "GARGANTUAN") or list of sizes */
  SizeFilter: { input: any; output: any; }
  /** SpellAttackType ("MELEE", "RANGED") or list of SpellAttackTypes */
  SpellAttackTypeFilter: { input: any; output: any; }
  /** String or list of strings */
  StringFilter: { input: any; output: any; }
};

export type AbilityBonus = {
  __typename?: 'AbilityBonus';
  ability_score: AbilityScore;
  bonus: Scalars['Int']['output'];
};

export type AbilityBonusChoice = {
  __typename?: 'AbilityBonusChoice';
  choose: Scalars['Int']['output'];
  from: AbilityBonusOptionSet;
  type: Scalars['String']['output'];
};

export type AbilityBonusOption = {
  __typename?: 'AbilityBonusOption';
  ability_score: AbilityScore;
  bonus: Scalars['Int']['output'];
  option_type: Scalars['String']['output'];
};

export type AbilityBonusOptionSet = {
  __typename?: 'AbilityBonusOptionSet';
  option_set_type: Scalars['String']['output'];
  options: Array<AbilityBonusOption>;
};

export type AbilityScore = {
  __typename?: 'AbilityScore';
  desc: Array<Scalars['String']['output']>;
  full_name: Scalars['String']['output'];
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  skills: Array<Skill>;
};


export type AbilityScoreSkillsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};

export type AbilityScorePrerequisite = {
  __typename?: 'AbilityScorePrerequisite';
  ability_score: AbilityScore;
  minimum_score: Scalars['Int']['output'];
};

export type Action = {
  __typename?: 'Action';
  action_name: Scalars['String']['output'];
  count: Scalars['ActionCount']['output'];
  type: Scalars['String']['output'];
};

export type ActionDamage = {
  __typename?: 'ActionDamage';
  choose?: Maybe<Scalars['Int']['output']>;
  damage_dice?: Maybe<Scalars['String']['output']>;
  damage_type?: Maybe<DamageType>;
  dc?: Maybe<ActionDc>;
  from?: Maybe<DamageOptionSet>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ActionDc = {
  __typename?: 'ActionDc';
  success: DcSuccess;
  type: AbilityScore;
  value: Scalars['Int']['output'];
};

export type ActionOption = {
  __typename?: 'ActionOption';
  action_name: Scalars['String']['output'];
  count: Scalars['ActionCount']['output'];
  option_type: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type Alignment = {
  __typename?: 'Alignment';
  abbreviation: Scalars['String']['output'];
  desc: Scalars['String']['output'];
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Ammunition = IEquipment & IEquipmentBase & IGear & {
  __typename?: 'Ammunition';
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']['output']>>;
  equipment_category: EquipmentCategory;
  gear_category: EquipmentCategory;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
};

export type AreaOfEffect = {
  __typename?: 'AreaOfEffect';
  size: Scalars['Int']['output'];
  type: AreaOfEffectType;
};

export type AreaOfEffectFilter = {
  size?: InputMaybe<Scalars['IntFilter']['input']>;
  type?: InputMaybe<Scalars['AreaOfEffectTypeFilter']['input']>;
};

export enum AreaOfEffectType {
  Cone = 'CONE',
  Cube = 'CUBE',
  Cylinder = 'CYLINDER',
  Line = 'LINE',
  Sphere = 'SPHERE'
}

export type Armor = IEquipment & IEquipmentBase & {
  __typename?: 'Armor';
  armor_category: EquipmentCategory;
  armor_class: ArmorClass;
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']['output']>>;
  equipment_category: EquipmentCategory;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  stealth_disadvantage: Scalars['Boolean']['output'];
  str_minimum: Scalars['Int']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
};

export type ArmorClass = {
  __typename?: 'ArmorClass';
  base: Scalars['Int']['output'];
  dex_bonus: Scalars['Boolean']['output'];
  max_bonus?: Maybe<Scalars['Int']['output']>;
};

export type Attack = {
  __typename?: 'Attack';
  damage?: Maybe<Array<Damage>>;
  dc: ActionDc;
  name: Scalars['String']['output'];
};

export type Background = {
  __typename?: 'Background';
  bonds: StringChoice;
  feature: BackgroundFeature;
  flaws: StringChoice;
  ideals: IdealChoice;
  index: Scalars['String']['output'];
  language_options: LanguageChoice;
  name: Scalars['String']['output'];
  personality_traits: StringChoice;
  starting_equipment: Array<Quantity>;
  starting_equipment_options: Array<EquipmentCategoryChoice>;
  starting_proficiencies: Array<Proficiency>;
};


export type BackgroundStarting_EquipmentArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type BackgroundStarting_ProficienciesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BackgroundFeature = {
  __typename?: 'BackgroundFeature';
  desc: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type BarbarianSpecific = {
  __typename?: 'BarbarianSpecific';
  brutal_critical_dice: Scalars['Int']['output'];
  rage_count: Scalars['Int']['output'];
  rage_damage_bonus: Scalars['Int']['output'];
};

export type BardSpecific = {
  __typename?: 'BardSpecific';
  bardic_inspiration_die: Scalars['Int']['output'];
  magical_secrets_max_5: Scalars['Int']['output'];
  magical_secrets_max_7: Scalars['Int']['output'];
  magical_secrets_max_9: Scalars['Int']['output'];
  song_of_rest_die: Scalars['Int']['output'];
};

export type BreathChoice = {
  __typename?: 'BreathChoice';
  choose: Scalars['Int']['output'];
  from: BreathOptionSet;
  type: Scalars['String']['output'];
};

export type BreathOption = {
  __typename?: 'BreathOption';
  damage?: Maybe<Array<Damage>>;
  dc: ActionDc;
  name: Scalars['String']['output'];
  option_type: Scalars['String']['output'];
};

export type BreathOptionSet = {
  __typename?: 'BreathOptionSet';
  option_set_type: Scalars['String']['output'];
  options: Array<BreathOption>;
};

export type BreathWeaponDamage = {
  __typename?: 'BreathWeaponDamage';
  damage_at_character_level: Array<DamageAtLevel>;
  damage_type: DamageType;
};

export type BreathWeaponDc = {
  __typename?: 'BreathWeaponDc';
  success: DcSuccess;
  type: AbilityScore;
};

export type BreathWeaponTrait = {
  __typename?: 'BreathWeaponTrait';
  area_of_effect: AreaOfEffect;
  damage: Array<BreathWeaponDamage>;
  dc: BreathWeaponDc;
  desc: Scalars['String']['output'];
  name: Scalars['String']['output'];
  usage: BreathWeaponUsage;
};

export type BreathWeaponUsage = {
  __typename?: 'BreathWeaponUsage';
  times: Scalars['Int']['output'];
  type: UsageType;
};

export type Class = {
  __typename?: 'Class';
  class_levels: Array<Level>;
  hit_die: Scalars['Int']['output'];
  index: Scalars['String']['output'];
  multi_classing: Multiclassing;
  name: Scalars['String']['output'];
  proficiencies: Array<Proficiency>;
  proficiency_choices: Array<ProficiencyChoice>;
  saving_throws: Array<AbilityScore>;
  spellcasting?: Maybe<ClassSpellcasting>;
  spells?: Maybe<Array<Spell>>;
  starting_equipment: Array<Quantity>;
  starting_equipment_options: Array<StartingEquipmentChoice>;
  subclasses: Array<Subclass>;
};


export type ClassProficienciesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type ClassSpellsArgs = {
  area_of_effect?: InputMaybe<AreaOfEffectFilter>;
  attack_type?: InputMaybe<Scalars['SpellAttackTypeFilter']['input']>;
  casting_time?: InputMaybe<Scalars['StringFilter']['input']>;
  concentration?: InputMaybe<Scalars['Boolean']['input']>;
  damage_type?: InputMaybe<Scalars['StringFilter']['input']>;
  dc_type?: InputMaybe<Scalars['StringFilter']['input']>;
  level?: InputMaybe<Scalars['IntFilter']['input']>;
  limit?: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<SpellOrder>;
  range?: InputMaybe<Scalars['StringFilter']['input']>;
  ritual?: InputMaybe<Scalars['Boolean']['input']>;
  school?: InputMaybe<Scalars['StringFilter']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subclass?: InputMaybe<Scalars['StringFilter']['input']>;
};


export type ClassSubclassesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ClassOrder = {
  by: ClassOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<ClassOrder>;
};

export enum ClassOrderBy {
  HitDie = 'HIT_DIE',
  Name = 'NAME'
}

export type ClassSpecific = BarbarianSpecific | BardSpecific | ClericSpecific | DruidSpecific | FighterSpecific | MonkSpecific | PaladinSpecific | RangerSpecific | RogueSpecific | SorcererSpecific | WarlockSpecific | WizardSpecific;

export type ClassSpellcasting = {
  __typename?: 'ClassSpellcasting';
  info: Array<SpellcastingInfo>;
  level: Scalars['Int']['output'];
  spellcasting_ability: AbilityScore;
};

export type ClericSpecific = {
  __typename?: 'ClericSpecific';
  channel_divinity_charges: Scalars['Int']['output'];
  destroy_undead_cr: Scalars['Float']['output'];
};

export type Condition = {
  __typename?: 'Condition';
  desc: Array<Scalars['String']['output']>;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Cost = {
  __typename?: 'Cost';
  quantity: Scalars['Int']['output'];
  unit: Currency;
};

export type CountedReferenceOption = {
  __typename?: 'CountedReferenceOption';
  count: Scalars['Int']['output'];
  of: IEquipment;
  option_type: Scalars['String']['output'];
  prerequisites?: Maybe<Array<ProficiencyPrerequisite>>;
};

export enum Currency {
  Cp = 'CP',
  Gp = 'GP',
  Sp = 'SP'
}

export type Damage = {
  __typename?: 'Damage';
  damage_dice: Scalars['String']['output'];
  damage_type: DamageType;
};

export type DamageAtLevel = {
  __typename?: 'DamageAtLevel';
  damage: Scalars['String']['output'];
  level: Scalars['Int']['output'];
};

export type DamageOption = {
  __typename?: 'DamageOption';
  damage_dice: Scalars['String']['output'];
  damage_type: DamageType;
  notes?: Maybe<Scalars['String']['output']>;
  option_type: Scalars['String']['output'];
};

export type DamageOptionSet = {
  __typename?: 'DamageOptionSet';
  option_set_type: Scalars['String']['output'];
  options: Array<DamageOption>;
};

export type DamageType = {
  __typename?: 'DamageType';
  desc: Array<Scalars['String']['output']>;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export enum DcSuccess {
  Half = 'HALF',
  None = 'NONE',
  Other = 'OTHER'
}

export type DevotionSpecific = {
  __typename?: 'DevotionSpecific';
  aura_range: Scalars['Int']['output'];
};

export type Dice = {
  __typename?: 'Dice';
  dice_count: Scalars['Int']['output'];
  dice_value: Scalars['Int']['output'];
};

export type DruidSpecific = {
  __typename?: 'DruidSpecific';
  wild_shape_fly: Scalars['Boolean']['output'];
  wild_shape_max_cr: Scalars['Float']['output'];
  wild_shape_swim: Scalars['Boolean']['output'];
};

export type EquipmentCategory = {
  __typename?: 'EquipmentCategory';
  equipment: Array<IEquipmentBase>;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
};


export type EquipmentCategoryEquipmentArgs = {
  limit?: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<EquipmentCategoryOrder>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type EquipmentCategoryChoice = {
  __typename?: 'EquipmentCategoryChoice';
  choose: Scalars['Int']['output'];
  from: EquipmentCategoryOptionSet;
  type: Scalars['String']['output'];
};

export type EquipmentCategoryChoiceOption = {
  __typename?: 'EquipmentCategoryChoiceOption';
  choice: EquipmentCategoryChoice;
  option_type: Scalars['String']['output'];
};

export type EquipmentCategoryOptionSet = {
  __typename?: 'EquipmentCategoryOptionSet';
  equipment_category: EquipmentCategory;
  option_set_type: Scalars['String']['output'];
};

export type EquipmentCategoryOrder = {
  by: EquipmentCategoryOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<EquipmentCategoryOrder>;
};

export enum EquipmentCategoryOrderBy {
  Name = 'NAME',
  Weight = 'WEIGHT'
}

export type EquipmentMultipleItem = CountedReferenceOption | EquipmentCategoryChoiceOption;

export type EquipmentMultipleOption = {
  __typename?: 'EquipmentMultipleOption';
  items: Array<EquipmentMultipleItem>;
  option_type: Scalars['String']['output'];
};

export type EquipmentOption = CountedReferenceOption | EquipmentCategoryChoiceOption | EquipmentMultipleOption;

export type EquipmentOptionSet = {
  __typename?: 'EquipmentOptionSet';
  option_set_type: Scalars['String']['output'];
  options: Array<EquipmentOption>;
};

export type EquipmentOrder = {
  by: EquipmentOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<EquipmentOrder>;
};

export enum EquipmentOrderBy {
  EquipmentCategory = 'EQUIPMENT_CATEGORY',
  Name = 'NAME',
  Weight = 'WEIGHT'
}

export type ExpertiseChoice = {
  __typename?: 'ExpertiseChoice';
  choose: Scalars['Int']['output'];
  from: ExpertiseOptionSet;
  type: Scalars['String']['output'];
};

export type ExpertiseMultipleOption = {
  __typename?: 'ExpertiseMultipleOption';
  items: Array<ProficiencyOption>;
  option_type: Scalars['String']['output'];
};

export type ExpertiseOption = ExpertiseMultipleOption | ProficiencyChoiceOption | ProficiencyReferenceOption;

export type ExpertiseOptionSet = {
  __typename?: 'ExpertiseOptionSet';
  option_set_type: Scalars['String']['output'];
  options: Array<ExpertiseOption>;
};

export type Feat = {
  __typename?: 'Feat';
  desc: Array<Scalars['String']['output']>;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  prerequisites: Array<AbilityScorePrerequisite>;
};

export type Feature = {
  __typename?: 'Feature';
  class: Class;
  desc: Array<Scalars['String']['output']>;
  feature_specific?: Maybe<FeatureSpecific>;
  index: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Feature>;
  prerequisites: Array<FeaturePrerequisite>;
  reference?: Maybe<Scalars['String']['output']>;
  subclass?: Maybe<Subclass>;
};

export type FeatureChoice = {
  __typename?: 'FeatureChoice';
  choose: Scalars['Int']['output'];
  from: FeatureOptionSet;
  type: Scalars['String']['output'];
};

export type FeatureOption = {
  __typename?: 'FeatureOption';
  item: Feature;
  option_type: Scalars['String']['output'];
};

export type FeatureOptionSet = {
  __typename?: 'FeatureOptionSet';
  option_set_type: Scalars['String']['output'];
  options: Array<FeatureOption>;
};

export type FeatureOrder = {
  by: FeatureOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<FeatureOrder>;
};

export enum FeatureOrderBy {
  Class = 'CLASS',
  Level = 'LEVEL',
  Name = 'NAME',
  Subclass = 'SUBCLASS'
}

export type FeaturePrerequisite = {
  __typename?: 'FeaturePrerequisite';
  feature?: Maybe<Feature>;
  level?: Maybe<Scalars['Int']['output']>;
  spell?: Maybe<Spell>;
  type: Scalars['String']['output'];
};

export type FeatureSpecific = {
  __typename?: 'FeatureSpecific';
  expertise_options?: Maybe<ExpertiseChoice>;
  invocations?: Maybe<Array<Feature>>;
  subfeature_options?: Maybe<FeatureChoice>;
};

export type FighterSpecific = {
  __typename?: 'FighterSpecific';
  action_surges: Scalars['Int']['output'];
  extra_attacks: Scalars['Int']['output'];
  indomitable_uses: Scalars['Int']['output'];
};

export type Gear = IEquipment & IEquipmentBase & IGear & {
  __typename?: 'Gear';
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']['output']>>;
  equipment_category: EquipmentCategory;
  gear_category: EquipmentCategory;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
};

export type HealingAtLevel = {
  __typename?: 'HealingAtLevel';
  healing: Scalars['String']['output'];
  level: Scalars['Int']['output'];
};

export type IEquipment = {
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']['output']>>;
  equipment_category: EquipmentCategory;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
};

export type IEquipmentBase = {
  desc?: Maybe<Array<Scalars['String']['output']>>;
  equipment_category: EquipmentCategory;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type IGear = {
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']['output']>>;
  equipment_category: EquipmentCategory;
  gear_category: EquipmentCategory;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
};

export type IdealChoice = {
  __typename?: 'IdealChoice';
  choose: Scalars['Int']['output'];
  from: IdealOptionSet;
  type: Scalars['String']['output'];
};

export type IdealOption = {
  __typename?: 'IdealOption';
  alignments: Array<Alignment>;
  desc: Scalars['String']['output'];
  option_type: Scalars['String']['output'];
};

export type IdealOptionSet = {
  __typename?: 'IdealOptionSet';
  option_set_type: Scalars['String']['output'];
  options: Array<IdealOption>;
};

export type Language = {
  __typename?: 'Language';
  desc?: Maybe<Scalars['String']['output']>;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  script?: Maybe<LanguageScript>;
  type: LanguageType;
  typical_speakers: Array<Scalars['String']['output']>;
};

export type LanguageChoice = {
  __typename?: 'LanguageChoice';
  choose: Scalars['Int']['output'];
  from: LanguageOptionSet;
  type: Scalars['String']['output'];
};

export type LanguageOption = {
  __typename?: 'LanguageOption';
  item: Language;
  option_type: Scalars['String']['output'];
};

export type LanguageOptionSet = {
  __typename?: 'LanguageOptionSet';
  option_set_type: Scalars['String']['output'];
  options: Array<LanguageOption>;
};

export type LanguageOrder = {
  by: LanguageOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<LanguageOrder>;
};

export enum LanguageOrderBy {
  Name = 'NAME',
  Script = 'SCRIPT',
  Type = 'TYPE'
}

export enum LanguageScript {
  Celestial = 'CELESTIAL',
  Common = 'COMMON',
  Draconic = 'DRACONIC',
  Dwarvish = 'DWARVISH',
  Elvish = 'ELVISH',
  Infernal = 'INFERNAL'
}

export enum LanguageType {
  Exotic = 'EXOTIC',
  Standard = 'STANDARD'
}

export type LegendaryAction = {
  __typename?: 'LegendaryAction';
  damage?: Maybe<Array<Damage>>;
  dc?: Maybe<ActionDc>;
  desc: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Level = {
  __typename?: 'Level';
  ability_score_bonuses?: Maybe<Scalars['Int']['output']>;
  class: Class;
  class_specific?: Maybe<ClassSpecific>;
  features: Array<Feature>;
  index: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  prof_bonus?: Maybe<Scalars['Int']['output']>;
  spellcasting?: Maybe<LevelSpellcasting>;
  subclass?: Maybe<Subclass>;
  subclass_specific?: Maybe<SubclassSpecific>;
};


export type LevelFeaturesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};

export type LevelOrder = {
  by: LevelOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<LevelOrder>;
};

export enum LevelOrderBy {
  AbilityScoreBonuses = 'ABILITY_SCORE_BONUSES',
  Class = 'CLASS',
  Level = 'LEVEL',
  ProfBonus = 'PROF_BONUS',
  Subclass = 'SUBCLASS'
}

export type LevelSpellcasting = {
  __typename?: 'LevelSpellcasting';
  cantrips_known?: Maybe<Scalars['Int']['output']>;
  spell_slots_level_1?: Maybe<Scalars['Int']['output']>;
  spell_slots_level_2?: Maybe<Scalars['Int']['output']>;
  spell_slots_level_3?: Maybe<Scalars['Int']['output']>;
  spell_slots_level_4?: Maybe<Scalars['Int']['output']>;
  spell_slots_level_5?: Maybe<Scalars['Int']['output']>;
  spell_slots_level_6?: Maybe<Scalars['Int']['output']>;
  spell_slots_level_7?: Maybe<Scalars['Int']['output']>;
  spell_slots_level_8?: Maybe<Scalars['Int']['output']>;
  spell_slots_level_9?: Maybe<Scalars['Int']['output']>;
  spells_known?: Maybe<Scalars['Int']['output']>;
};

export type LoreSpecific = {
  __typename?: 'LoreSpecific';
  additional_magical_secrets_max_lvl: Scalars['Int']['output'];
};

export type MagicItem = IEquipmentBase & {
  __typename?: 'MagicItem';
  desc: Array<Scalars['String']['output']>;
  equipment_category: EquipmentCategory;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rarity: MagicItemRarity;
};

export type MagicItemOrder = {
  by: MagicItemOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<MagicItemOrder>;
};

export enum MagicItemOrderBy {
  EquipmentCategory = 'EQUIPMENT_CATEGORY',
  Name = 'NAME'
}

export enum MagicItemRarity {
  Artifact = 'ARTIFACT',
  Common = 'COMMON',
  Legendary = 'LEGENDARY',
  Rare = 'RARE',
  Uncommon = 'UNCOMMON',
  Varies = 'VARIES',
  VeryRare = 'VERY_RARE'
}

export type MagicSchool = {
  __typename?: 'MagicSchool';
  desc: Scalars['String']['output'];
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  spells: Array<Spell>;
};


export type MagicSchoolSpellsArgs = {
  area_of_effect?: InputMaybe<AreaOfEffectFilter>;
  attack_type?: InputMaybe<Scalars['SpellAttackTypeFilter']['input']>;
  casting_time?: InputMaybe<Scalars['StringFilter']['input']>;
  class?: InputMaybe<Scalars['StringFilter']['input']>;
  concentration?: InputMaybe<Scalars['Boolean']['input']>;
  damage_type?: InputMaybe<Scalars['StringFilter']['input']>;
  dc_type?: InputMaybe<Scalars['StringFilter']['input']>;
  level?: InputMaybe<Scalars['IntFilter']['input']>;
  limit?: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<SpellOrder>;
  range?: InputMaybe<Scalars['StringFilter']['input']>;
  ritual?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subclass?: InputMaybe<Scalars['StringFilter']['input']>;
};

export type MonkSpecific = {
  __typename?: 'MonkSpecific';
  ki_points: Scalars['Int']['output'];
  martial_arts: Dice;
  unarmored_movement: Scalars['Int']['output'];
};

export type Monster = {
  __typename?: 'Monster';
  actions?: Maybe<Array<MonsterAction>>;
  alignment: Scalars['String']['output'];
  armor_class?: Maybe<Array<Maybe<MonsterArmorClass>>>;
  challenge_rating: Scalars['Float']['output'];
  charisma: Scalars['Int']['output'];
  condition_immunities: Array<Condition>;
  constitution: Scalars['Int']['output'];
  damage_immunities: Array<Scalars['String']['output']>;
  damage_resistances: Array<Scalars['String']['output']>;
  damage_vulnerabilities: Array<Scalars['String']['output']>;
  desc?: Maybe<Scalars['String']['output']>;
  dexterity: Scalars['Int']['output'];
  forms?: Maybe<Array<Monster>>;
  hit_dice: Scalars['String']['output'];
  hit_points: Scalars['Int']['output'];
  hit_points_roll: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  index: Scalars['String']['output'];
  intelligence: Scalars['Int']['output'];
  languages: Scalars['String']['output'];
  legendary_actions?: Maybe<Array<LegendaryAction>>;
  name: Scalars['String']['output'];
  proficiencies: Array<MonsterProficiency>;
  proficiency_bonus: Scalars['Int']['output'];
  reactions?: Maybe<Array<Reaction>>;
  senses: Senses;
  size: Size;
  special_abilities?: Maybe<Array<SpecialAbility>>;
  speed: MonsterSpeed;
  strength: Scalars['Int']['output'];
  subtype?: Maybe<MonsterSubtype>;
  type: MonsterType;
  wisdom: Scalars['Int']['output'];
  xp: Scalars['Int']['output'];
};

export type MonsterAction = {
  __typename?: 'MonsterAction';
  action_options?: Maybe<MonsterActionChoice>;
  actions?: Maybe<Array<Action>>;
  attack_bonus?: Maybe<Scalars['Int']['output']>;
  attacks?: Maybe<Array<Attack>>;
  damage?: Maybe<Array<ActionDamage>>;
  dc?: Maybe<ActionDc>;
  desc: Scalars['String']['output'];
  multiattack_type?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  options?: Maybe<BreathChoice>;
  usage?: Maybe<Usage>;
};

export type MonsterActionChoice = {
  __typename?: 'MonsterActionChoice';
  choose: Scalars['Int']['output'];
  from: MonsterActionOptionSet;
  type: Scalars['String']['output'];
};

export type MonsterActionOption = ActionOption | MultipleActionOption;

export type MonsterActionOptionSet = {
  __typename?: 'MonsterActionOptionSet';
  option_set_type: Scalars['String']['output'];
  options: Array<MonsterActionOption>;
};

export type MonsterArmorClass = {
  __typename?: 'MonsterArmorClass';
  armor?: Maybe<Array<Maybe<Armor>>>;
  condition?: Maybe<Condition>;
  desc?: Maybe<Scalars['String']['output']>;
  spell?: Maybe<Spell>;
  type: MonsterArmorClassType;
  value: Scalars['Int']['output'];
};

export enum MonsterArmorClassType {
  Armor = 'armor',
  Condition = 'condition',
  Dex = 'dex',
  Natural = 'natural',
  Spell = 'spell'
}

export type MonsterOrder = {
  by: MonsterOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<MonsterOrder>;
};

export enum MonsterOrderBy {
  ArmorClass = 'ARMOR_CLASS',
  ChallengeRating = 'CHALLENGE_RATING',
  Charisma = 'CHARISMA',
  Constitution = 'CONSTITUTION',
  Dexterity = 'DEXTERITY',
  Intelligence = 'INTELLIGENCE',
  Name = 'NAME',
  Size = 'SIZE',
  Strength = 'STRENGTH',
  Subtype = 'SUBTYPE',
  Type = 'TYPE',
  Wisdom = 'WISDOM',
  Xp = 'XP'
}

export type MonsterProficiency = {
  __typename?: 'MonsterProficiency';
  proficiency: Proficiency;
  value: Scalars['Int']['output'];
};

export type MonsterSpeed = {
  __typename?: 'MonsterSpeed';
  burrow?: Maybe<Scalars['String']['output']>;
  climb?: Maybe<Scalars['String']['output']>;
  fly?: Maybe<Scalars['String']['output']>;
  hover?: Maybe<Scalars['Boolean']['output']>;
  swim?: Maybe<Scalars['String']['output']>;
  walk?: Maybe<Scalars['String']['output']>;
};

export type MonsterSpell = {
  __typename?: 'MonsterSpell';
  spell: Spell;
  usage?: Maybe<Usage>;
};

export type MonsterSpellSlot = {
  __typename?: 'MonsterSpellSlot';
  level: Scalars['Int']['output'];
  slots: Scalars['Int']['output'];
};

export type MonsterSpellcasting = {
  __typename?: 'MonsterSpellcasting';
  ability: AbilityScore;
  components_required?: Maybe<Array<SpellComponent>>;
  dc?: Maybe<Scalars['Int']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  modifier?: Maybe<Scalars['Int']['output']>;
  school?: Maybe<Scalars['String']['output']>;
  slots?: Maybe<Array<MonsterSpellSlot>>;
  spells: Array<MonsterSpell>;
};

export enum MonsterSubtype {
  AnyRace = 'ANY_RACE',
  Demon = 'DEMON',
  Devil = 'DEVIL',
  Dwarf = 'DWARF',
  Elf = 'ELF',
  Gnoll = 'GNOLL',
  Gnome = 'GNOME',
  Goblinoid = 'GOBLINOID',
  Grimlock = 'GRIMLOCK',
  Human = 'HUMAN',
  Kobold = 'KOBOLD',
  Lizardfolk = 'LIZARDFOLK',
  Merfolk = 'MERFOLK',
  Orc = 'ORC',
  Sahuagin = 'SAHUAGIN',
  Shapechanger = 'SHAPECHANGER',
  Titan = 'TITAN'
}

export enum MonsterType {
  Aberration = 'ABERRATION',
  Beast = 'BEAST',
  Celestial = 'CELESTIAL',
  Construct = 'CONSTRUCT',
  Dragon = 'DRAGON',
  Elemental = 'ELEMENTAL',
  Fey = 'FEY',
  Fiend = 'FIEND',
  Giant = 'GIANT',
  Humanoid = 'HUMANOID',
  Monstrosity = 'MONSTROSITY',
  Ooze = 'OOZE',
  Plant = 'PLANT',
  Swarm = 'SWARM',
  Undead = 'UNDEAD'
}

export type Multiclassing = {
  __typename?: 'Multiclassing';
  prerequisite_options?: Maybe<PrerequisiteChoice>;
  prerequisites?: Maybe<Array<AbilityScorePrerequisite>>;
  proficiencies: Array<Proficiency>;
  proficiency_choices?: Maybe<Array<ProficiencyChoice>>;
};

export type MultipleActionOption = {
  __typename?: 'MultipleActionOption';
  items: Array<ActionOption>;
  option_type: Scalars['String']['output'];
};

export enum OrderByDirection {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING'
}

export type Pack = IEquipment & IEquipmentBase & IGear & {
  __typename?: 'Pack';
  contents: Array<PackQuantity>;
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']['output']>>;
  equipment_category: EquipmentCategory;
  gear_category: EquipmentCategory;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
};

export type PackQuantity = {
  __typename?: 'PackQuantity';
  item: IEquipment;
  quantity: Scalars['Int']['output'];
};

export type PaladinSpecific = {
  __typename?: 'PaladinSpecific';
  aura_range: Scalars['Int']['output'];
};

export type PrerequisiteChoice = {
  __typename?: 'PrerequisiteChoice';
  choose: Scalars['Int']['output'];
  from: PrerequisiteOptionSet;
  type: Scalars['String']['output'];
};

export type PrerequisiteOption = {
  __typename?: 'PrerequisiteOption';
  ability_score: AbilityScore;
  minimum_score: Scalars['Int']['output'];
  option_type: Scalars['String']['output'];
};

export type PrerequisiteOptionSet = {
  __typename?: 'PrerequisiteOptionSet';
  option_set_type: Scalars['String']['output'];
  options: Array<PrerequisiteOption>;
};

export type Proficiency = {
  __typename?: 'Proficiency';
  classes: Array<Class>;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  races: Array<ProficiencyRace>;
  reference: ProficiencyReference;
  type: ProficiencyType;
};


export type ProficiencyClassesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type ProficiencyRacesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ProficiencyChoice = {
  __typename?: 'ProficiencyChoice';
  choose: Scalars['Int']['output'];
  desc?: Maybe<Scalars['String']['output']>;
  from: ProficiencyOptionSet;
  type: Scalars['String']['output'];
};

export type ProficiencyChoiceOption = {
  __typename?: 'ProficiencyChoiceOption';
  choice: ProficiencyChoice;
  option_type: Scalars['String']['output'];
};

export type ProficiencyOption = ProficiencyChoiceOption | ProficiencyReferenceOption;

export type ProficiencyOptionSet = {
  __typename?: 'ProficiencyOptionSet';
  option_set_type: Scalars['String']['output'];
  options: Array<ProficiencyOption>;
};

export type ProficiencyOrder = {
  by: ProficiencyOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<ProficiencyOrder>;
};

export enum ProficiencyOrderBy {
  Name = 'NAME',
  Type = 'TYPE'
}

export type ProficiencyPrerequisite = {
  __typename?: 'ProficiencyPrerequisite';
  proficiency: Proficiency;
  type: Scalars['String']['output'];
};

export type ProficiencyRace = {
  ability_bonuses: Array<AbilityBonus>;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ProficiencyReference = AbilityScore | Ammunition | Armor | EquipmentCategory | Gear | Pack | Skill | Tool | Vehicle | Weapon;

export type ProficiencyReferenceOption = {
  __typename?: 'ProficiencyReferenceOption';
  item: Proficiency;
  option_type: Scalars['String']['output'];
};

export enum ProficiencyType {
  Armor = 'ARMOR',
  ArtisansTools = 'ARTISANS_TOOLS',
  GamingSets = 'GAMING_SETS',
  MusicalInstruments = 'MUSICAL_INSTRUMENTS',
  Other = 'OTHER',
  SavingThrows = 'SAVING_THROWS',
  Skills = 'SKILLS',
  Vehicles = 'VEHICLES',
  Weapons = 'WEAPONS'
}

export type Quantity = {
  __typename?: 'Quantity';
  equipment: IEquipment;
  quantity: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  abilityScore?: Maybe<AbilityScore>;
  abilityScores?: Maybe<Array<AbilityScore>>;
  alignment?: Maybe<Alignment>;
  alignments?: Maybe<Array<Alignment>>;
  background?: Maybe<Background>;
  backgrounds: Array<Background>;
  class?: Maybe<Class>;
  classes: Array<Class>;
  condition?: Maybe<Condition>;
  conditions?: Maybe<Array<Condition>>;
  damageType?: Maybe<DamageType>;
  damageTypes?: Maybe<Array<DamageType>>;
  equipment?: Maybe<IEquipment>;
  equipmentCategories?: Maybe<Array<EquipmentCategory>>;
  equipmentCategory?: Maybe<EquipmentCategory>;
  equipments?: Maybe<Array<IEquipment>>;
  feat?: Maybe<Feat>;
  feats?: Maybe<Array<Feat>>;
  feature?: Maybe<Feature>;
  features?: Maybe<Array<Feature>>;
  language?: Maybe<Language>;
  languages?: Maybe<Array<Language>>;
  level?: Maybe<Level>;
  levels?: Maybe<Array<Level>>;
  magicItem?: Maybe<MagicItem>;
  magicItems?: Maybe<Array<MagicItem>>;
  magicSchool?: Maybe<MagicSchool>;
  magicSchools?: Maybe<Array<MagicSchool>>;
  monster?: Maybe<Monster>;
  monsters?: Maybe<Array<Monster>>;
  proficiencies?: Maybe<Array<Proficiency>>;
  proficiency?: Maybe<Proficiency>;
  race?: Maybe<Race>;
  races: Array<Race>;
  rule?: Maybe<Rule>;
  ruleSection?: Maybe<RuleSection>;
  ruleSections?: Maybe<Array<RuleSection>>;
  rules?: Maybe<Array<Maybe<Rule>>>;
  skill?: Maybe<Skill>;
  skills?: Maybe<Array<Skill>>;
  spell?: Maybe<Spell>;
  spells?: Maybe<Array<Spell>>;
  subclass?: Maybe<Subclass>;
  subclasses: Array<Subclass>;
  subrace?: Maybe<Subrace>;
  subraces: Array<Subrace>;
  trait?: Maybe<Trait>;
  traits?: Maybe<Array<Trait>>;
  weaponProperties?: Maybe<Array<Maybe<WeaponProperty>>>;
  weaponProperty?: Maybe<WeaponProperty>;
};


export type QueryAbilityScoreArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAbilityScoresArgs = {
  full_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryAlignmentArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAlignmentsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryBackgroundArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBackgroundsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryClassArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryClassesArgs = {
  hit_die?: InputMaybe<Scalars['IntFilter']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ClassOrder>;
};


export type QueryConditionArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryConditionsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryDamageTypeArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDamageTypesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryEquipmentArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEquipmentCategoriesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryEquipmentCategoryArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEquipmentsArgs = {
  equipment_category?: InputMaybe<Scalars['StringFilter']['input']>;
  limit?: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<EquipmentOrder>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFeatArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFeatsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryFeatureArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFeaturesArgs = {
  class?: InputMaybe<Scalars['StringFilter']['input']>;
  level?: InputMaybe<Scalars['IntFilter']['input']>;
  limit?: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<FeatureOrder>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subclass?: InputMaybe<Scalars['StringFilter']['input']>;
};


export type QueryLanguageArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLanguagesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<LanguageOrder>;
  script?: InputMaybe<Scalars['LanguageScriptFilter']['input']>;
  type?: InputMaybe<LanguageType>;
};


export type QueryLevelArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLevelsArgs = {
  ability_score_bonuses?: InputMaybe<Scalars['IntFilter']['input']>;
  class?: InputMaybe<Scalars['StringFilter']['input']>;
  level?: InputMaybe<Scalars['IntFilter']['input']>;
  limit?: Scalars['Int']['input'];
  order?: InputMaybe<LevelOrder>;
  prof_bonus?: InputMaybe<Scalars['IntFilter']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subclass?: InputMaybe<Scalars['StringFilter']['input']>;
};


export type QueryMagicItemArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMagicItemsArgs = {
  equipment_category?: InputMaybe<Scalars['StringFilter']['input']>;
  limit?: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<MagicItemOrder>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMagicSchoolArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMagicSchoolsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryMonsterArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMonstersArgs = {
  armor_class?: InputMaybe<Scalars['IntFilter']['input']>;
  challenge_rating?: InputMaybe<Scalars['FloatFilter']['input']>;
  charisma?: InputMaybe<Scalars['IntFilter']['input']>;
  constitution?: InputMaybe<Scalars['IntFilter']['input']>;
  damage_immunity?: InputMaybe<Scalars['StringFilter']['input']>;
  damage_resistance?: InputMaybe<Scalars['StringFilter']['input']>;
  damage_vulnerability?: InputMaybe<Scalars['StringFilter']['input']>;
  dexterity?: InputMaybe<Scalars['IntFilter']['input']>;
  intelligence?: InputMaybe<Scalars['IntFilter']['input']>;
  limit?: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<MonsterOrder>;
  size?: InputMaybe<Scalars['SizeFilter']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  strength?: InputMaybe<Scalars['IntFilter']['input']>;
  subtype?: InputMaybe<Scalars['MonsterSubtypeFilter']['input']>;
  type?: InputMaybe<Scalars['MonsterTypeFilter']['input']>;
  wisdom?: InputMaybe<Scalars['IntFilter']['input']>;
  xp?: InputMaybe<Scalars['IntFilter']['input']>;
};


export type QueryProficienciesArgs = {
  class?: InputMaybe<Scalars['StringFilter']['input']>;
  limit?: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ProficiencyOrder>;
  race?: InputMaybe<Scalars['StringFilter']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['ProficiencyTypeFilter']['input']>;
};


export type QueryProficiencyArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRaceArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRacesArgs = {
  ability_bonus?: InputMaybe<Scalars['StringFilter']['input']>;
  language?: InputMaybe<Scalars['StringFilter']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<RaceOrder>;
  size?: InputMaybe<Scalars['SizeFilter']['input']>;
  speed?: InputMaybe<Scalars['IntFilter']['input']>;
};


export type QueryRuleArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRuleSectionArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRuleSectionsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryRulesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QuerySkillArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySkillsArgs = {
  ability_score?: InputMaybe<Scalars['StringFilter']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<SkillOrder>;
};


export type QuerySpellArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySpellsArgs = {
  area_of_effect?: InputMaybe<AreaOfEffectFilter>;
  attack_type?: InputMaybe<Scalars['SpellAttackTypeFilter']['input']>;
  casting_time?: InputMaybe<Scalars['StringFilter']['input']>;
  class?: InputMaybe<Scalars['StringFilter']['input']>;
  concentration?: InputMaybe<Scalars['Boolean']['input']>;
  damage_type?: InputMaybe<Scalars['StringFilter']['input']>;
  dc_type?: InputMaybe<Scalars['StringFilter']['input']>;
  level?: InputMaybe<Scalars['IntFilter']['input']>;
  limit?: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<SpellOrder>;
  range?: InputMaybe<Scalars['StringFilter']['input']>;
  ritual?: InputMaybe<Scalars['Boolean']['input']>;
  school?: InputMaybe<Scalars['StringFilter']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subclass?: InputMaybe<Scalars['StringFilter']['input']>;
};


export type QuerySubclassArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubclassesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QuerySubraceArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubracesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryTraitArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTraitsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryWeaponPropertiesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryWeaponPropertyArgs = {
  index?: InputMaybe<Scalars['String']['input']>;
};

export type Race = ProficiencyRace & {
  __typename?: 'Race';
  ability_bonus_options?: Maybe<AbilityBonusChoice>;
  ability_bonuses: Array<AbilityBonus>;
  age: Scalars['String']['output'];
  alignment: Scalars['String']['output'];
  index: Scalars['String']['output'];
  language_desc: Scalars['String']['output'];
  language_options?: Maybe<LanguageChoice>;
  languages: Array<Language>;
  name: Scalars['String']['output'];
  size: Size;
  size_description: Scalars['String']['output'];
  speed: Scalars['Int']['output'];
  starting_proficiencies: Array<Proficiency>;
  starting_proficiency_options?: Maybe<ProficiencyChoice>;
  subraces: Array<Subrace>;
  traits: Array<Trait>;
};


export type RaceLanguagesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type RaceStarting_ProficienciesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type RaceSubracesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type RaceTraitsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type RaceOrder = {
  by: RaceOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<RaceOrder>;
};

export enum RaceOrderBy {
  Name = 'NAME',
  Size = 'SIZE',
  Speed = 'SPEED'
}

export type Range = {
  __typename?: 'Range';
  long?: Maybe<Scalars['Int']['output']>;
  normal: Scalars['Int']['output'];
};

export type RangerSpecific = {
  __typename?: 'RangerSpecific';
  favored_enemies: Scalars['Int']['output'];
  favored_terrain: Scalars['Int']['output'];
};

export type Reaction = {
  __typename?: 'Reaction';
  dc?: Maybe<ActionDc>;
  desc: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export enum RestType {
  Long = 'LONG',
  Short = 'SHORT'
}

export type RogueSpecific = {
  __typename?: 'RogueSpecific';
  sneak_attack: Dice;
};

export type Rule = {
  __typename?: 'Rule';
  desc: Scalars['String']['output'];
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  subsections: Array<RuleSection>;
};


export type RuleSubsectionsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type RuleSection = {
  __typename?: 'RuleSection';
  desc: Scalars['String']['output'];
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Senses = {
  __typename?: 'Senses';
  blindsight?: Maybe<Scalars['String']['output']>;
  darkvision?: Maybe<Scalars['String']['output']>;
  passive_perception: Scalars['Int']['output'];
  tremorsense?: Maybe<Scalars['String']['output']>;
  truesight?: Maybe<Scalars['String']['output']>;
};

export enum Size {
  Gargantuan = 'GARGANTUAN',
  Huge = 'HUGE',
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL',
  Tiny = 'TINY'
}

export type Skill = {
  __typename?: 'Skill';
  ability_score: AbilityScore;
  desc: Array<Scalars['String']['output']>;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SkillOrder = {
  by: SkillOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<SkillOrder>;
};

export enum SkillOrderBy {
  AbilityScore = 'ABILITY_SCORE',
  Name = 'NAME'
}

export type SorcererSpecific = {
  __typename?: 'SorcererSpecific';
  creating_spell_slots: Array<SpellSlotCreation>;
  metamagic_known: Scalars['Int']['output'];
  sorcery_points: Scalars['Int']['output'];
};

export type SpecialAbility = {
  __typename?: 'SpecialAbility';
  damage?: Maybe<Array<Damage>>;
  dc?: Maybe<ActionDc>;
  desc: Scalars['String']['output'];
  name: Scalars['String']['output'];
  spellcasting?: Maybe<MonsterSpellcasting>;
  usage?: Maybe<Usage>;
};

export type Speed = {
  __typename?: 'Speed';
  quantity: Scalars['Float']['output'];
  unit: Scalars['String']['output'];
};

export type Spell = {
  __typename?: 'Spell';
  area_of_effect?: Maybe<AreaOfEffect>;
  attack_type?: Maybe<SpellAttackType>;
  casting_time: Scalars['String']['output'];
  classes: Array<Class>;
  components?: Maybe<Array<Maybe<SpellComponent>>>;
  concentration: Scalars['Boolean']['output'];
  damage?: Maybe<SpellDamage>;
  dc?: Maybe<SpellDc>;
  desc: Array<Scalars['String']['output']>;
  duration: Scalars['String']['output'];
  heal_at_slot_level?: Maybe<Array<HealingAtLevel>>;
  higher_level?: Maybe<Array<Scalars['String']['output']>>;
  index: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  material?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  range: Scalars['String']['output'];
  ritual: Scalars['Boolean']['output'];
  school: MagicSchool;
  subclasses: Array<Subclass>;
};


export type SpellClassesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type SpellSubclassesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum SpellAttackType {
  Melee = 'MELEE',
  Ranged = 'RANGED'
}

export type SpellChoice = {
  __typename?: 'SpellChoice';
  choose: Scalars['Int']['output'];
  from: SpellOptionSet;
  type: Scalars['String']['output'];
};

export enum SpellComponent {
  M = 'M',
  S = 'S',
  V = 'V'
}

export type SpellDamage = {
  __typename?: 'SpellDamage';
  damage_at_character_level?: Maybe<Array<DamageAtLevel>>;
  damage_at_slot_level?: Maybe<Array<DamageAtLevel>>;
  damage_type?: Maybe<DamageType>;
};

export type SpellDc = {
  __typename?: 'SpellDc';
  desc?: Maybe<Scalars['String']['output']>;
  success: DcSuccess;
  type: AbilityScore;
};

export type SpellOption = {
  __typename?: 'SpellOption';
  item: Spell;
  option_type: Scalars['String']['output'];
};

export type SpellOptionSet = {
  __typename?: 'SpellOptionSet';
  option_set_type: Scalars['String']['output'];
  options: Array<SpellOption>;
};

export type SpellOrder = {
  by: SpellOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<SpellOrder>;
};

export enum SpellOrderBy {
  AreaOfEffectSize = 'AREA_OF_EFFECT_SIZE',
  Concentration = 'CONCENTRATION',
  Level = 'LEVEL',
  Name = 'NAME',
  Ritual = 'RITUAL',
  School = 'SCHOOL'
}

export type SpellPrerequisite = Feature | Level;

export type SpellSlotCreation = {
  __typename?: 'SpellSlotCreation';
  sorcery_point_cost: Scalars['Int']['output'];
  spell_slot_level: Scalars['Int']['output'];
};

export type SpellWithPrerequisite = {
  __typename?: 'SpellWithPrerequisite';
  prerequisites: Array<Maybe<SpellPrerequisite>>;
  spell: Spell;
};

export type SpellcastingInfo = {
  __typename?: 'SpellcastingInfo';
  desc: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type StartingEquipmentChoice = {
  __typename?: 'StartingEquipmentChoice';
  choose: Scalars['Int']['output'];
  desc: Scalars['String']['output'];
  from: StartingEquipmentOptionSet;
  type: Scalars['String']['output'];
};

export type StartingEquipmentOptionSet = EquipmentCategoryOptionSet | EquipmentOptionSet;

export type StringChoice = {
  __typename?: 'StringChoice';
  choose: Scalars['Int']['output'];
  from: StringOptionSet;
  type: Scalars['String']['output'];
};

export type StringOption = {
  __typename?: 'StringOption';
  option_type: Scalars['String']['output'];
  string: Scalars['String']['output'];
};

export type StringOptionSet = {
  __typename?: 'StringOptionSet';
  option_set_type: Scalars['String']['output'];
  options: Array<StringOption>;
};

export type Subclass = {
  __typename?: 'Subclass';
  class: Class;
  desc: Array<Scalars['String']['output']>;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  spells?: Maybe<Array<SpellWithPrerequisite>>;
  subclass_flavor: Scalars['String']['output'];
  subclass_levels: Array<Maybe<Level>>;
};


export type SubclassSpellsArgs = {
  area_of_effect?: InputMaybe<AreaOfEffectFilter>;
  attack_type?: InputMaybe<Scalars['SpellAttackTypeFilter']['input']>;
  casting_time?: InputMaybe<Scalars['StringFilter']['input']>;
  class?: InputMaybe<Scalars['StringFilter']['input']>;
  concentration?: InputMaybe<Scalars['Boolean']['input']>;
  damage_type?: InputMaybe<Scalars['StringFilter']['input']>;
  dc_type?: InputMaybe<Scalars['StringFilter']['input']>;
  level?: InputMaybe<Scalars['IntFilter']['input']>;
  limit?: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<SpellOrder>;
  range?: InputMaybe<Scalars['StringFilter']['input']>;
  ritual?: InputMaybe<Scalars['Boolean']['input']>;
  school?: InputMaybe<Scalars['StringFilter']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SubclassSpecific = DevotionSpecific | LoreSpecific;

export type Subrace = ProficiencyRace & {
  __typename?: 'Subrace';
  ability_bonuses: Array<AbilityBonus>;
  desc: Scalars['String']['output'];
  index: Scalars['String']['output'];
  language_options?: Maybe<LanguageChoice>;
  name: Scalars['String']['output'];
  race: Race;
  racial_traits: Array<Trait>;
  starting_proficiencies: Array<Proficiency>;
};


export type SubraceRacial_TraitsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type SubraceStarting_ProficienciesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Tool = IEquipment & IEquipmentBase & {
  __typename?: 'Tool';
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']['output']>>;
  equipment_category: EquipmentCategory;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tool_category: EquipmentCategory;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type Trait = {
  __typename?: 'Trait';
  desc: Array<Scalars['String']['output']>;
  index: Scalars['String']['output'];
  language_options?: Maybe<LanguageChoice>;
  name: Scalars['String']['output'];
  parent?: Maybe<Trait>;
  proficiencies: Array<Proficiency>;
  proficiency_choices?: Maybe<ProficiencyChoice>;
  races: Array<Maybe<Race>>;
  subraces: Array<Subrace>;
  trait_specific?: Maybe<TraitSpecific>;
};


export type TraitProficienciesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type TraitRacesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type TraitSubracesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TraitChoice = {
  __typename?: 'TraitChoice';
  choose: Scalars['Int']['output'];
  from: TraitOptionSet;
  type: Scalars['String']['output'];
};

export type TraitOption = {
  __typename?: 'TraitOption';
  item: Trait;
  option_type: Scalars['String']['output'];
};

export type TraitOptionSet = {
  __typename?: 'TraitOptionSet';
  option_set_type: Scalars['String']['output'];
  options: Array<TraitOption>;
};

export type TraitSpecific = {
  __typename?: 'TraitSpecific';
  breath_weapon?: Maybe<BreathWeaponTrait>;
  damage_type?: Maybe<DamageType>;
  spell_options?: Maybe<SpellChoice>;
  subtrait_options?: Maybe<TraitChoice>;
};

export type Usage = {
  __typename?: 'Usage';
  dice?: Maybe<Scalars['String']['output']>;
  min_value?: Maybe<Scalars['Int']['output']>;
  rest_types?: Maybe<Array<RestType>>;
  times?: Maybe<Scalars['Int']['output']>;
  type: UsageType;
};

export enum UsageType {
  AtWill = 'AT_WILL',
  PerDay = 'PER_DAY',
  PerRest = 'PER_REST',
  RechargeAfterRest = 'RECHARGE_AFTER_REST',
  RechargeOnRoll = 'RECHARGE_ON_ROLL'
}

export type Vehicle = IEquipment & IEquipmentBase & {
  __typename?: 'Vehicle';
  capacity?: Maybe<Scalars['String']['output']>;
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']['output']>>;
  equipment_category: EquipmentCategory;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  speed?: Maybe<Speed>;
  vehicle_category: EquipmentCategory;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type WarlockSpecific = {
  __typename?: 'WarlockSpecific';
  invocations_known: Scalars['Int']['output'];
  mystic_arcanum_level_6: Scalars['Int']['output'];
  mystic_arcanum_level_7: Scalars['Int']['output'];
  mystic_arcanum_level_8: Scalars['Int']['output'];
  mystic_arcanum_level_9: Scalars['Int']['output'];
};

export type Weapon = IEquipment & IEquipmentBase & {
  __typename?: 'Weapon';
  category_range: EquipmentCategory;
  cost: Cost;
  damage?: Maybe<Damage>;
  desc?: Maybe<Array<Scalars['String']['output']>>;
  equipment_category: EquipmentCategory;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  properties: Array<WeaponProperty>;
  range: Range;
  special?: Maybe<Array<Scalars['String']['output']>>;
  throw_range?: Maybe<Range>;
  two_handed_damage?: Maybe<Damage>;
  weapon_category: EquipmentCategory;
  weapon_range: WeaponRange;
  weight?: Maybe<Scalars['Float']['output']>;
};


export type WeaponPropertiesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type WeaponProperty = {
  __typename?: 'WeaponProperty';
  desc: Array<Scalars['String']['output']>;
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export enum WeaponRange {
  Melee = 'MELEE',
  Ranged = 'RANGED'
}

export type WizardSpecific = {
  __typename?: 'WizardSpecific';
  arcane_recovery_levels: Scalars['Int']['output'];
};

export type WeaponsQueryVariables = Exact<{
  equipmentCategory?: InputMaybe<Scalars['StringFilter']['input']>;
}>;


export type WeaponsQuery = { __typename?: 'Query', equipments?: Array<{ __typename?: 'Ammunition' } | { __typename?: 'Armor' } | { __typename?: 'Gear' } | { __typename?: 'Pack' } | { __typename?: 'Tool' } | { __typename?: 'Vehicle' } | { __typename?: 'Weapon', index: string, name: string, desc?: Array<string> | null, weight?: number | null, weapon_range: WeaponRange, special?: Array<string> | null, cost: { __typename?: 'Cost', quantity: number, unit: Currency }, equipment_category: { __typename?: 'EquipmentCategory', index: string, name: string }, damage?: { __typename?: 'Damage', damage_dice: string, damage_type: { __typename?: 'DamageType', index: string, name: string, desc: Array<string> } } | null, range: { __typename?: 'Range', normal: number, long?: number | null }, throw_range?: { __typename?: 'Range', normal: number, long?: number | null } | null, weapon_category: { __typename?: 'EquipmentCategory', index: string, name: string }, category_range: { __typename?: 'EquipmentCategory', index: string, name: string }, two_handed_damage?: { __typename?: 'Damage', damage_dice: string } | null, properties: Array<{ __typename?: 'WeaponProperty', index: string, name: string, desc: Array<string> }> }> | null };


export const WeaponsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Weapons"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"equipmentCategory"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StringFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"equipments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"equipment_category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"equipmentCategory"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Weapon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"desc"}},{"kind":"Field","name":{"kind":"Name","value":"equipment_category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"damage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"damage_dice"}},{"kind":"Field","name":{"kind":"Name","value":"damage_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"desc"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normal"}},{"kind":"Field","name":{"kind":"Name","value":"long"}}]}},{"kind":"Field","name":{"kind":"Name","value":"throw_range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normal"}},{"kind":"Field","name":{"kind":"Name","value":"long"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weapon_category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weapon_range"}},{"kind":"Field","name":{"kind":"Name","value":"category_range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"two_handed_damage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"damage_dice"}}]}},{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"desc"}}]}},{"kind":"Field","name":{"kind":"Name","value":"special"}}]}}]}}]}}]} as unknown as DocumentNode<WeaponsQuery, WeaponsQueryVariables>;