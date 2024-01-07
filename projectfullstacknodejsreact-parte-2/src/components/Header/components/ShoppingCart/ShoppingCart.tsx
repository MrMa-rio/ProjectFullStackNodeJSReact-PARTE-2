import { ShoppingCart as CartIcon } from "lucide-react";

export const ShoppingCart = () => {
  return (
    <>
      <button
        title="Entrar"
        className="hover:bg-opacity-20 active:bg-opacity-30 hover:bg-white p-2 rounded-2xl w-fit h-fit relative"
      >
        <CartIcon className="w-8 h-8 stroke-white"  />
        <div className="flex justify-center items-center w-fit p-1 h-4 bg-red-700 rounded-full bottom-0 right-0 absolute">
          <p className="text-xs text-white opacity-90">10</p>
        </div>
      </button>
    </>
  );
};
