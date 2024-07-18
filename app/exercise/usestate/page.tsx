'use client'

import React, {CSSProperties, FunctionComponent, useState} from "react"

interface ButtonProps {
    label: string,
    action: Function
}

const Button: FunctionComponent<ButtonProps> = ({label, action}) => {
    const buttonStyle: CSSProperties = {
        cursor: 'pointer',
        margin: '0 15px'
    }

    return (
        <button style={buttonStyle} onClick={action}>
            {label}
        </button>
    )
}

export default function Page(): React.JSX.Element {
    let count = 0

    const incrementCount = () => {
        return count++
    }

    const decrementCount = () => {
        return count--
    }

    return (
        <div style={{display: "flex", border: "2px solid white", justifyContent: 'center'}}>
            <Button action={decrementCount} label="-"/>
            <p>Total : {count}</p>
            <Button action={incrementCount} label="+"/>
        </div>
    )
}