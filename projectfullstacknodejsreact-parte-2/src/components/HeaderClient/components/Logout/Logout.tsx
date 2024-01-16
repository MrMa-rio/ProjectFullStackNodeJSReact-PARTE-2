import { DoorOpen, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export const Logout = () => {
  const router = useRouter()

  const eventNavigation = () => {
    router.push("/login")
  }
  return (
    <>
      <button
      onClick={eventNavigation}
        title="Sair"
        className="hover:bg-opacity-20 active:bg-opacity-30 hover:bg-white p-2 rounded-2xl"
      >
        <LogOut className="w-8 h-8 stroke-white" />
      </button>
    </>
  );
};
