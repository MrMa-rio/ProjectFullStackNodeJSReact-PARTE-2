import { useItem } from "@/hooks/useItem";
import { ItemOrderProps } from "@/typesObjects";

export const ItemInOrder = ({
  fkItem,
  fkPedido,
  id,
  preco_unitario,
  quantidade,
}: ItemOrderProps) => {
    const {data} = useItem(fkItem)
  return (
    <div className="flex justify-center items-center gap-2 ">
      <img
        loading="lazy"
        width={100}
        height={100}
        src={`https://source.unsplash.com/300x200/?food/${fkItem}`}
        title={"nome"}
        alt=""
        className="bg-cover w-32 h-20 rounded-lg"
      />
      <div className="w-full">
        <p>{data?.nome}</p>
        <p>R$ {Number(preco_unitario).toFixed(2)}</p>
        <p>Quantidade: {quantidade}</p>
      </div>
    </div>
  );
};
