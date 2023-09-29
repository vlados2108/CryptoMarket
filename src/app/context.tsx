'use client'

import {
    createContext,
    useContext,
    Dispatch,
    SetStateAction,
    useState,
    ReactNode,
} from 'react'

interface ContextProps {
    dateAdded: number
    setDateAdded: Dispatch<SetStateAction<number>>
}

const GlobalContext = createContext<ContextProps>({
    dateAdded: 0,
    setDateAdded: (): number => 0,
})

export const GlobalContextProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const [dateAdded, setDateAdded] = useState(0)

    return (
        <GlobalContext.Provider value={{ dateAdded, setDateAdded }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
