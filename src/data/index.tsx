import ChestArmor from "@/components/svg/ChestArmor";
import WarriorHelmet from "@/components/svg/WarriorHelmet";

export const races = [
  { name: "Dragonborn", icon: "/dragon-head.svg", subraces: [] },
  {
    name: "Dwarf",
    icon: "/dwarf-helmet.svg",
    subraces: [
      { name: "Hill Dwarf", icon: "" },
      { name: "Mountain Dwarf", icon: "" },
      { name: "Duergar", icon: "" },
    ],
  },
  {
    name: "Elf",
    icon: "/elf-ear.svg",
    subraces: [
      { name: "High Elf", icon: "" },
      { name: "Wood Elf", icon: "" },
      { name: "Drow", icon: "" },
    ],
  },
  {
    name: "Gnome",
    icon: "/bad-gnome.svg",
    subraces: [
      { name: "Forest Gnome", icon: "" },
      { name: "Rock Gnome", icon: "" },
      { name: "Deep Gnome", icon: "" },
    ],
  },
  { name: "Half-Elf", icon: "/half-heart.svg", subraces: [] },
  { name: "Half-Orc", icon: "/orc-head.svg", subraces: [] },
  {
    name: "Halfling",
    icon: "/leather-boot.svg",
    subraces: [
      { name: "Lightfoot", icon: "" },
      { name: "Stout", icon: "" },
    ],
  },
  { name: "Human", icon: "/human-ear.svg", subraces: [] },
  {
    name: "Tiefling",
    icon: "/horned-skull.svg",
    subraces: [
      { name: "Asmodeus Tiefling", icon: "" },
      { name: "Baalzebul Tiefling", icon: "" },
      { name: "Dispater Tiefling", icon: "" },
      { name: "Fierna Tiefling", icon: "" },
      { name: "Glasya Tiefling", icon: "" },
      { name: "Levistus Tiefling", icon: "" },
      { name: "Mammon Tiefling", icon: "" },
      { name: "Mephistopheles Tiefling", icon: "" },
      { name: "Zariel Tiefling", icon: "" },
    ],
  },
];

export const classes = [
  {
    name: "Barbarian",
    icon: "/barbarian.svg",
    subClasses: [
      { name: "Path of the Berserker", icon: "" },
      { name: "Path of the Totem Warrior", icon: "" },
    ],
  },
  {
    name: "Bard",
    icon: "/bard.svg",
    subClasses: [
      { name: "College of Lore", icon: "" },
      { name: "College of Valor", icon: "" },
    ],
  },
  {
    name: "Cleric",
    icon: "/cleric.svg",
    subClasses: [
      { name: "Knowledge Domain", icon: "" },
      { name: "Life Domain", icon: "" },
      { name: "Light Domain", icon: "" },
      { name: "Nature Domain", icon: "" },
      { name: "Tempest Domain", icon: "" },
      { name: "Trickery Domain", icon: "" },
      { name: "War Domain", icon: "" },
    ],
  },
  {
    name: "Druid",
    icon: "/druid.svg",
    subClasses: [
      { name: "Circle of the Land", icon: "" },
      { name: "Circle of the Moon", icon: "" },
    ],
  },
  {
    name: "Fighter",
    icon: "/fighter.svg",
    subClasses: [
      { name: "Champion", icon: "" },
      { name: "Battle Master", icon: "" },
      { name: "Eldritch Knight", icon: "" },
    ],
  },
  {
    name: "Monk",
    icon: "/monk.svg",
    subClasses: [
      { name: "Way of the Open Hand", icon: "" },
      { name: "Way of Shadow", icon: "" },
    ],
  },
  {
    name: "Paladin",
    icon: "/paladin.svg",
    subClasses: [
      { name: "Oath of Devotion", icon: "" },
      { name: "Oath of the Ancients", icon: "" },
      { name: "Oath of Vengeance", icon: "" },
    ],
  },
  {
    name: "Ranger",
    icon: "/ranger.svg",
    subClasses: [
      { name: "Hunter", icon: "" },
      { name: "Beast Master", icon: "" },
    ],
  },
  {
    name: "Rogue",
    icon: "/rogue.svg",
    subClasses: [
      { name: "Thief", icon: "" },
      { name: "Assassin", icon: "" },
      { name: "Arcane Trickster", icon: "" },
    ],
  },
  {
    name: "Sorcerer",
    icon: "/sorcerer.svg",
    subClasses: [
      { name: "Draconic Bloodline", icon: "" },
      { name: "Wild Magic", icon: "" },
    ],
  },
  {
    name: "Warlock",
    icon: "/warlock.svg",
    subClasses: [
      { name: "The Archfey", icon: "" },
      { name: "The Fiend", icon: "" },
      { name: "The Great Old One", icon: "" },
    ],
  },
  {
    name: "Wizard",
    icon: "/wizard.svg",
    subClasses: [
      { name: "School of Abjuration", icon: "" },
      { name: "School of Conjuration", icon: "" },
      { name: "School of Divination", icon: "" },
      { name: "School of Enchantment", icon: "" },
      { name: "School of Evocation", icon: "" },
      { name: "School of Illusion", icon: "" },
      { name: "School of Necromancy", icon: "" },
    ],
  },
];

export const itemSlots = [
  { id: "head", name: "Head", description: "A head slot item", Icon: WarriorHelmet, accepts: ["armor"] },
  { id: "chest", name: "Chest", description: "A chest slot item", Icon: ChestArmor, accepts: ["armor"] },
  { id: "ringOne", name: "Ring #1", description: "A ring slot item", Icon: ChestArmor, accepts: ["armor", "adventuring-gear"] },
  { id: "ringTwo", name: "Ring #2", description: "A ring slot item", Icon: ChestArmor, accepts: ["armor", "adventuring-gear"] },
  { id: "feet", name: "Feet", description: "A feet slot item", Icon: ChestArmor, accepts: ["armor"] },
  { id: "amulet", name: "Amulet", description: "An amulet slot item", Icon: ChestArmor, accepts: ["armor", "adventuring-gear"] },
  { id: "hands", name: "Hands", description: "A hands slot item", Icon: ChestArmor, accepts: ["armor"] },
  { id: "back", name: "Back", description: "A back slot item", Icon: ChestArmor, accepts: ["armor"] },
  { id: "leftArm", name: "Left Arm", description: "A left hand slot item", Icon: ChestArmor, accepts: ["weapon"] },
  { id: "rightArm", name: "Right Arm", description: "A right hand slot item", Icon: ChestArmor, accepts: ["weapon"] },
];
export type ItemSlot = (typeof itemSlots)[number];
