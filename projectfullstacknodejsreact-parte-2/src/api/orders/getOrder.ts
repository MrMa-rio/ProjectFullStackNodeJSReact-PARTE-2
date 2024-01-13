import { headers } from "@/utils/HeaderApi";

const url = process.env.NEXT_PUBLIC_API_PEDIDOS as string;

export const getOrder = async (idOrder: number) => {
  try {
    const response = await fetch(`${url}/${idOrder}`, {
      method: "GET",
      headers: headers(),
      next: {
        revalidate: 1000 * 10,
      },
    });
    const results = await response.json();
    const result: any = results;
    return result;
  } catch (err) {}
};
