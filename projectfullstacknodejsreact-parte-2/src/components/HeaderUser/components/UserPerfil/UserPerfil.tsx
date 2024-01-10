import { DoorOpen, UserCircle2 } from "lucide-react";

export const UserPerfil = () => {
  return (
    <>
      <button
        title="Perfil"
        className="hover:bg-opacity-20 active:bg-opacity-30 hover:bg-white p-2 rounded-2xl"
      >
        <UserCircle2 className="w-10 h-10 stroke-white" />
      </button>
    </>
  );
};
