import Image from "next/image";
import image from "../../../../../../Carne Bisteca c-Salada.jpg";

export const ItemInCart = () => {
  return (
    <>
      <div className="flex justify-center items-center p-3 w-[90%] h-fit border-2 rounded-2xl hover:shadow-xl transition-all border-gray-200">
        <Image
          width={200}
          height={100}
          src={image}
          alt="Item"
          className="rounded-2xl shadow-2xl"
        />
        <div className="flex flex-col justify-center gap-2 w-full p-4 ">
          <h3 className="text-lg">Carne Bisteca c/Salada</h3>
          <p>R$27,98</p>
          <select
            name="quantidade"
            id="quantidade"
            className="w-fit p-1 outline-none shadow-md transition-all"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </>
  );
};
