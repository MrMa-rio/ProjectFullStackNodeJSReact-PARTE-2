import { headers } from "@/utils/HeaderApi";

const url = process.env.NEXT_PUBLIC_API_URL_ITENS as string;

export const postItem = async (dataItem:any) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(dataItem),
      next: {
        revalidate: 1000 * 10,
      },
    });
    const results = await response.json();
    const result: any = results;
    return result;
  } catch (err) {}
};
