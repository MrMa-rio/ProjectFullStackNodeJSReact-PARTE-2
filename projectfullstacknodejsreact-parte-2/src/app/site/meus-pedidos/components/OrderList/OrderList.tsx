import { useEffect } from "react";
import { Order } from "../Order/Order";
import { useOrdersClient } from "@/hooks/useOrdersClient";

export const OrderList = () => {
  const { data, Error, Loading, Fetching } = useOrdersClient(29);
  return (
    <>
      {data?.map((item, index) => (
        <Order
          key={index}
          dataPedido={item.dataPedido}
          descricao={item.descricao}
          fkCliente={item.fkCliente}
          idPedido={item.idPedido}
          statusPedido={item.statusPedido}
        />
      ))}
    </>
  );
};
