import { useMainContext } from "@/hooks/useMainContext";
import { ShoppingCart as CartIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const ShoppingCart = () => {
  const router = useRouter()
  const navigation = () => {
    router.push("/site/carrinho")
  }
  const {countCart} = useMainContext()
  return (
    <>
      <button
        title="Carrinho"
        onClick={navigation}
        className="hover:bg-opacity-20 active:bg-opacity-30 hover:bg-white p-2 rounded-2xl w-fit h-fit relative"
      >
        <CartIcon className="w-8 h-8 stroke-white"  />
        <div className="flex justify-center items-center w-fit p-1 h-4 bg-red-700 rounded-full bottom-0 right-0 absolute">
          <p className="text-xs text-white opacity-90">{countCart}</p>
        </div>
      </button>
    </>
  );
};
