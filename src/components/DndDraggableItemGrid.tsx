import { EquipmentCard } from "@/components/EquipmentCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EquipmentType } from "@/typings";
import React, { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface DndEquipmentItemGridProps extends React.HTMLAttributes<HTMLDivElement> {
  dndEquipmentError?: string;
  dndEquipments: EquipmentType[];
  loadingDndItems: boolean;
  className?: string;
}

export const DndDraggableItemGrid = forwardRef<HTMLDivElement, DndEquipmentItemGridProps>(
  ({ className, dndEquipmentError, dndEquipments }: DndEquipmentItemGridProps, ref) => {
    return (
      <ScrollArea ref={ref} className="px-4">
        <section id="item-grid" className={cn("grid grid-cols-2 gap-4", className)}>
          {dndEquipmentError && <p className="text-red-500 text-center">{dndEquipmentError}</p>}

          {dndEquipments.map((equipment, index) => (
            <EquipmentCard key={index} equipment={equipment} />
          ))}
        </section>
      </ScrollArea>
    );
  },
);
