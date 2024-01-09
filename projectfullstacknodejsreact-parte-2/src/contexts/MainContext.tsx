'use client'
import { ReactNode, createContext, useState } from "react";

export const MainContext = createContext({
    authToken: '',
    setAuthToken: (value: string) => {},
})
interface ProviderProps{
    children: ReactNode
}
export const MainContextProvider = ({children}:ProviderProps) =>{
    const [authToken,setAuthToken] = useState('')
    return(
        <MainContext.Provider value={{
            authToken,
            setAuthToken
        }}>
            {children}
        </MainContext.Provider>
    )
}
