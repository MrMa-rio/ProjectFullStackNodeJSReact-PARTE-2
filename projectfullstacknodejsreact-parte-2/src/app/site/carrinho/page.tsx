"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ItemInCart } from "./components/ItemInCart/ItemInCart";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ItemProps } from "@/typesObjects/ItemProps";
import { useEffect, useState } from "react";
import { useMainContext } from "@/hooks/useMainContext";
export default function page() {
  const router = useRouter();
  const backRouter = () => {
    router.back();
  };
  const { getDataLS } = useLocalStorage("cart", [])
  const {countCart, setCountCart} = useMainContext()
  const [arrayCart, setArrayCart] = useState(getDataLS())

  useEffect(() => {
    setArrayCart(getDataLS())
    setCountCart(getDataLS().length)
  },[countCart])
  return (
    <>
      <div className="flex flex-col justify-center items-center xl:px-10 pt-8 xl:pt-28 px-2">
        <div className="w-full md:w-[80%] h-fit py-2">
          <button
            onClick={backRouter}
            className="flex gap-2 border-2 p-1 border-orange-200 rounded-lg transition-all hover:bg-orange-200"
          >
            <ArrowLeft />
            VOLTAR
          </button>
        </div>
        <div className="flex flex-col xl:flex-row items-center xl:w-[80%] xl:h-[70vh] border-2 border-orange-200 rounded-2xl">
          <div className="flex flex-col gap-8 w-full h-full pt-8 p-4">
            <h2 className="text-2xl">ITEMS</h2>
            <div className="flex flex-col gap-2 h-[600px] overflow-y-scroll shadow-md xl:shadow-none rounded-2xl xl:rounded-none">
              {arrayCart?.length > 0 ? arrayCart?.map((item: ItemProps) => {
                return (
                  <ItemInCart
                    idItem={item.idItem} 
                    imagem_64={item.imagem_64} 
                    nome={item.nome} 
                    preco_unitario={item.preco_unitario} 
                    qtdItem_={3}
                  />
                )
              }) : <>Seu Carrinho está vazio</>}
            </div>
          </div>
          <div className="w-0.5 h-[90%] hidden xl:flex bg-gray-400 rounded-xl"></div>
          <div className="flex flex-col w-full xl:w-1/2 h-full pt-8 p-4 gap-2">
            <h2 className="text-2xl">SUBTOTAL</h2>
            <div className="flex flex-col justify-center w-full h-[70%] py-6">
              <div className="flex justify-between">
                <p>Subtotais:</p>
                <p>R$ 27,98</p>
              </div>

              <div className="flex justify-between">
                <p>Taxa de Servico:</p>
                <p>R$ 27,98</p>
              </div>
            </div>
            <div className="w-full h-0.5 self-center bg-black rounded-xl"></div>
            <h2 className="text-2xl">TOTAL À PAGAR </h2>
            <div className="flex flex-col justify-center w-full">
              <div className="flex justify-between">
                <p>Total:</p>
                <p>R$ 27,98</p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full h-[70%] py-6">
              <button className="w-full bg-orange-400 rounded-md hover:shadow-xl transition-all p-2 text-white">
                FINALIZAR COMPRA
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
