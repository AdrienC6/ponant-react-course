import React from "react"
import {ThemeProvider} from "@/context/theme/provider"
import Container from "@/app/demo/final-project/components/container"

export default function Page(): React.JSX.Element {
    return (
        <ThemeProvider>
            <Container/>
        </ThemeProvider>
    )
}