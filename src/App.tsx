import { Backpack, Footprints, Gem, Hand, HardHat, LucideIcon, Moon, Shirt, Sun } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import "./App.css";
import { DndEquipmentItemGrid } from "./components/DndEquipmentItemGrid";
import { Button } from "./components/ui/button";
import { useDarkTheme } from "./hooks/useDarkTheme";
import { cn } from "./lib/utils";

function App() {
  const { theme, toggleTheme } = useDarkTheme({ initialTheme: "dark" });
  const itemSlots = [
    { name: "Head", description: "A head slot item", Icon: HardHat },
    { name: "Ring #1", description: "A ring slot item", Icon: Gem },
    { name: "Chest", description: "A chest slot item", Icon: Shirt },
    { name: "Ring #2", description: "A ring slot item", Icon: Gem },
    { name: "Feet", description: "A feet slot item", Icon: Footprints },
    { name: "Ring #3", description: "A ring slot item", Icon: Gem },
    { name: "Hands", description: "A hands slot item", Icon: Hand },
    { name: "Back", description: "A back slot item", Icon: Backpack },
  ];

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
        <section className="grid *:row-span-full isolate justify-center max-w-fit mx-auto border-border border mb-8 rounded-lg">
          <img
            width={384}
            height={384}
            className="w-[384px] h-[512px] object-scale-down -z-10 bg-[url(https://i.pinimg.com/originals/79/c3/de/79c3dec7541874812a123e3d7a9fcc24.jpg)] bg-no-repeat bg-cover bg-center bg-black/40 bg-blend-darken rounded-tl-lg rounded-bl-lg"
            src="https://pngimg.com/d/anime_girl_PNG45.png"
            alt="Anime Girl Full Body Picture"
          />
          <div className="grid grid-cols-2">
            {itemSlots.map((itemSlot) => (
              <ItemSlot key={itemSlot.name} {...itemSlot} />
            ))}
          </div>
        </section>
        <DndEquipmentItemGrid sortBy="weapon" removeEmptyDescriptionAdveturingGear removeToolsAndMounts />
      </main>
    </Fragment>
  );
}

type ItemSlotProps = {
  name: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
};

const ItemSlot = (itemSlot: ItemSlotProps) => (
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

export default App;
