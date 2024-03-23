import { useItemsOrder } from "@/hooks/useItemsOrder";
import { OrderProps } from "@/typesObjects";
import { converteDateHours } from "@/utils/converteDataHora";
import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { ItemInOrder } from "../ItemInOrder/ItemInOrder";
import { StatusPedidoType } from "@/typesObjects/StatusPedidoType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStatusPedido } from "@/api/orders/updateStatusPedido";
import { useCalculateOrder } from "@/hooks/useCalculateOrder";

export const Order = ({
  idPedido,
  dataPedido,
  descricao,
  fkCliente,
  statusPedido,
}: OrderProps) => {
  const { date, hours } = converteDateHours(dataPedido);
  const [isShow, setIsShow] = useState(false);
  const { data } = useItemsOrder(idPedido);
  const totalPedido = useCalculateOrder(idPedido)
  const useQuery = useQueryClient();
  const [targetStatus, setTargetStatus] = useState(3);
  const statusChange: string =
    StatusPedidoType["EM ANDAMENTO"] == statusPedido
      ? "bg-orange-400"
      : StatusPedidoType["FINALIZADO"] == statusPedido
        ? "bg-green-400"
        : "bg-red-700";
  const changeStatusOrder = useMutation({
    mutationFn: () => updateStatusPedido(idPedido, targetStatus),
    onSettled: () => useQuery.invalidateQueries({ queryKey: ["orderClient"] }),
  });

  useEffect(() => {
    if (targetStatus !== 3) {
      changeStatusOrder.mutate();
    }
  }, [targetStatus]);

  return (
    <div className="flex flex-col gap-4 w-full h-fit rounded-xl border-2 border-orange-300 px-3">
      <header className="flex justify-between gap-6 w-full h-10 py-3 ">
        <p>
          ID Pedido: <strong># {idPedido}</strong>
        </p>
        <div className="flex w-fit gap-2 items-center ">
          <div className={`w-3 h-3 rounded-full ${statusChange}`}></div>
          <p>{StatusPedidoType[statusPedido]}</p>
        </div>
      </header>
      <div className="flex flex-col">
        <p>Data do Pedido: {date}</p>
        <p>Hora Pedido: {hours}</p>
      </div>
      <div className="w-[80%] border border-gray-200 self-center" />
      <div className="h-full bg-black bg-opacity-10">
        <p>
          <strong>DESCRIÇÃO</strong>:
        </p>
        <p
          className={`w-full ${
            isShow ? "h-fit" : "h-7"
          } p-1 overflow-y-hidden `}
        >
          {descricao}
        </p>
      </div>
      <div className={`${isShow ? "flex" : "hidden"} flex-col gap-4 `}>
        {data?.map((item, index) => (
          <ItemInOrder
            key={index}
            fkItem={item.fkItem}
            fkPedido={item.fkPedido}
            id={item.id}
            preco_unitario={item.preco_unitario}
            quantidade={item.quantidade}
          />
        ))}
      </div>
      <div>TOTAL: R$ {totalPedido.data?.total}</div>
      <footer className="p-2">
        <div
          className={`${
            isShow && statusPedido === StatusPedidoType["EM ANDAMENTO"]
              ? "flex"
              : "hidden"
          } justify-between  `}
        >
          <button
            onClick={() => setTargetStatus(2)}
            className="flex items-center gap-2 bg-green-600 text-white text-sm lg:text-base p-1 lg:p-2 rounded-lg bg-opacity-70 hover:bg-opacity-100 active:scale-105 transition-all"
          >
            Pedido Entregue
          </button>
          <button
            onClick={() => setTargetStatus(0)}
            className="text-red-600 hover:text-white hover:bg-red-600 text-sm lg:text-base p-1 lg:p-2 rounded-lg bg-opacity-70 hover:bg-opacity-100 active:scale-105 transition-all"
          >
            Cancelar Pedido
          </button>
        </div>
        <div className="flex justify-center items-center w-full ">
          <button
            onClick={() => setIsShow(!isShow)}
            className="flex flex-col justify-center items-center text-sm"
          >
            {isShow ? "Menos Detalhes" : "Mostrar Detalhes"}
            {isShow ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      </footer>
    </div>
  );
};
