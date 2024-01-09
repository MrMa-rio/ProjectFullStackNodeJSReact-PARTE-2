import { ResponseAuthBody } from "@/typesObjects/ResponseAuthBody"
import { ResponseAuthType } from "@/typesObjects/ResponseAuthType"

export const useLocalStorage = <T>(item: string, valueInitial: T) => {

    const setLocalStorageAuth = (newValue: { token: string }) => {
        localStorage.setItem(item, JSON.stringify(newValue.token))
    }

    const setDataLoginAuth = (newValue: ResponseAuthBody) => {
        localStorage.setItem("login", JSON.stringify(newValue))
    }

    const getDataLoginAuth = (): ResponseAuthType|undefined => {
        const tokenExisting = localStorage.getItem("login")
        if(tokenExisting){
             return JSON.parse(tokenExisting)
        }
    }

    const getLocalStorageAuth = () => {
        const tokenExisting = localStorage.getItem(item)
        if(tokenExisting) return JSON.parse(tokenExisting)
        return ''
    }

    const deleteLocalStorageAuth = () => {
        localStorage.removeItem("token")
    }

    return {
        setLocalStorageAuth,
        setDataLoginAuth,
        getDataLoginAuth,
        getLocalStorageAuth,
        deleteLocalStorageAuth
    }
}   