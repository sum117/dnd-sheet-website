import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

export type ItemSlotProps = {
  name: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
};
export const ItemSlot = (itemSlot: ItemSlotProps) => (
  <div
    className={cn(
      "group border-border border p-4 m-2 flex flex-col items-center justify-center gap-y-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer",
      itemSlot.className
    )}
  >
    <itemSlot.Icon className="w-8 h-8" />
    <p className="text-sm">{itemSlot.name}</p>
  </div>
);
