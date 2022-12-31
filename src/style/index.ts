import { PaletteMode } from "@mui/material";
import LightTheme from "./themes/light";
import DarkTheme from "./themes/dark";

export const getStylesTheme = (mode: PaletteMode = 'dark') => {
  if (mode === "light") {
    return LightTheme;
  }

  if (mode === "dark") {
    return DarkTheme;
  }

  throw new Error(`[Theme]: Unsupported theme ${mode}`);
};
