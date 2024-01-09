import { ItemProps } from "@/typesObjects/ItemProps";
import { headers } from "@/utils/HeaderApi";

const url = process.env.NEXT_PUBLIC_API_URL_ALL_ITEMS as string;


export const getItems = async ()=> {
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers(),
  });
    const results = await response.json();
    const result: ItemProps[] = results;
    return result;
  } catch (err:any) {
  }
};
