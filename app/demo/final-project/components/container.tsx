'use client'

import React, {CSSProperties, FunctionComponent} from "react"
import ThemeSwitch from "@/app/demo/final-project/components/theme-switch"
import NotesList from "@/app/demo/final-project/components/notes-list"
import {useTheme} from "@/context/theme/provider"

const Container: FunctionComponent = () => {
    const {palette} = useTheme()

    const ContainerStyle: CSSProperties = {
        borderColor: palette.primary,
        borderWidth: 4,
        width: '75%',
        margin: '50px auto',
        padding: 15
    }

    return (
        <div style={ContainerStyle}>
            <ThemeSwitch/>
            <NotesList/>
        </div>
    )
}

export default Container