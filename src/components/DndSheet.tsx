import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { races } from "@/data";

export enum TabName {
  Race = "race",
  Origin = "origin",
  Class = "class",
  Stats = "stats",
}

export const tabs = [
  { id: TabName.Race, label: "Race" },
  { id: TabName.Origin, label: "Origin" },
  { id: TabName.Class, label: "Class" },
  { id: TabName.Stats, label: "Stats" },
];

export function DndSheet() {
  return (
    <section id="sheet" className="w-full-everything">
      <Tabs defaultValue={TabName.Race}>
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <RaceTab />
        <OriginTab />
        <ClassTab />
        <StatsTab />
      </Tabs>
    </section>
  );
}

function RaceTab() {
  return (
    <TabsContent value={TabName.Race} className="grid grid-cols-4 gap-4">
      {races.map((race) => (
        <div
          role="button"
          className="border-border border rounded-lg flex items-center flex-col text-center justify-center hover:bg-primary group transition-all"
        >
          <img
            src={race.icon}
            className="w-24 h-24 group-hover:invert-0 transition-all dark:invert-0 invert dark:group-hover:invert"
            alt={`${race.name} Icon`}
          />
          <span className="text-sm font-semibold group-hover:text-primary-foreground transition-all">{race.name}</span>
        </div>
      ))}
    </TabsContent>
  );
}

function OriginTab() {
  return <TabsContent value={TabName.Origin}></TabsContent>;
}

function ClassTab() {
  return <TabsContent value={TabName.Class}></TabsContent>;
}

function StatsTab() {
  return <TabsContent value={TabName.Stats}></TabsContent>;
}
