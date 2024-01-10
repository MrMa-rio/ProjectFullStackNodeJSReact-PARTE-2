import { UserPerfil } from "./components/UserPerfil/UserPerfil";

export const HeaderUser = () => {
  return (
    <div className="h-20 z-50">
      <div className="flex justify-between items-center bg-orange-400 w-full fixed h-20 p-4 shadow-lg">
        <h2 className="md:text-3xl text-white opacity-95"> Meu Restaurante </h2>
        <h3 className="text-xl text-white opacity-95">
          O melhor sabor da cidade
        </h3>
        <div className="flex gap-3">
          <UserPerfil />
        </div>
      </div>
    </div>
  );
};
