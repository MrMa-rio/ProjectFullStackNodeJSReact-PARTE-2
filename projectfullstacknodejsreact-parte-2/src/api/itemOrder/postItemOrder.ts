import { ItemOrderProps, ItemProps, ItemPropsCart } from "@/typesObjects";
import { ResponseStatus } from "@/typesObjects/ResponseStatus";
import { headers } from "@/utils/HeaderApi";

const url = process.env.NEXT_PUBLIC_API_URL_ITENS_PEDIDOS as string

export const postItemOrder = async (arrayItemsOrder: Omit<ItemOrderProps, "id">[]) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(arrayItemsOrder)
    });
    let results = await response.json()
    if (results && response.ok) {
        const result:ItemOrderProps = await results
        return result
      }
      return results as ResponseStatus;
  } catch (error) {
  }
};
