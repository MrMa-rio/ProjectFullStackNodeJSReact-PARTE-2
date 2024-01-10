import { useItems } from "@/hooks/useItems";
import { Item } from "./components/Item/Item";
import { useSearchContext } from "@/hooks/useSearchContext";
import { XCircle } from "lucide-react";
import { useState } from "react";

export const ListOfItems = () => {
  const { data, Loading, Error } = useItems();
  const { search } = useSearchContext();
  const [isShow, setIsShow] = useState(false)
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
                <>
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
                </>
              );
            })}
          </div>
        )}
        { isShow && <div className="flex justify-center items-center fixed top-20 left-0 w-screen h-screen bg-black bg-opacity-70">
          <div className="flex w-[70%] h-[70%] bg-white p-2">
            <div className="flex justify-end w-full bg-orange-300 ">
              <button onClick={() => setIsShow(false)} className="w-fit h-fit">
                <XCircle />
              </button>
            </div>
          </div>
        </div>}
      </div>
    </>
  );
};
