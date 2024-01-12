import { getOrder } from "@/api/orders/getOrder";
import { useQuery } from "@tanstack/react-query";

export const useOrder = (idClient: number) => {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryFn: () => getOrder(idClient),
    queryKey: ["order",idClient],
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
