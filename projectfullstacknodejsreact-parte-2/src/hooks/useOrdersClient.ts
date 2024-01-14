import { getOrdersClient } from "@/api/orderClient/getOrderClient";
import { useQuery } from "@tanstack/react-query";

export const useOrdersClient = (idCliente: number) => {
  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ["orderClient", idCliente ],
    queryFn: () => getOrdersClient(idCliente),
  });
  return {
    data: data,
    Loading: isLoading,
    Error: isError,
    Fetching: isFetching,
  };
};
