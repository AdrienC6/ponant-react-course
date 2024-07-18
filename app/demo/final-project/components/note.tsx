import {CSSProperties, FunctionComponent, useState} from "react"
import {useTheme} from "@/context/theme/provider"
import NoteActionButton from "@/app/demo/final-project/components/note-action-button"

export type Note = {
    id: number,
    content: string,
    createdAt: string,
}

interface NoteProps {
    note: Note,
    deleteNote: Function,
    key: number
}

const Note: FunctionComponent<NoteProps> = ({note, deleteNote, key}) => {
    const {palette} = useTheme()
    const [newContentValue, setNewContentValue] = useState<string>('')
    const {id, content, createdAt} = note

    const TextStyle: CSSProperties = {
        color: palette.text
    }

    const InputStyle: CSSProperties = {
        color: palette.text,
        background: palette.secondary
    }

    const CardStyle: CSSProperties = {
        background: palette.primary,
        borderWidth: 3,
        borderColor: palette.primary
    }

    const ActionsStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    }

    return (
        <div style={CardStyle} key={key}>
            <p style={TextStyle}>{createdAt}</p>
            <textarea
                rows={3}
                style={InputStyle}
                defaultValue={content}
                onKeyUp={e => setNewContentValue(e.target.value)}
            />
            <div style={ActionsStyle}>
                <NoteActionButton action={() => deleteNote(id)} label="Supprimer"/>
            </div>
        </div>
    )
}

export default Note