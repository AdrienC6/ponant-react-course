'use client'

import {CSSProperties, FunctionComponent} from "react"
import {useTheme} from "@/context/theme/provider"

const ThemeSwitch: FunctionComponent = () => {
    const {switchMode, palette} = useTheme()

    const ButtonStyle: CSSProperties = {
        background: palette.primary,
        color: palette.text,
        cursor: 'pointer',
        borderRadius: 4,
        padding: '2px 4px'
    }

    return (
        <div>
            <button
                style={ButtonStyle}
                onClick={switchMode}
            >
                SWITCH THEME MODE
            </button>
        </div>
    )
}

export default ThemeSwitch