import { useDroppable } from "@dnd-kit/core";
import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

export type ItemSlotProps = {
  id: string;
  name: string;
  description: string;
  Icon: LucideIcon;
  children?: React.ReactNode;
  className?: string;
};
export function ItemSlot(itemSlot: ItemSlotProps) {
  const { isOver, setNodeRef } = useDroppable({ id: itemSlot.id });

  return (
    <div
      className={cn(
        "group border-border border p-4 m-2 flex flex-col items-center justify-center gap-y-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer",
        {
          "border-green-500": isOver,
        },
        itemSlot.className
      )}
      ref={setNodeRef}
    >
      <itemSlot.Icon className="w-8 h-8" />
      <p className="text-sm">{itemSlot.name}</p>
      {itemSlot.children}
    </div>
  );
}
