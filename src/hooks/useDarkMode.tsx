import { themeMode } from "@/constants/constants";
import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeMode.dark);

  const handleSetTheme = (value: string) => {
    setTheme(value);
    localStorage.setItem("theme", value);
  };

  useEffect(() => {
    let themeCheck = localStorage.getItem("theme") as string;
    if (themeCheck === null) {
      localStorage.setItem("theme", themeMode.dark);
      themeCheck = themeMode.dark;
    }

    const colorTheme = themeCheck === "dark" ? "light" : "dark";

    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(themeCheck);
  }, [theme]);

  return [theme, handleSetTheme] as const;
};

export default useDarkMode;
