import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";
import { LucideIcon } from "lucide-react";

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
        "group border-border border m-2 flex flex-col items-center justify-center gap-y-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer w-24 h-24",
        {
          "border-green-500": isOver,
          "p-4": !itemSlot.children,
        },
        itemSlot.className,
      )}
      ref={setNodeRef}
    >
      {!itemSlot.children && <itemSlot.Icon />}
      {!itemSlot.children && <p className="text-xs">{itemSlot.name}</p>}
      {itemSlot.children}
    </div>
  );
}
