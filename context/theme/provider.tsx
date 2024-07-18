'use client'

import {FunctionComponent, ReactNode, useCallback, useContext, useMemo, useState} from "react"
import ThemeContext, {DARK_THEME, LIGHT_THEME, THEME_MODE, ThemeProviderType} from "@/context/theme/context"

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({children}) => {
    const [mode, setMode] = useState<THEME_MODE>(LIGHT_THEME)

    const switchMode = useCallback(() => {
        setMode(prev => prev === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)
    }, [mode])

    const palette = useMemo(() => ({
        background: mode === LIGHT_THEME ? "white" : "black",
        text: mode === LIGHT_THEME ? "black" : "white",
        primary: mode === LIGHT_THEME ? "#ffacac" : "#2986cc",
        secondary: mode === LIGHT_THEME ? "#ffdede" : "#266fa5",
    }), [mode])

    const value = useMemo((): ThemeProviderType => ({
        switchMode,
        palette
    }), [palette, switchMode])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }

    return context
}