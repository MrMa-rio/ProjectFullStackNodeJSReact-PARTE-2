import { OrderProps } from "@/typesObjects";
import { headers } from "@/utils/HeaderApi";

const url = process.env.NEXT_PUBLIC_API_CLIENTES as string;

export const getOrdersClient = async (idCliente: number) => {
  try {
    const response = await fetch(`${url}/${idCliente}/pedidos`, {
      method: "GET",
      headers: headers(),
    });
    const results = await response.json()
    const result: OrderProps[] = results
    return result
  } catch (error) {}
};

export const getOrderClient = async (idCliente: number, idPedido: number) => {
  try {
    const response = await fetch(`${url}/${idCliente}/pedidos/${idPedido}`, {
      method: "GET",
      headers: headers(),
    });
    const results = await response.json()
    const result: OrderProps = results
    return result
  } catch (error) {}
};

