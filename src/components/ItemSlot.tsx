import type { ItemSlot } from "@/data";

export default function ItemSlot({ id, Icon, name }: ItemSlot) {
  return (
    <div key={id} className="flex max-w-[21.5rem] justify-between bg-primary">
      <h3 className="p-2 text-xl text-foreground">{name}</h3>
      <span className="text-foreground/50 self-center text-xl">Empty</span>
      <Icon className="fill-foreground/[0.08] h-24 w-24" />
    </div>
  );
}
