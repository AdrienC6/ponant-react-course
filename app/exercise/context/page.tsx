'use client'

import React, {CSSProperties, FunctionComponent, useState} from "react"
import {User, UserProps} from "@/app/demo/useeffect/page"
import usersJson from '../../../public/data/users.json'

export default function Page(): React.JSX.Element {
    const [users, setUsers] = useState<User[]>(usersJson)
    const [currentUser, setCurrentUser] = useState<User | null>(null)

    const CardsContainerStyle: CSSProperties = {
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: "wrap"
    }

    return (
        <div>
            <CurrentUserCard currentUser={currentUser}/>
            <div style={CardsContainerStyle}>
                {users.map(user => <UserCard user={user} setCurrentUser={setCurrentUser}/>)}
            </div>
        </div>
    )
}

interface UserPropsWithCurrentUser extends UserProps {
    setCurrentUser: Function
}

const UserCard: FunctionComponent<UserPropsWithCurrentUser> = ({user, setCurrentUser}) => {
    const CardStyle: CSSProperties = {
        background: "grey",
        margin: '25px auto',
        width: "35%"
    }

    return (
        <div style={CardStyle}>
            <UserCardTitle title={user.firstName}/>
            <UserCardButton user={user} setCurrentUser={setCurrentUser}/>
        </div>
    )
}

interface CurrentUserProps {
    currentUser: User | null
}

const CurrentUserCard: FunctionComponent<CurrentUserProps> = ({currentUser}) => {

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

const UserCardButton: FunctionComponent<UserPropsWithCurrentUser> = ({user, setCurrentUser}) => {
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