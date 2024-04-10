import { EquipmentChip } from "@/components/EquipmentCard";
import { ItemSlot } from "@/components/ItemSlot";
import { itemSlots } from "@/data";
import { EquipmentType } from "@/typings";
import { Cross, Shield } from "lucide-react";
import { forwardRef } from "react";

export type CharacterEditorProps = {
  imageUrl: string;
  equipmentSlots: Record<string, EquipmentType | null>;
};
export const CharacterDroppable = forwardRef<HTMLDivElement, CharacterEditorProps>(({ imageUrl, equipmentSlots }: CharacterEditorProps, ref) => {
  return (
    <section id="character-editor" ref={ref} className="grid *:row-span-full isolate justify-center max-w-fit mx-auto border-border border mb-8 rounded-lg">
      <div className="relative">
        <img
          className="dark:border-white border-2  border-black transition-all w-[384px] h-full  object-cover -z-10 bg-[url(https://i.pinimg.com/originals/79/c3/de/79c3dec7541874812a123e3d7a9fcc24.jpg)] bg-no-repeat bg-cover bg-center bg-black/40 bg-blend-darken rounded-tl-lg rounded-bl-lg"
          src={imageUrl}
          alt="Anime Girl Full Body Picture"
        />
        <Shield className="dark:fill-black fill-white h-24 w-24 left-0 bottom-1 absolute transition-all" strokeWidth={0.5}>
          <text
            fontSize="0.25rem"
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className=" fill-white text-black dark:fill-black dark:text-white"
          >
            20AC
          </text>
        </Shield>

        <Cross className="dark:fill-black fill-white h-24 w-24 right-0 bottom-1 absolute transition-all" strokeWidth={0.5}>
          <text
            fontSize="0.25rem"
            x="50%"
            y="52%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-white dark:fill-black text-black dark:text-white"
          >
            10HP
          </text>
        </Cross>
      </div>
      <div className="grid grid-cols-2">
        {itemSlots.map((itemSlot) => (
          <ItemSlot key={itemSlot.id} {...itemSlot}>
            {equipmentSlots[itemSlot.id] && <EquipmentChip equipment={equipmentSlots[itemSlot.id]!} />}
          </ItemSlot>
        ))}
      </div>
    </section>
  );
});
