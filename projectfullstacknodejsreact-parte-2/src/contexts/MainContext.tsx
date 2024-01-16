"use client";
import { ReactNode, createContext, useState } from "react";

export const MainContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => { },
  authToken: "",
  setAuthToken: (value: string) => { },
  countCart: 0,
  setCountCart: (value: number) => { },
  statusOrder: 3,
  setStatusOrder: (value: number) => { },
  nome: "Convidado",
  setNome: (value: string) => { },
  idCliente: 0,
  setIdCliente: (value: number) => { },
  nivelAcesso: 3,
  setNivelAcesso: (value: number) => { },
  email: "",
  setEmail: (value: string) => { },
});
interface ProviderProps {
  children: ReactNode;
}
export const MainContextProvider = ({ children }: ProviderProps) => {
  const [authToken, setAuthToken] = useState("");
  const [countCart, setCountCart] = useState(0);
  const [statusOrder, setStatusOrder] = useState(3);
  const [idCliente, setIdCliente] = useState(0);
  const [nivelAcesso, setNivelAcesso] = useState(3);
  const [nome, setNome] = useState("Convidado");
  const [email, setEmail] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <MainContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        authToken,
        setAuthToken,
        countCart,
        setCountCart,
        setStatusOrder,
        statusOrder,
        idCliente,
        setIdCliente,
        nivelAcesso,
        setNivelAcesso,
        email,
        nome,
        setEmail,
        setNome,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
