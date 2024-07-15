import React, {CSSProperties, FunctionComponent} from "react"

interface TitleProps {
    userName: string,
    style: CSSProperties
}

interface SubTitleProps {
    shipName: string | undefined
}

const Title: FunctionComponent<TitleProps> = ({userName, style}) => {
    return (
        <h1 style={style}>
            Bonjour {userName}
        </h1>
    )
}

const SubTitle: FunctionComponent<SubTitleProps> = ({shipName = null}) => {
    return (
        <h2>
            {shipName ? `Bienvenue à bord du ${shipName}` : 'Bienvenue'}
        </h2>
    )
}

export default function Page(): React.JSX.Element {
    const userName: string = "Elton John"

    const style: CSSProperties = {
        color: 'red',
        fontWeight: 'bolder',
        cursor: 'pointer'
    }

    const shipName: string|null = 'Commandant Charcot'

    return (
        <div>
            <Title style={style} userName={userName}/>
            <SubTitle shipName={shipName}/>
            <p>
                Ceci est un texte de présentation de l'expérience Ponant. Nous pourrons en écrire plein de
                similaires
                pour le fun !
            </p>
        </div>
    )
}