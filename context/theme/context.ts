import {createContext} from "react";

export const LIGHT_THEME = "light" as const;
export const DARK_THEME = "dark" as const;

export type THEME_MODE = typeof LIGHT_THEME | typeof DARK_THEME

type THEME_PALETTE = {
    background: string,
    text: string,
    primary: string,
    secondary: string
}

export type ThemeProviderType = {
    switchMode: Function,
    palette: THEME_PALETTE
}

const ThemeContext = createContext<ThemeProviderType | null>(null)

export default ThemeContext