import { useEffect } from "react";
import { Order } from "../Order/Order";
import { useOrdersClient } from "@/hooks/useOrdersClient";
import { useMainContext } from "@/hooks/useMainContext";

export const OrderList = () => {
  const { statusOrder, idCliente } = useMainContext();
  const { data, Error, Loading, Fetching } = useOrdersClient(29);

  useEffect(() => {
    console.log(idCliente);
  },[idCliente]);
  if (data && data?.length >= 0) {
    return (
      <>
        {data?.map((item, index) => {
          return (
            <div key={index}>
              {(statusOrder === item.statusPedido || statusOrder === 3) && (
                <Order
                  key={index}
                  dataPedido={item.dataPedido}
                  descricao={item.descricao}
                  fkCliente={item.fkCliente}
                  idPedido={item.idPedido}
                  statusPedido={item.statusPedido}
                />
              )}
            </div>
          );
        })}
      </>
    );
  }
  return (
    <div className="flex justify-center items-center w-full ">
      Nenhum Pedido Realizado
    </div>
  );
};
