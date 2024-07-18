'use client'

import {CSSProperties, FunctionComponent, useCallback, useEffect, useState} from "react"
import Note from "@/app/demo/final-project/components/note"
import NewNoteForm from "@/app/demo/final-project/components/new-note-form"

const NotesList: FunctionComponent = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [notes, setNotes] = useState<Note[]>([])

    const ContainerStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: "wrap",
        gap: 10,
        marginTop: 20,
        width: "70vw"
    }

    // --------------------------------------------------------------

    const loadNotes = useCallback(() => {
        fetch('/data/notes.json')
            .then(response => response.json())
            .then(data => setNotes(data))
            .finally(() =>
                setTimeout(
                    () => setLoading(false),
                    3000
                )
            )
    }, [])

    const deleteNote = (noteId) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
    }

    const addNote = (content) => {
        const newNote = {createdAt: 'dd/mm/yyyy', content, id: Math.floor(Math.random() * 100)}
        setNotes(prevNotes => [...prevNotes, newNote])
    }

    // --------------------------------------------------------------

    useEffect(() => {
        if (loading) {
            loadNotes()
        }
    }, [loading, loadNotes])

    // --------------------------------------------------------------

    if (loading) {
        return <p>Chargement...</p>
    }

    return (
        <div>
            <NewNoteForm addNote={addNote}/>
            <div style={ContainerStyle}>
                {notes.map(note => (
                    <Note
                        key={note.id}
                        note={note}
                        deleteNote={deleteNote}
                    />
                ))}
            </div>
        </div>
    )
}

export default NotesList