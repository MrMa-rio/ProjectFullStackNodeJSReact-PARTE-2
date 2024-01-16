import { User2 } from "lucide-react";

interface userProps {
    isPopup: boolean
    setIsPopup: (value:boolean) => void
}

export const User = ({isPopup, setIsPopup}:userProps) => {

    const eventPopup = () => {
        setIsPopup(!isPopup)
    }
    return (
        <> 
            <button
                onClick={eventPopup}
                title="Perfil"
                className="hover:bg-opacity-20 active:bg-opacity-30 hover:bg-white p-2 rounded-2xl"
            >
                <User2 className="w-8 h-8 stroke-white" />
            </button>
        </>
    );
};
