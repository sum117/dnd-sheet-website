import { useEffect, useState } from "react";

export function useDarkTheme({ initialTheme }: { initialTheme: "light" | "dark" }) {
  const [theme, setTheme] = useState<"light" | "dark">((localStorage.getItem("theme") as "light" | "dark") || initialTheme);

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return { theme, toggleTheme };
}
