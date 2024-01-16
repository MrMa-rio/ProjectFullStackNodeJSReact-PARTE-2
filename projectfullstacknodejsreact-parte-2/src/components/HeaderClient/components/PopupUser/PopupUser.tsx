import { useRouter } from "next/navigation"

export const PopupUser = () => {
    const router = useRouter()
    return (
        <div className="flex flex-col w-full h-full p-4">
            <button onClick={() => router.push("/site/meus-pedidos")} className="flex flex-col bg-white hover:bg-orange-100 transition-all p-2 rounded-lg" >Meus Pedidos</button>
        </div>
    )
}