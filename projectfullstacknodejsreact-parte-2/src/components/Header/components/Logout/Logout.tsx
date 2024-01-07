import { DoorOpen } from "lucide-react";

export const Logout = () => {
  return (
    <>
      <button
        title="Entrar"
        className="hover:bg-opacity-20 active:bg-opacity-30 hover:bg-white p-2 rounded-2xl"
      >
        <DoorOpen className="w-8 h-8 stroke-white" />
      </button>
    </>
  );
};
