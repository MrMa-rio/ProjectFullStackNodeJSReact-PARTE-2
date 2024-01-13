import { getOrderClient } from "@/api/orderClient/getOrderClient";
import { useQuery } from "@tanstack/react-query";

export const useOrderClient = (idCliente: number, idPedido?: number) => {
  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ["orderClient", idCliente],
    queryFn: () => getOrderClient(idCliente, idPedido),
  });
  return {
    data: data,
    Loading: isLoading,
    Error: isError,
    Fetching: isFetching,
  };
};
