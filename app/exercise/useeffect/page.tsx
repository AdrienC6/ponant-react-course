'use client'

import React, {CSSProperties, FunctionComponent, useState} from "react"
import {User, UserProps} from "@/app/demo/useeffect/page"


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

    if (loading) {
        return <Loader/>
    }

    return (
        <div>
            {users.map(user => <UserRow user={user}/>)}
        </div>
    )

}