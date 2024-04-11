import BardIconComponent from "@/components/svg/Bard";
import AppLogo from "./svg/AppLogo";
import SayuriRectangle from "./svg/SayuriRectangle";

export function Header() {
  return (
    <header className="overflow-hidden text-foreground">
      <nav className="bg-[#1E1E2E]">
        <ul className="flex">
          <li className="hover:bg-accent flex cursor-pointer items-center px-5 tracking-widest">
            <div className="relative mr-4 flex h-full items-center">
              <BardIconComponent className="absolute -bottom-6 -left-7 h-[6.65rem] w-[6.65rem] fill-foreground opacity-[0.08]" />
              <BardIconComponent className="h-12 w-12 fill-foreground" />
            </div>
            <span className="mr-2 text-2xl">Sayumi</span>
            <span className="text-foreground/40 translate-y-[0.125rem]">The Bard</span>
          </li>
          <span className="my-auto">
            <SayuriRectangle className="fill-foreground/40" />
          </span>
          <li className="hover:bg-accent flex cursor-pointer items-center px-5 text-2xl tracking-widest">Background</li>
          <li className="hover:bg-accent flex cursor-pointer items-center px-5 text-2xl tracking-widest">Equipment</li>
          <AppLogo className="mx-4 my-3 ml-auto h-10 w-10" />
        </ul>
      </nav>
    </header>
  );
}
