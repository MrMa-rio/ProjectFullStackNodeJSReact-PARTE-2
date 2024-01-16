import { DoorOpen, LogIn as LoginIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const LogIn = () => {
    const router = useRouter()

    const eventNavigation = () => {
      router.push("/login")
    }
  return (
    <>
      <button
      onClick={eventNavigation}
        title="Entrar"
        className="hover:bg-opacity-20 active:bg-opacity-30 hover:bg-white p-2 rounded-2xl"
      >
        <LoginIcon className="w-8 h-8 stroke-white" />
      </button>
    </>
  );
};
