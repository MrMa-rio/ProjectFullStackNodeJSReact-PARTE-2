import { getItems } from "@/api/items/getItems";
import { useQuery } from "@tanstack/react-query";

export const useItems = () => {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryFn: () => getItems(),
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
