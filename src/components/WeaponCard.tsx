import { Weapon } from "@/__generated__/graphql";
import { StatChip } from "@/components/StatChip";
import { damageTypeIconMap } from "@/data";
import { Coins, Sword, Target, Weight } from "lucide-react";

export type EquipmentCardProps = {
  weapon: Weapon;
};

export function WeaponCard({ weapon }: EquipmentCardProps) {
  const DamageTypeIcon = damageTypeIconMap[weapon.damage?.damage_type.index!];
  const damageType = weapon.damage?.damage_type.name;
  return (
    <article className="flex cursor-pointer justify-between bg-background hover:outline hover:outline-white">
      <header className="relative flex-1 py-2.5 pl-3">
        <Sword className="absolute -right-2 top-2 h-24 w-24 -rotate-90 text-white/5" />
        <div className="flex items-center gap-x-1.5">
          {damageType && <span className="text-xl tracking-wider text-foreground/40">{damageType}</span>}
          <DamageTypeIcon />
        </div>
        <h3 className="max-w-[4ch] text-3xl">{weapon.name}</h3>
      </header>
      <div className="grid grid-cols-2 gap-1">
        <StatChip Icon={Sword} type="Dmg" value={weapon.damage?.damage_dice} />
        <StatChip Icon={Coins} type="Cost" value={weapon.cost.quantity} />
        <StatChip Icon={Target} type="Range" value={weapon.range.normal} />
        <StatChip Icon={Weight} type="Weight" value={weapon.weight} />
      </div>
    </article>
  );
}
