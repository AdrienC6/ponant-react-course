import {createContext, FunctionComponent, ReactNode, useContext, useMemo, useState} from "react"
import {User} from "@/app/demo/useeffect/page";

type CurrentUserProviderMethods = {
    currentUser: User | null,
    setCurrentUser: Function
}

interface CurrentUserProviderProps {
    children: ReactNode
}

const CurrentUser = createContext<CurrentUserProviderMethods | null>(null)

export const CurrentUserProvider: FunctionComponent<CurrentUserProviderProps> = ({children}) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)

    const value = useMemo((): CurrentUserProviderMethods => ({
        currentUser,
        setCurrentUser
    }), [currentUser, setCurrentUser])

    return (
        <CurrentUser.Provider value={value}>
            {children}
        </CurrentUser.Provider>
    )
}

export const useCurrentUser = () => {
    return useContext(CurrentUser)
}
