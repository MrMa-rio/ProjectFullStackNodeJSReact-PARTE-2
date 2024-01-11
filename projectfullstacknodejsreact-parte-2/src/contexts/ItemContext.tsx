"use client";
import { ReactNode, createContext, useState } from "react";

export const ItemContext = createContext({
  itemID: 0,
  setItemID: (value: number) => {},
});
interface ProviderProps {
  children: ReactNode;
}
export const ItemContextProvider = ({ children }: ProviderProps) => {
  const [itemID, setItemID] = useState(0);
  return (
    <ItemContext.Provider
      value={{
        itemID,
        setItemID,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
