import { Header } from "@/components/Header";
import ItemSlot from "@/components/ItemSlot";
import { itemSlots } from "@/data";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <main className="flex">
        <figure>
          <img
            className="h-[100dvh] max-w-96 object-cover object-center"
            src="https://i.pinimg.com/originals/79/c3/de/79c3dec7541874812a123e3d7a9fcc24.jpg"
            alt="Character"
          />
          <figcaption>
            <h2 className="sr-only">Character Image</h2>
          </figcaption>
        </figure>
        <div className="flex w-full flex-col">
          <Header />
          <section className="px-16 py-8">
            <h2 className="pb-8 text-2xl tracking-widest">Currently Equipped</h2>
            <div className="grid max-w-2xl grid-cols-2 gap-5">
              {itemSlots.slice(0, 2).map((slot) => (
                <ItemSlot {...slot} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
