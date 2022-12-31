import { Palette, Theme } from "@mui/material/styles";


// Theme Palette Type
export interface IPalette extends Palette {
}

export interface ITheme extends Theme {
  palette: IPalette;
}