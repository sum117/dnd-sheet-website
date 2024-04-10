import { Dot } from "@/components/Dot";
import { useDraggable } from "@dnd-kit/core";
import { Anvil, Backpack, Coins, Dices, Droplet, Hammer, LucideIcon, Shield, Sword, Target, View } from "lucide-react";
import { Fragment } from "react";
import { cn } from "../lib/utils";
import { EquipmentType, EquipmentWeapon } from "../typings";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type EquipmentCardProps = React.ComponentProps<typeof Card> & {
  equipment: EquipmentType;
};
export function EquipmentCard({ className, equipment, ...props }: EquipmentCardProps) {
  const iconMap: Record<string, LucideIcon> = {
    weapon: Sword,
    armor: Shield,
    "adventuring-gear": Backpack,
    slashing: Droplet,
    piercing: Target,
    bludgeoning: Hammer,
    default: View,
  };

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
          variant: "secondary" as const,
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

  const badges = getBadges();

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
    <Card className={cn("", className)} ref={setNodeRef} style={style} {...listeners} {...attributes} {...props}>
      <CardHeader>
        <CardTitle className="mb-4 flex gap-x-2 items-center justify-between">
          <Icon />
          {equipment.name}
          <p className="text-sm text-muted-foreground uppercase">{equipment.equipment_category.name}</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid items-start space-x-2 grid-flow-col">
          {equipment.desc.length ? (
            <Fragment>
              <Dot />
              <p>{equipment.desc.at(0)}</p>
            </Fragment>
          ) : (
            equipment.equipment_category.index === "weapon" && (
              <div className="grid grid-cols-[auto_auto] gap-y-2 justify-between">
                {badges.map(({ id, Icon, value, variant }) => (
                  <Badge key={id} variant={variant} className="flex">
                    {Icon && <Icon className="w-4 h-4 mr-1" />}
                    <span className="text-xs">{value}</span>
                  </Badge>
                ))}
              </div>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}
