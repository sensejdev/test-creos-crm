import { useContext } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "./ThemeContext.ts";

interface IUseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  if (!theme) {
    throw new Error(
      "Theme is undefined. Make sure you are using the ThemeProvider.",
    );
  }

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    if (setTheme) {
      setTheme(newTheme);
    }
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
