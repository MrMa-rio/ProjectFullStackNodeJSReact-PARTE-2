import { useLocalStorage } from "@/hooks/useLocalStorage"

export let headers = () => {

    const {getLocalStorageAuth} = useLocalStorage("token", [])
    return {
        accept: 'application/json',
        Authorization: getLocalStorageAuth(),
        'Content-Type': 'application/json'
    }
}