import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn, toTitleCase } from "@/lib/utils";
import { EquipmentType, EquipmentWeapon } from "@/typings";
import { useDraggable } from "@dnd-kit/core";
import { Anvil, Backpack, Coins, Dices, Droplet, Hammer, LucideIcon, Shield, Sword, Target, View } from "lucide-react";

type EquipmentCardProps = React.ComponentProps<typeof Card> & {
  equipment: EquipmentType;
};
const iconMap: Record<string, LucideIcon> = {
  weapon: Sword,
  armor: Shield,
  "adventuring-gear": Backpack,
  slashing: Droplet,
  piercing: Target,
  bludgeoning: Hammer,
  default: View,
};

export function EquipmentCard({ className, equipment, ...props }: EquipmentCardProps) {
  const getBadges = () => {
    if (equipment.equipment_category.index === "weapon") {
      const weapon = equipment as EquipmentWeapon;
      return [
        {
          id: `${equipment.index}-damage`,
          Icon: Dices,
          label: "Damage",
          value: weapon.damage?.damage_dice,
          variant: "destructive" as const,
        },
        {
          id: `${equipment.index}-cost`,
          Icon: Coins,
          label: "Cost",
          variant: "gold" as const,
          value: `${equipment.cost.quantity} ${equipment.cost.unit}`,
        },
        {
          id: `${equipment.index}-range`,
          Icon: View,
          label: "Range",
          value: weapon.range.long ? [weapon.range.normal, weapon.range.long].join("/") : weapon.range.normal,
          variant: "default" as const,
        },
        {
          id: `${equipment.index}-weight`,
          Icon: Anvil,
          label: "Weight",
          value: equipment.weight,
          variant: "default" as const,
        },
        {
          id: `${equipment.index}-type`,
          Icon: weapon.damage?.damage_type?.index ? iconMap[weapon.damage.damage_type.index] : null,
          label: "Type",
          value: weapon.damage?.damage_type?.name,
          variant: "default" as const,
        },
      ];
    }
    return [];
  };

  const Icon = iconMap[equipment.equipment_category.index] ?? iconMap.default;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: equipment.index,
    data: equipment,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  const badges = getBadges();

  return (
    <div
      className={cn("border-border p-2 rounded-lg border bg-primary-foreground h-48 flex flex-col cursor-move", className)}
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      {...props}
    >
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">{parseEquipmentName(equipment.name)}</p>
        <Icon className="w-8 h-8" />
      </div>
      <div className="grid grid-cols-2 gap-y-2 gap-x-2 my-auto">
        {badges
          .filter((badge) => Boolean(badge.value))
          .map((badge) => (
            <Badge key={badge.id} variant={badge.variant} className="flex items-center gap-x-2">
              {badge.Icon && <badge.Icon className="w-4 h-4" />}
              <span className="font-semibold">{badge.value}</span>
            </Badge>
          ))}
      </div>
    </div>
  );
}
export function EquipmentChip({ className, equipment, ...props }: EquipmentCardProps) {
  const Icon = iconMap[equipment.equipment_category.index] ?? iconMap.default;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: equipment.index,
    data: equipment,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={cn(
        "flex flex-col gap-y-2 bg-primary-foreground items-center  justify-center text-center rounded-lg hover:bg-primary hover:text-primary-foreground w-24 h-24",
        className,
      )}
      style={style}
      {...props}
    >
      <Icon />
      {equipment.name}
    </div>
  );
}

export function parseEquipmentName(name: string) {
  const splitWords = name.split(" ");
  for (let i = 0; i < splitWords.length; i++) {
    const hasNumber = /\d/.test(splitWords[i]);
    if (!hasNumber) {
      splitWords[i] = toTitleCase(splitWords[i].replace(",", " |"));
    }
  }
  return splitWords.join(" ");
}
