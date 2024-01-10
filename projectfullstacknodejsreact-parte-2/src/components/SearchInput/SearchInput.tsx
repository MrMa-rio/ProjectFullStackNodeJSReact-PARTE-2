import { useSearchContext } from "@/hooks/useSearchContext";
import { Search } from "lucide-react";
import { useDeferredValue, useEffect } from "react";

export const SearchInput = () => {
  const { setSearch, search } = useSearchContext();

  const eventInput = (e: string) => {
    return setSearch(e);
  };
  return (
    <>
      <div className="flex justify-center items-center w-fit h-12 py-4 px-6 gap-3 bg-black bg-opacity-5 rounded-md">
        <Search />
        <input
          type="text"
          name="search"
          id="search"
          onInput={(e) => eventInput(e.currentTarget.value.trim())}
          placeholder="Busque um item"
          className="outline-none bg-black bg-opacity-0 w-64"
          title="Pesquisar"
        />
      </div>
    </>
  );
};
