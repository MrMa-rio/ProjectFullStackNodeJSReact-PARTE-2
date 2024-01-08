import { headers } from "@/utils/HeaderApi";

const url = process.env.API_KEY as string;

export const getItem = async (idItem: number) => {
  try {
    const response = await fetch(`${url}/items/${idItem}`, {
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
