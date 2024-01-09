import { useItems } from "@/hooks/useItems";
import { Item } from "./components/Item/Item";

export const ListOfItems = () => {

  const {data} = useItems()
  return (
    <>
      <div className="w-full h-fit flex justify-center items-center p-4 ">
        <div className="w-[80%] h-fit p-10 bg-black bg-opacity-15 rounded-xl grid md:grid-cols-2 gap-10 max-w-[1280px]">
          {data?.map((i, index) => <Item key={index} imagem_64={i.imagem_64} idItem={i.idItem} nome={i.nome} preco_unitario={i.preco_unitario} />)}
        </div>
      </div>
    </>
  );
};
