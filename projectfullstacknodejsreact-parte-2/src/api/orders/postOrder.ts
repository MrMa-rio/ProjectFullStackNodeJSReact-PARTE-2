import { OrderProps } from "@/typesObjects";
import { ResponseStatus } from "@/typesObjects/ResponseStatus";
import { headers } from "@/utils/HeaderApi";

const url = process.env.NEXT_PUBLIC_API_PEDIDOS as string;

export const postOrder = async (dataOrder: Omit<OrderProps, "idPedido">) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(dataOrder),
      next: {
        revalidate: 1000 * 10,
      },
    });
    const results:OrderProps = await response.json();
    return results
    
  } catch (err:any) {
    return err;
  }
};
