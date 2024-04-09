import { useDnDEquipments } from "../hooks/useDNDEquipments";
import { cn } from "../lib/utils";
import { EquipmentCard } from "./EquipmentCard";
import { Spinner } from "./ui/spinner";

export interface DndEquipmentItemGridProps
  extends React.HTMLAttributes<HTMLDivElement> {
  sortBy?: "weapon" | "armor" | "adventuring-gear";
  removeToolsAndMounts?: boolean;
  removeEmptyDescriptionAdveturingGear?: boolean;
  className?: string;
}
export function DndEquipmentItemGrid({
  className,
  removeEmptyDescriptionAdveturingGear,
  removeToolsAndMounts,
  sortBy,
}: DndEquipmentItemGridProps) {
  const {
    equipments: dndEquipments,
    error: dndEquipmentError,
    loading: loadingDndItems,
  } = useDnDEquipments({
    sortBy: sortBy ?? "weapon",
    removeToolsAndMounts: removeToolsAndMounts ?? false,
    removeEmptyDescriptionAdveturingGear:
      removeEmptyDescriptionAdveturingGear ?? false,
  });
  return (
    <section className={cn("grid sm:grid-cols-4 gap-8 p-2", className)}>
      {dndEquipmentError && (
        <p className="text-red-500 text-center">{dndEquipmentError}</p>
      )}
      {loadingDndItems ? (
        <div className="col-span-full">
          <Spinner size="large" show />
        </div>
      ) : (
        dndEquipments.map((equipment) => (
          <EquipmentCard key={equipment.index} equipment={equipment} />
        ))
      )}
    </section>
  );
}
