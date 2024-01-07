import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { Logout } from "./components/Logout/Logout";

export const Header = () => {
  return (
    <div className="h-20">
      <div className="flex justify-between items-center bg-orange-400 w-full fixed h-20 p-4 shadow-lg">
        <h2 className="md:text-3xl text-white opacity-95"> Meu Restaurante </h2>
        <h3 className="text-xl text-white opacity-95">
          O melhor sabor da cidade
        </h3>
        <div className="flex gap-3">
            <ShoppingCart />
            <Logout />

        </div>
      </div>
    </div>
  );
};
