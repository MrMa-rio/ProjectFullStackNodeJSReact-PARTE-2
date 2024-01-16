import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton = () => {

    const router = useRouter();
    const backRouter = () => {
        router.back();
    };
    return (
        <button
            onClick={backRouter}
            className="flex gap-2 border-2 p-1 border-orange-200 rounded-lg transition-all hover:bg-orange-200"
        >
            <ArrowLeft />
            VOLTAR
        </button>
    )
}