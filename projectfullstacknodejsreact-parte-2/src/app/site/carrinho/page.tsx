"use client";
import { ItemInCart } from "./components/ItemInCart/ItemInCart";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ItemProps, ItemPropsCart } from "@/typesObjects/ItemProps";
import { useEffect, useState } from "react";
import { useMainContext } from "@/hooks/useMainContext";
import { useItemContext } from "@/hooks/useItemContext";
import { DescriptionText } from "./components/DescriptionText/DescriptionText";
import { useMutation } from "@tanstack/react-query";
import { postOrder } from "@/api/orders/postOrder";
import { postItemOrder } from "@/api/itemOrder/postItemOrder";
import { ItemOrderProps, OrderProps } from "@/typesObjects";
import { BackButton } from "@/components/Buttons/BackButton";

interface ItemProp extends ItemProps {
  qtdItem: number;
}

export default function page() {

  const dataAtual = new Date();
  const { getDataLS, deleteLocalStorage } = useLocalStorage("cart", []);
  const {idCliente, nivelAcesso, nome, email, countCart, setCountCart} = useMainContext()
  const { setSubTotal, subTotal } = useItemContext();
  const [arrayCart, setArrayCart] = useState<ItemProp[]>(getDataLS());
  const [description, setDescription] = useState("");
  const taxService = 10;

  const eventTargetBuy = (idPedido: number) => {
    const itemsCart: ItemProp[] = getDataLS();
    const itemsPedido: Omit<ItemOrderProps, "id">[] = [];
    itemsCart.map((item) =>
      itemsPedido.push({
        fkItem: item.idItem,
        fkPedido: idPedido,
        preco_unitario: item.preco_unitario,
        quantidade: item.qtdItem,
      })
    );
    //console.log(itemsPedido)
    addItemsOrder.mutate(itemsPedido);
    deleteLocalStorage();
  };
  const addItemsOrder = useMutation({
    mutationFn: postItemOrder,
  });
  const createOrder = useMutation({
    mutationFn: () =>
      postOrder({
        dataPedido: dataAtual.toISOString().substring(0, 19),
        descricao: description,
        fkCliente: idCliente,
      }),
    onMutate: () => console.log("Processando..."),
    onSuccess: (data: OrderProps) => {
      if (data.idPedido) {
        eventTargetBuy(data.idPedido);
        setArrayCart(getDataLS());
        console.log("Sucesso");
      }
      else alert("Por favor faça o login para continuar com a transação") // estruturar de forma isolada para atender melhor o retorno

    },
    onError: () => console.log("Falha na compra!"),
    onSettled(data, error, variables, context) {
      //@ts-ignore
      if (data?.status == 401) {
        //@ts-ignore
        console.log(data.status);
      }
    },
  });

  const sumSubTotal = () => {
    const dataCart: ItemPropsCart[] = getDataLS();
    let sum = 0;

    dataCart?.map((item) => {
      sum = sum + Number(item.preco_unitario) * item.qtdItem;
    });
    let sumFormat = Number(sum);
    setSubTotal(sumFormat);
  };

  useEffect(() => {
    setArrayCart(getDataLS());
    sumSubTotal();
  }, [countCart]);
  useEffect(() => {
    setCountCart(arrayCart?.length || 0);
  }, [arrayCart]);

  return (
    <>
      <div className="flex flex-col justify-center items-center pb-4 xl:px-10 pt-8 xl:pt-20 px-2">
        <div className="w-full md:w-[80%] h-fit py-2">
          <BackButton />
        </div>
        <div className="flex flex-col xl:flex-row items-center w-full md:w-[80%] xl:h-[70vh] border-2 border-orange-200 rounded-2xl">
          <div className="flex flex-col gap-8 w-full h-full pt-8 p-4">
            <h2 className="text-2xl">ITEMS</h2>
            <div className="flex flex-col gap-2 h-[600px] overflow-y-scroll shadow-md xl:shadow-none rounded-2xl xl:rounded-none">
              {arrayCart?.length > 0 ? (
                arrayCart?.map((item: ItemProp) => {
                  return (
                    <ItemInCart
                      idItem={item.idItem}
                      imagem_64={item.imagem_64}
                      nome={item.nome}
                      preco_unitario={item.preco_unitario}
                      qtdItem_={item.qtdItem}
                      key={item.idItem}
                      sumSubTotal={sumSubTotal}
                    />
                  );
                })
              ) : (
                <>Seu Carrinho está vazio</>
              )}
            </div>
          </div>
          <div className="w-0.5 h-[90%] hidden xl:flex bg-gray-400 rounded-xl"></div>
          <div className="flex flex-col w-full xl:w-1/2 h-full pt-8 p-4 gap-2">
            <h2 className="text-2xl">SUBTOTAL</h2>
            <div className="flex flex-col justify-center w-full h-[70%] py-6">
              <div className="flex justify-between">
                <p>Subtotais:</p>
                <p>R$ {subTotal.toFixed(2)}</p>
              </div>

              <div className="flex justify-between">
                <p>Taxa de Servico:</p>
                <p>R$ {taxService.toFixed(2)}</p>
              </div>
            </div>
            <DescriptionText setDescription={setDescription} />
            <div className="w-full h-0.5 self-center bg-black rounded-xl"></div>
            <h2 className="text-2xl">TOTAL À PAGAR </h2>
            <div className="flex flex-col justify-center w-full">
              <div className="flex justify-between">
                <p>Total:</p>
                <p>R$ {(subTotal + taxService).toFixed(2)}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full h-[70%] py-6">
              <button
                onClick={() => createOrder.mutate()}
                className={`w-full bg-orange-400 rounded-md hover:shadow-xl transition-all p-2 text-white disabled:bg-gray-400`}
                disabled={arrayCart?.length == 0 || (!arrayCart && true)}
              >
                FINALIZAR COMPRA
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
