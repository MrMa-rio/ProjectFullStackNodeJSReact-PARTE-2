import { getCalculateTotalItemsInOrder } from "@/api/orders/getCalculateTotalItemsInOrder";
import { useQuery } from "@tanstack/react-query";

export const useCalculateOrder = (idOrder:number) => {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryFn: () => getCalculateTotalItemsInOrder(idOrder),
    queryKey: ["calculateOrder", idOrder],
    refetchOnWindowFocus: true,
    staleTime: 30000,
  });

  return {
    data: data,
    Loading: isLoading,
    Error: isError,
    Fetching: isFetching,
  };
};
