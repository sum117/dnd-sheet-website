import "./App.css";
import { EquipmentCard } from "./components/EquipmentCard";
import { Spinner } from "./components/ui/spinner";
import { useDnDEquipments } from "./hooks/useDNDEquipments";

function App() {
  const { equipments, error, loading } = useDnDEquipments({
    sortBy: "weapon",
    removeToolsAndMounts: true,
  });

  return (
    <main>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl p-2 mb-4 text-center">
        D&D Equipments
      </h1>
      <section className="grid sm:grid-cols-4 gap-8 p-2 mb-8">
        {error && <p className="text-red-500 text-center">{error}</p>}
        {loading ? (
          <div className="col-span-full">
            <Spinner size="large" show />
          </div>
        ) : (
          equipments.map((equipment) => (
            <EquipmentCard key={equipment.index} equipment={equipment} />
          ))
        )}
      </section>
    </main>
  );
}

export default App;
