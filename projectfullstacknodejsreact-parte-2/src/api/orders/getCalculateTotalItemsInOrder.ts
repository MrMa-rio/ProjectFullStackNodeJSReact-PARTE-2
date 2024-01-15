import { headers } from "@/utils/HeaderApi";

const url = process.env.NEXT_PUBLIC_API_PEDIDOS as string;

export const getCalculateTotalItemsInOrder = async (idOrder: number) => {
  try {
    const response = await fetch(`${url}/${idOrder}/calculo`, {
      method: "GET",
      headers: headers(),
      next: {
        revalidate: 1000 * 10,
      },
    });
    const results = await response.json();
    const result: {total:number} = results;
    return result;
  } catch (err) {}
};
