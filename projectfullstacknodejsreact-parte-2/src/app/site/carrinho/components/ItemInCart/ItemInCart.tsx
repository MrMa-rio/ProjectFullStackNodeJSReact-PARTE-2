import { useState } from "react";
import { ItemProps } from "@/typesObjects/ItemProps";
import {  Trash2 } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useMainContext } from "@/hooks/useMainContext";
interface ItemProp extends ItemProps {
  qtdItem_: number
}

export const ItemInCart = ({ idItem, imagem_64, nome, preco_unitario, qtdItem_ }: ItemProp) => {
  const [qtdItem, setQtdItem] = useState(qtdItem_)
  const {RemoveItemLS} = useLocalStorage("cart", [])
  const {setCountCart, countCart} = useMainContext()

  const eventDeleteItem = () => {
    RemoveItemLS(idItem)
    setCountCart(countCart-1)
  }
  return (
    <>
      <div className="flex justify-center items-center p-3 w-[90%] h-fit border-2 rounded-2xl hover:shadow-xl transition-all border-gray-200">
        <img
          width={200}
          height={100}
          src={`https://source.unsplash.com/300x200/?food/${idItem}`}
          alt="Item"
          className="rounded-2xl shadow-2xl"
        />
        <div className="flex flex-col justify-center gap-2 w-full p-4 ">
          <h3 className="text-lg">{nome}</h3>
          <p>R${preco_unitario}</p>
          <select
            name="quantidade"
            id="quantidade"
            className="w-fit p-1 outline-none shadow-md transition-all"
            value={qtdItem}
            onChange={(e) => setQtdItem(Number(e.currentTarget.value))}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button onClick={eventDeleteItem} className="self-start">
          <Trash2 className="stroke-red-600 hover:scale-110 transition-all" />
        </button>
      </div>
    </>
  );
};
