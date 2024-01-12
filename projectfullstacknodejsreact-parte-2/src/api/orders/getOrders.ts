import { headers } from "@/utils/HeaderApi";

const url = process.env.NEXT_PUBLIC_API_PEDIDOS as string;


export const getOrders = async ()=> {
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers(),
  });
    const results = await response.json();
    const result: any = results;
    return result;
  } catch (err:any) {
  }
};
