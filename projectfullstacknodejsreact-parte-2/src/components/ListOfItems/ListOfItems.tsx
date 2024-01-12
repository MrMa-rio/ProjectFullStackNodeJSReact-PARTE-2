import { useItems } from "@/hooks/useItems";
import { Item } from "./components/Item/Item";
import { useSearchContext } from "@/hooks/useSearchContext";
import { useState } from "react";
import { useItemContext } from "@/hooks/useItemContext";

export const ListOfItems = () => {
  const { data, Loading, Error } = useItems();
  const { search } = useSearchContext();
  const [isShow, setIsShow] = useState(false)
  const {setItemID,  itemID} = useItemContext()

  return (
    <>
      <div className="w-full xl:w-[80%] h-fit flex justify-center items-center">
        {Loading && (
          <div className="flex gap-2 justify-center items-center p-10 bg-orange-400 bg-opacity-15 rounded-xl">
            <div className="w-24 h-24 bg-orange-300 animate-pulse duration-75"></div>
            <div className="w-24 h-24 bg-orange-300 animate-pulse duration-75"></div>
            <div className="w-24 h-24 bg-orange-300 animate-pulse duration-75"></div>
          </div>
        )}
        {Error && (
          <div className="flex gap-2 justify-center items-center p-10 bg-orange-400 bg-opacity-15 rounded-xl">
            <p>Nenhum Item Encontrado</p>
          </div>
        )}
        {data && (
          <div className="xl:w-[80%] h-fit p-10 bg-orange-400 bg-opacity-15 rounded-xl grid md:grid-cols-2 gap-10 max-w-[1280px]">
            {data?.map((i, index) => {
              return (
                <div key={index}>
                  {search &&
                    i.nome
                      ?.toLocaleLowerCase()
                      .includes(search.toLowerCase()) && (
                      <Item
                        idItem={i.idItem}
                        imagem_64={i.imagem_64}
                        nome={i.nome}
                        preco_unitario={i.preco_unitario}
                        isShow={isShow}
                        setIsShow={setIsShow}
                        key={index}
                      />
                    )}
                  {!search && (
                    <Item
                      idItem={i.idItem}
                      imagem_64={i.imagem_64}
                      nome={i.nome}
                      preco_unitario={i.preco_unitario}
                      isShow={isShow}
                      setIsShow={setIsShow}
                      key={index}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
        {/* { isShow && <ModalItem setIsShow={setIsShow} />} */}
      </div>
    </>
  );
};
