'use client'

import React, {CSSProperties, FunctionComponent, useState} from "react"
import {User, UserProps} from "@/app/demo/useeffect/page"
import usersJson from '../../../public/data/users.json'
import {CurrentUserProvider, useCurrentUser} from "@/context/current-user-context"

export default function Page(): React.JSX.Element {
    const [users, setUsers] = useState<User[]>(usersJson)

    const CardsContainerStyle: CSSProperties = {
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: "wrap"
    }

    return (
        <CurrentUserProvider>
            <CurrentUserCard/>
            <div style={CardsContainerStyle}>
                {users.map(user => <UserCard user={user}/>)}
            </div>
        </CurrentUserProvider>
    )
}

const UserCard: FunctionComponent<UserProps> = ({user}) => {
    const CardStyle: CSSProperties = {
        background: "grey",
        margin: '25px auto',
        width: "35%"
    }

    return (
        <div style={CardStyle}>
            <UserCardTitle title={user.firstName}/>
            <UserCardButton user={user}/>
        </div>
    )
}

const CurrentUserCard: FunctionComponent = () => {
    const {currentUser} = useCurrentUser()

    return currentUser ? (
        <p>Le client sélectionné est {currentUser.firstName} {currentUser.lastName}</p>
    ) : null
}

interface UserCardTitleProps {
    title: string
}

const UserCardTitle: FunctionComponent<UserCardTitleProps> = ({title}) => {
    return (
        <h3>{title}</h3>
    )
}

const UserCardButton: FunctionComponent<UserProps> = ({user}) => {
    const {setCurrentUser} = useCurrentUser()

    const ButtonStyle: CSSProperties = {
        background: 'white',
        color: 'black'
    }

    return (
        <button style={ButtonStyle} onClick={() => setCurrentUser(user)}>
            Choisir
        </button>
    )
}