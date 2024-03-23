"use client";
import { useMainContext } from "@/hooks/useMainContext";
import { OrderList } from "./components/OrderList/OrderList";
import { useEffect } from "react";
import { BackButton } from "@/components/Buttons/BackButton";
import { useRouter } from "next/navigation";

export default function page() {
  const { setStatusOrder, idCliente, isAuthenticated } = useMainContext();
  const router = useRouter()
  useEffect(() => {
    if(!isAuthenticated) router.push("/login")
  }, []);
  return (
    <>
      {isAuthenticated && <div className="w-full h-fit flex flex-col px-4 gap-8">
        {" "}
        {/* retirar o h-screen apos o preenchimento  */}
        <div className="flex flex-col gap-4 w-full py-10 h-fit">
          <div className="w-32">
            <BackButton />
          </div>
          <select
            name="StatusPedido"
            id="StatusPedido"
            className="outline-none flex justify-center items-center w-64 h-12 px-1 bg-black bg-opacity-5 rounded-md"
            onChange={(e) => setStatusOrder(Number(e.currentTarget.value))}
          >
            <option value={3}>Todos</option>
            <option value={1}>Em Andamento</option>
            <option value={2}>Finalizado</option>
            <option value={0}>Cancelado</option>
          </select>
        </div>
        <div>
          <h2 className="text-2xl">MEUS PEDIDOS</h2>
        </div>
        <div className="flex flex-col gap-3 self-center w-full lg:w-[70%] xl:max-w-[900px] py-4">
          <OrderList />
        </div>
      </div>}
    </>
  );
}
