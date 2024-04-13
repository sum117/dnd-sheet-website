import ChestArmorIcon from "@/components/svg/ChestArmorIcon";
import WarriorHelmetIcon from "@/components/svg/WarriorHelmetIcon";
import { LucideIcon, Sword, Target, Weight } from "lucide-react";

export const itemSlots = [
  { id: "head", name: "Head", description: "A head slot item", Icon: WarriorHelmetIcon, accepts: ["armor"] },
  { id: "chest", name: "Chest", description: "A chest slot item", Icon: ChestArmorIcon, accepts: ["armor"] },
  { id: "ringOne", name: "Ring #1", description: "A ring slot item", Icon: ChestArmorIcon, accepts: ["armor", "adventuring-gear"] },
  { id: "ringTwo", name: "Ring #2", description: "A ring slot item", Icon: ChestArmorIcon, accepts: ["armor", "adventuring-gear"] },
  { id: "feet", name: "Feet", description: "A feet slot item", Icon: ChestArmorIcon, accepts: ["armor"] },
  { id: "amulet", name: "Amulet", description: "An amulet slot item", Icon: ChestArmorIcon, accepts: ["armor", "adventuring-gear"] },
  { id: "hands", name: "Hands", description: "A hands slot item", Icon: ChestArmorIcon, accepts: ["armor"] },
  { id: "back", name: "Back", description: "A back slot item", Icon: ChestArmorIcon, accepts: ["armor"] },
  { id: "leftArm", name: "Left Arm", description: "A left hand slot item", Icon: ChestArmorIcon, accepts: ["weapon"] },
  { id: "rightArm", name: "Right Arm", description: "A right hand slot item", Icon: ChestArmorIcon, accepts: ["weapon"] },
];
export type ItemSlot = (typeof itemSlots)[number];

export const damageTypeIconMap: Record<string, LucideIcon> = {
  slashing: Sword,
  piercing: Target,
  bludgeoning: Weight,
};
