"use client";
import { ReactNode, createContext, useState } from "react";

export const SearchContext = createContext({
  search: "",
  setSearch: (value: string) => {},
});
interface ProviderProps {
  children: ReactNode;
}
export const SearchContextProvider = ({ children }: ProviderProps) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
