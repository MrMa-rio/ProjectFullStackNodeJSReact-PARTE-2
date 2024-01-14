import { ItemOrderProps } from "@/typesObjects"
import { headers } from "@/utils/HeaderApi"

const url = process.env.NEXT_PUBLIC_API_URL_ITENS_PEDIDOS as string
export const getItemsOrder = async (idPedido:number) => {
    try {
        const response = await fetch(`${url}/${idPedido}`, {
            headers: headers(),
            method: "GET"
        })
        const results = await response.json()
        const result:ItemOrderProps[] = results
        return result
    } catch (error) {
        
    }
}