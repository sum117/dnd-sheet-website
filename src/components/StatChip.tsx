import { LucideIcon } from "lucide-react";

export type StatChipProps = {
  type: string;
  value: string | number | undefined | null;
  Icon: LucideIcon;
};
export function StatChip({ type, value, Icon }: StatChipProps) {
  return (
    <div className="flex flex-col bg-secondary px-2 pb-0.5 pt-1">
      <span className="text-end uppercase text-foreground/60">{type}</span>
      <div className="flex items-center gap-x-1 self-end">
        <span className="uppercase">{value}</span>
        <Icon className="h-5 w-5" />
      </div>
    </div>
  );
}
