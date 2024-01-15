"use client";
import { ListOfItems, SearchInput } from "@/components";
import { ItemContextProvider } from "@/contexts";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useMainContext } from "@/hooks/useMainContext";
import { useEffect } from "react";

export default function Home() {
  const { getLocalStorageAuth } = useLocalStorage("token", []);
  const {countCart} = useMainContext() //Existe um problema de sincronizacao onde esta afetando o carregamento de informacoes trocadas durante o login e transicao de pagina
  useEffect(() => {
    if (getLocalStorageAuth()) return console.log("Autenticado");
    return console.log("Nao Autenticado!!");
  }, []);
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex w-full py-10 px-4 h-32">
        <SearchInput />
      </div>
      <div className="flex flex-col justify-center items-center h-fit p-4 gap-4 ">
        <h2 className="text-3xl">Cardapio do Dia</h2>
        <ItemContextProvider>
          <ListOfItems />
        </ItemContextProvider>
      </div>
    </div>
  );
}
