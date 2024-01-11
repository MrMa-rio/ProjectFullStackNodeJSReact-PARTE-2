import { getItem } from "@/api/items/getItem";
import { useQuery } from "@tanstack/react-query";

export const useItem = (idItem: number) => {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryFn: () => getItem(idItem),
    queryKey: ["token"],
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
