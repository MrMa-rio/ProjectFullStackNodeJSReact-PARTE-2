import { getItemsOrder } from "@/api/itemOrder/getItemsOrder";
import { useQuery } from "@tanstack/react-query";

export const useItemsOrder = (idPedido: number) => {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["itemOrder", idPedido],
    queryFn:() => getItemsOrder(idPedido)
  });

  return{
    data:data,
    Loading: isLoading,
    Error: isError,
    Fetching: isFetching
  }
};
