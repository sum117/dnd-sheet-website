import { Button } from "@/components/ui/button";
import { useDarkTheme } from "@/hooks/useDarkTheme";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const { theme, toggleTheme } = useDarkTheme({ initialTheme: "dark" });
  return (
    <header className="flex items-center p-4">
      <img src="/app-logo.svg" className="w-16 h-16 mr-2 invert dark:invert-0 transition-all" alt="App Logo" />
      <h1 className="text-2xl font-bold">D&D Equipment Manager</h1>
      <Button size="icon" onClick={toggleTheme} className="ml-auto">
        {theme === "light" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
      </Button>
    </header>
  );
}
