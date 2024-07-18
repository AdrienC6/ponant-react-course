import {CSSProperties, FunctionComponent} from "react"
import {useTheme} from "@/context/theme/provider"

interface NoteActionButtonProps {
    label: string,
    action: Function
}

const NoteActionButton: FunctionComponent<NoteActionButtonProps> = ({label, action}) => {
    const {palette} = useTheme()

    const ButtonStyle: CSSProperties = {
        color: palette.text,
        borderWidth: 2,
        borderColor: palette.text
    }

    return (
        <button style={ButtonStyle} onClick={action}>
            {label}
        </button>
    )
}

export default NoteActionButton