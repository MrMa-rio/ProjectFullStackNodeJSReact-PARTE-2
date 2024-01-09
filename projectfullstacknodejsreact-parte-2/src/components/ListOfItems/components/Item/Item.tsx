import Image from "next/image";
import image from "../../../../../../temp/image.jpg";
import { ItemProps } from "@/typesObjects/ItemProps";
import { useEffect } from "react";

export const Item = ({
  idItem,
  imagem_64,
  nome,
  preco_unitario,
}: ItemProps) => {
  return (
    <>
      <div className="flex justify-center items-center gap-2 w-full h-44 hover:bg-opacity-25 hover:bg-black hover:scale-110 transition-all duration-150 rounded-xl">
        <div className="w-[40%] min-w-32 max-w-48 rounded-lg overflow-hidden">
          <Image unoptimized={true} width={100} height={100} src={imagem_64} alt="" />
        </div>
        <div>
          <p>{nome}</p>
          <p>Texto Medio Paaa</p>
          <p>Outro Texto</p>
          <p>aaa</p>
        </div>
      </div>
    </>
  );
};
