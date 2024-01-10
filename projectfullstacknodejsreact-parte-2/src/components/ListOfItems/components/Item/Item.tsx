import Image from "next/image";
import image404 from "@/assets/not-found-image.jpg"
import { ItemProps } from "@/typesObjects/ItemProps";
import { PlusCircle } from "lucide-react";

export const Item = ({
  idItem,
  imagem_64,
  nome,
  preco_unitario,
}: ItemProps) => {
  return (
    <>
      <div className="flex justify-center items-center gap-2 w-full h-44 p-2 hover:bg-opacity-25 hover:bg-orange-600 rounded-xl transition-all active:bg-opacity-15 ">
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
          <div className="flex justify-center items-center gap-2 w-[80%] border-2 border-orange-500 px-2 rounded-md active:scale-105 transition-all duration-150">
            <PlusCircle />
            <button className="text-lg w-full">Adicionar</button>
          </div>
        </div>
      </div>
    </>
  );
};
