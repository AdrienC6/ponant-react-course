'use client'

import React, {CSSProperties, FunctionComponent, useCallback, useEffect, useState} from "react"

export type User = {
    id: number,
    firstName: string,
    lastName: string,
    job: string
}
export interface UserProps {
    user: User
}

const Loader: FunctionComponent = () => {
    const LoaderStyle: CSSProperties = {
        height: '50px',
        width: '50px',
        border: '3px solid white',
        borderRadius: '50%',
        borderLeft: 'none'
    }

    return (
        <div style={LoaderStyle}></div>
    )
}

const UserRow: FunctionComponent<UserProps> = ({user}) => {
    const {id, firstName, lastName, job} = user

    const style: CSSProperties = {
        display: 'flex',
        width: '90%',
        margin: 'auto',
        justifyContent: 'space-between'
    }

    return (
        <div style={style}>
            <h2>{job}</h2>
            <p>{firstName}</p>
            <p>{lastName}</p>
        </div>
    )
}

export default function Page(): React.JSX.Element {
    const [loading, setLoading] = useState<boolean>(true)
    const [users, setUsers] = useState<User[]>([])

    const loadUsers = useCallback(() => {
        fetch('/data/users.json')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error))
            .finally(() => {
                setTimeout(() => setLoading(false), 2000)
            })
    }, [])

    useEffect(() => {
        if (loading) {
            loadUsers()
        }
    }, [loading, loadUsers])

    if (loading) {
        return <Loader/>
    }

    return (
        <div>
            {users.map(user => <UserRow user={user}/>)}
        </div>
    )

}