import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Backpack, Footprints, Gem, Hand, HardHat, Moon, Shield, Shirt, Sun, Sword } from "lucide-react";
import { Fragment, useState } from "react";
import "./App.css";
import { DndEquipmentItemGrid } from "./components/DndEquipmentItemGrid";
import { EquipmentCard } from "./components/EquipmentCard";
import { ItemSlot } from "./components/ItemSlot";
import { Button } from "./components/ui/button";
import { useDnDEquipments } from "./hooks/useDNDEquipments";
import { useDarkTheme } from "./hooks/useDarkTheme";
import { EquipmentType } from "./typings";

function App() {
  const { theme, toggleTheme } = useDarkTheme({ initialTheme: "dark" });
  const {
    equipments: dndEquipments,
    error: dndEquipmentError,
    loading: loadingDndItems,
    setEquipments: setDndEquipments,
  } = useDnDEquipments({
    sortBy: "weapon",
    removeToolsAndMounts: true,
    removeEmptyDescriptionAdveturingGear: true,
  });
  const itemSlots = [
    { id: "head", name: "Head", description: "A head slot item", Icon: HardHat, accepts: ["armor"] },
    { id: "ringOne", name: "Ring #1", description: "A ring slot item", Icon: Gem, accepts: ["armor", "adventuring-gear"] },
    { id: "chest", name: "Chest", description: "A chest slot item", Icon: Shirt, accepts: ["armor"] },
    { id: "ringTwo", name: "Ring #2", description: "A ring slot item", Icon: Gem, accepts: ["armor", "adventuring-gear"] },
    { id: "feet", name: "Feet", description: "A feet slot item", Icon: Footprints, accepts: ["armor"] },
    { id: "amulet", name: "Amulet", description: "An amulet slot item", Icon: Gem, accepts: ["armor", "adventuring-gear"] },
    { id: "hands", name: "Hands", description: "A hands slot item", Icon: Hand, accepts: ["armor"] },
    { id: "back", name: "Back", description: "A back slot item", Icon: Backpack, accepts: ["armor"] },
    { id: "leftArm", name: "Left Arm", description: "A left hand slot item", Icon: Sword, accepts: ["weapon"] },
    { id: "rightArm", name: "Right Arm", description: "A right hand slot item", Icon: Shield, accepts: ["weapon"] },
  ];

  const [equipmentSlots, setEquipmentSlots] = useState<Record<string, EquipmentType | null>>({
    head: null,
    ringOne: null,
    chest: null,
    ringTwo: null,
    feet: null,
    amulet: null,
    hands: null,
    leftArm: null,
    rightArm: null,
    back: null,
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const equipmentBeingDragged = event.active.data.current as EquipmentType;
    const equipmentEntries = Object.entries(equipmentSlots);
    const [oldSlot, oldEquipment] = equipmentEntries.find(([, equipment]) => equipment?.index === equipmentBeingDragged.index) ?? [];
    if (!event.over && oldSlot && oldEquipment) {
      setEquipmentSlots((prev) => ({ ...prev, [oldSlot]: null }));
      setDndEquipments((prev) => [...prev, oldEquipment]);
    } else if (event.over && oldSlot && oldEquipment) {
      const newSlot = event.over.id;
      setEquipmentSlots((prev) => ({ ...prev, [oldSlot]: null, [newSlot]: oldEquipment }));
    } else if (event.over && !oldSlot) {
      const newSlot = event.over.id;
      setEquipmentSlots((prev) => ({ ...prev, [newSlot]: equipmentBeingDragged }));
      setDndEquipments((prev) => prev.filter((equipment) => equipment.index !== equipmentBeingDragged.index));
    } else if (!event.over) {
      setDndEquipments((prev) => [...prev, equipmentBeingDragged]);
    } else {
      console.error("Unhandled drag end event", event);
    }
  };

  return (
    <Fragment>
      <header className="flex items-center p-4">
        <img src="/app-logo.svg" className="w-16 h-16 mr-2 invert dark:invert-0 transition-all" alt="App Logo" />
        <h1 className="text-2xl font-bold">D&D Equipment Manager</h1>
        <Button size="icon" onClick={toggleTheme} className="ml-auto">
          {theme === "light" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
        </Button>
      </header>
      <main>
        <DndContext onDragEnd={handleDragEnd}>
          <section className="grid *:row-span-full isolate justify-center max-w-fit mx-auto border-border border mb-8 rounded-lg">
            <img
              className="w-[384px] h-full object-scale-down -z-10 bg-[url(https://i.pinimg.com/originals/79/c3/de/79c3dec7541874812a123e3d7a9fcc24.jpg)] bg-no-repeat bg-cover bg-center bg-black/40 bg-blend-darken rounded-tl-lg rounded-bl-lg"
              src="https://pngimg.com/d/anime_girl_PNG45.png"
              alt="Anime Girl Full Body Picture"
            />
            <div className="grid grid-cols-2">
              {itemSlots.map((itemSlot) => (
                <ItemSlot key={itemSlot.id} {...itemSlot}>
                  {equipmentSlots[itemSlot.id] && <EquipmentCard equipment={equipmentSlots[itemSlot.id]!} />}
                </ItemSlot>
              ))}
            </div>
          </section>
          <DndEquipmentItemGrid dndEquipments={dndEquipments} dndEquipmentError={dndEquipmentError} loadingDndItems={loadingDndItems} />
        </DndContext>
      </main>
    </Fragment>
  );
}

export default App;
