import { useEffect, useState } from "react";
import { ItemProps } from "@/typesObjects/ItemProps";
import { Trash2 } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useMainContext } from "@/hooks/useMainContext";
import { useItemContext } from "@/hooks/useItemContext";
interface ItemProp extends ItemProps {
  qtdItem_: number;
  sumSubTotal: () => void
}

export const ItemInCart = ({
  idItem,
  imagem_64,
  nome,
  preco_unitario,
  qtdItem_,
  sumSubTotal
}: ItemProp) => {
  const [qtdItem, setQtdItem] = useState(qtdItem_);
  const { RemoveItemLS, existingItem, setDataLS } = useLocalStorage("cart", []);
  const { setCountCart, countCart } = useMainContext();
  const { setSubTotal, subTotal } = useItemContext()
  const array: number[] = [1, 2, 3, 4, 6, 7, 8, 9, 10]; //Melhorar a logica de como e feito as opcoes do select
  const eventDeleteItem = () => {
    RemoveItemLS(idItem);
    setCountCart(countCart - 1);
  };

  useEffect(() => {
    if (existingItem(idItem))
      setDataLS({
        idItem: idItem,
        imagem_64: imagem_64,
        nome: nome,
        preco_unitario: preco_unitario,
        qtdItem: qtdItem,
      });
    setSubTotal(subTotal)
    sumSubTotal()
  }, [qtdItem]);
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
            {array.map((value, index) => (
              <option key={index} value={value}>{value}</option> //Momentaneo
            ))}
          </select>
        </div>
        <button onClick={eventDeleteItem} className="self-start">
          <Trash2 className="stroke-red-600 hover:scale-110 transition-all" />
        </button>
      </div>
    </>
  );
};
