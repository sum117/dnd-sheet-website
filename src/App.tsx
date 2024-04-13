import { Header } from "@/components/Header";
import ItemSlot from "@/components/ItemSlot";
import { itemSlots } from "@/data";
import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import { Weapon } from "./__generated__/graphql";
import { GET_WEAPONS_WITH_METADATA } from "./api";
import { WeaponCard } from "./components/WeaponCard";

function App() {
  const { loading, data: { equipments } = {} } = useQuery(GET_WEAPONS_WITH_METADATA, {
    variables: { equipmentCategory: "weapon" },
  });

  return (
    <Fragment>
      <main className="flex">
        <figure>
          <img
            className="h-[100dvh] max-w-96 object-cover object-center"
            src="https://i.pinimg.com/originals/79/c3/de/79c3dec7541874812a123e3d7a9fcc24.jpg"
            alt="Character"
          />
          <figcaption className="sr-only">Character Image</figcaption>
        </figure>
        <div className="flex flex-1 flex-col">
          <Header />
          <section className="px-16 py-8">
            <h2 className="pb-8 text-2xl tracking-widest">Currently Equipped</h2>
            <div className="grid max-w-[43.875rem] grid-cols-2 gap-5">
              {itemSlots.slice(0, 2).map((slot) => (
                <ItemSlot {...slot} />
              ))}
              {equipments
                ?.filter((equipment): equipment is Weapon => {
                  return equipment.__typename === "Weapon";
                })
                .map((weapon) => <WeaponCard className=" animate-in fade-in-0" key={weapon.index} weapon={weapon} />)}
            </div>
          </section>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
