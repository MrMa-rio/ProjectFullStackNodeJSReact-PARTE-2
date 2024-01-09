"use client"
import { ListOfItems, Pagination, SearchInput } from "@/components";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useEffect } from "react";

export default function Home() {
  const { getLocalStorageAuth } = useLocalStorage("token", []);
  useEffect(() => {
    if (getLocalStorageAuth()) return console.log("Autenticado!!");
    return console.log("Nao Autenticado!!")
  }, []);
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-center items-center w-full h-32">
        <div className="w-full h-16 p-10">
          <SearchInput />
        </div>
      </div>
      <Pagination />
      <ListOfItems />
      <div></div>
    </div>
  );
}
