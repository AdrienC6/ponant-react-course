import {useTheme} from "@/context/theme/provider"
import {CSSProperties, FunctionComponent, useState} from "react"

interface NewNoteFormProps {
    addNote: Function
}

const NewNoteForm: FunctionComponent<NewNoteFormProps> = ({addNote}) => {
    const {palette} = useTheme()
    const [content, setContent] = useState<string>('')

    const InputStyle: CSSProperties = {
        color: 'black'
    }

    const ContainerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px auto'
    }

    const ButtonStyle: CSSProperties = {
        background: palette.primary,
        color: palette.text
    }

    const saveNote = () => {
        if (content) {
            addNote(content)
            setContent('')
        }
    }

    return (
        <div style={ContainerStyle}>
            <textarea
                onChange={e => setContent(e.target.value)}
                style={InputStyle}
                value={content}
                rows={4}
            />
            <button style={ButtonStyle} onClick={saveNote}>
                Enregistrer
            </button>
        </div>
    )
}

export default NewNoteForm