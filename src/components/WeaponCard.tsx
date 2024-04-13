import { Weapon } from "@/__generated__/graphql";
import { StatChip } from "@/components/StatChip";
import { damageTypeIconMap } from "@/data";
import { cn } from "@/lib/utils";
import { Coins, Sword, Target, Weight } from "lucide-react";

export type EquipmentCardProps = {
  weapon: Weapon;
  className?: string;
};

export function WeaponCard({ weapon, className }: EquipmentCardProps) {
  const damageTypeId = weapon.damage?.damage_type.index;
  const DamageTypeIcon = damageTypeIconMap[damageTypeId ?? "slashing"];
  const damageType = weapon.damage?.damage_type.name;
  return (
    <article className={cn("flex cursor-pointer justify-between bg-background hover:outline hover:outline-white", className)}>
      <header className="relative flex-1 py-2.5 pl-3">
        <Sword className="absolute -right-2 top-2 h-24 w-24 -rotate-90 text-white/5" />
        <div className="flex items-center gap-x-1.5">
          <span className="text-xl tracking-wider text-foreground/40">{damageType ?? "Unspecified"}</span>
          {damageTypeIconMap && <DamageTypeIcon />}
        </div>
        <h3 className="max-w-[4ch] text-2xl">{weapon.name}</h3>
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
