import { cn } from "../lib/utils";

export function Dot({ className }: { className?: string }) {
  return <span className={cn("flex h-2 w-2  rounded-full", className)} />;
}
