import { getOrders } from "@/api/orders/getOrders";
import { useQuery } from "@tanstack/react-query";

export const useOrders = () => {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryFn: () => getOrders(),
    queryKey: ["orders"],
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
