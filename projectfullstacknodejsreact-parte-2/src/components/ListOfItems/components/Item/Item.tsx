import Image from "next/image";
import image404 from "@/assets/not-found-image.jpg";
import { ItemProps } from "@/typesObjects/ItemProps";
import { PlusCircle } from "lucide-react";
import { useItemContext } from "@/hooks/useItemContext";
import { useMainContext } from "@/hooks/useMainContext";
import { useItem } from "@/hooks/useItem";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface ItemProps2 extends ItemProps {
  isShow: boolean;
  setIsShow: (value: boolean) => void;
}

export const Item = ({
  idItem,
  imagem_64,
  nome,
  preco_unitario,
  setIsShow,
  isShow,
}: ItemProps2) => {
  //const {setItemID} = useItemContext()
  const { setCountCart, countCart } = useMainContext();
  const { setDataLS, getDataLS, existingItem } = useLocalStorage("cart", []);
  // const {data} = useItem(idItem)
  // const targetItem = () => {
  //   setIsShow(true)
  //   setItemID(idItem)
  // } era usado para abrir um popup do item
  const eventClick = () => {
    if (existingItem(idItem)) return console.log("Item ja adicionado");
    setDataLS({
      idItem: idItem,
      imagem_64: imagem_64,
      nome: nome,
      preco_unitario: preco_unitario,
      qtdItem: 1,
    });
    setCountCart(getDataLS().length);
    return console.log("adicionado com sucesso");
  };

  return (
    <>
      <div className="flex justify-center items-center gap-2 w-full h-44 p-2 hover:bg-opacity-10 hover:bg-orange-600 rounded-xl transition-all active:bg-opacity-15 ">
        <div className="w-[40%] min-w-32 max-w-48 rounded-lg overflow-hidden">
          <img
            loading="lazy"
            width={300}
            height={300}
            src={`https://source.unsplash.com/300x200/?food/${idItem}`}
            title={nome}
            alt=""
            className="bg-cover w-64 h-32"
          />
        </div>
        <div className="flex flex-col gap-2 w-full p-1">
          <p className="text-lg overflow-x-hidden">{nome}</p>
          <p className="text-lg">R${preco_unitario}</p>
          {/* <span className="text-orange-400 hover:text-orange-500 cursor-pointer">Detalhes do Item</span> */}
          <div className="">
            <button onClick={() => eventClick()} className="flex justify-center items-center gap-2 border-2 border-orange-500 px-2 rounded-md active:scale-105 transition-all duration-150 text-lg w-full">
              <PlusCircle />
              <p>Adicionar</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
