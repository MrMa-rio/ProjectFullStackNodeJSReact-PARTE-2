"use client";
import { useOrder } from "@/hooks/useOrder";
import { useOrderClient } from "@/hooks/useOrderClient";
import { useEffect } from "react";
import { OrderList } from "./components/OrderList/OrderList";

export default function page() {
 

  return (
    <>
      <div className="w-full h-fit flex flex-col px-4 gap-8">
        {" "}
        {/* retirar o h-screen apos o preenchimento  */}
        <div className="flex w-full py-10 h-32">
          <select
            name="StatusPedido"
            id="StatusPedido"
            className="outline-none flex justify-center items-center w-64 h-12 px-1 bg-black bg-opacity-5 rounded-md"
          >
            <option value={0}>Todos</option>
            <option value={1}>Cancelado</option>
            <option value={2}>Em Andamento</option>
            <option value={3}>Finalizado</option>
          </select>
        </div>
        <div>
          <h2 className="text-2xl">MEUS PEDIDOS</h2>
        </div>
        <div className="flex flex-col gap-3 self-center w-full lg:w-[70%] xl:max-w-[900px] py-4">
          <OrderList />
        </div>
      </div>
    </>
  );
}
