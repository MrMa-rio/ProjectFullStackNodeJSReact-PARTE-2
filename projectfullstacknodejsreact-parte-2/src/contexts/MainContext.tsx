"use client";
import { ReactNode, createContext, useState } from "react";

export const MainContext = createContext({
  authToken: "",
  setAuthToken: (value: string) => {},
  countCart: 0,
  setCountCart: (value: number) => {},
});
interface ProviderProps {
  children: ReactNode;
}
export const MainContextProvider = ({ children }: ProviderProps) => {
  const [authToken, setAuthToken] = useState("");

  const [countCart, setCountCart] = useState(0);
  return (
    <MainContext.Provider
      value={{
        authToken,
        setAuthToken,
        countCart,
        setCountCart
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
