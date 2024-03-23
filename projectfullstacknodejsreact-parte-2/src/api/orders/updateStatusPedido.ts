import { OrderProps } from "@/typesObjects";
import { ResponseStatus } from "@/typesObjects/ResponseStatus";
import { headers } from "@/utils/HeaderApi";

const url = process.env.NEXT_PUBLIC_API_PEDIDOS as string;

export const updateStatusPedido = async (idPedido: number, statusPedido: number) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify({ idPedido: idPedido, statusPedido: statusPedido }),
      next: {
        revalidate: 1000 * 10,
      },
    });
    const results: ResponseStatus = await response.json();
    const result = results
    return result;
  } catch (err: any) {
    return err;
  }
};
