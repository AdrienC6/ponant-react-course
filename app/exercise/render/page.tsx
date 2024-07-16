'use client'

import React, {FunctionComponent, useState} from "react"

interface MyComponentProps {
    value1: number,
    value2: number
}

const MyComponent: FunctionComponent<MyComponentProps> = ({value1, value2}) => {
    const [totalValue, setTotalValue] = useState<number>(0)

    const calcTotalValue = (): number => {
        return (value1 * 6) + ((value2 * 3) / 2)
    }

    setTotalValue(calcTotalValue())

    return (
        <p>
            Total value is {totalValue}
        </p>
    )
}

export default function Page(): React.JSX.Element {

    return (
        <MyComponent value1={10} value2={6}/>
    )
}