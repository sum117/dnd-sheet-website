import { Dot } from "@/components/Dot";
import {
  Anvil,
  Backpack,
  Coins,
  Dices,
  Droplet,
  Hammer,
  LucideIcon,
  Shield,
  Sword,
  Target,
  View,
} from "lucide-react";
import { Fragment } from "react";
import { cn } from "../lib/utils";
import { EquipmentType, EquipmentWeapon } from "../typings";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type EquipmentCardProps = React.ComponentProps<typeof Card> & {
  equipment: EquipmentType;
};
export function EquipmentCard({
  className,
  equipment,
  ...props
}: EquipmentCardProps) {
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
          value: weapon.range.long
            ? [weapon.range.normal, weapon.range.long].join("/")
            : weapon.range.normal,
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
          Icon: weapon.damage?.damage_type?.index
            ? iconMap[weapon.damage.damage_type.index]
            : null,
          label: "Type",
          value: weapon.damage?.damage_type?.name,
          variant: "default" as const,
        },
      ];
    }
    return [];
  };

  const Icon = iconMap[equipment.equipment_category.index];
  const badges = getBadges();

  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader>
        <CardTitle className="mb-4 flex gap-x-2 items-center">
          <Icon />
          {equipment.name}
          <Dot className="bg-gray-400" />
          <p className="text-sm text-muted-foreground uppercase">
            {equipment.equipment_category.name}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="inline-grid items-start space-x-2 grid-flow-col">
          {equipment.desc.length ? (
            <Fragment>
              <Dot />
              <p>{equipment.desc.at(0)}</p>
            </Fragment>
          ) : (
            equipment.equipment_category.index === "weapon" && (
              <div className="flex gap-x-1 gap-y-2 flex-wrap">
                {badges.map(({ id, Icon, value, variant }) => (
                  <Badge key={id} variant={variant}>
                    {Icon && <Icon className="w-4 h-4 mr-1" />}
                    <span className="text-xs">{value}</span>
                  </Badge>
                ))}
              </div>
            )
          )}
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
