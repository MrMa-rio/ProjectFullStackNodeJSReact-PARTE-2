"use client";
import { authLogin } from "@/api/auth/auth";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import image from "../../../Carne Bisteca c-Salada.jpg"
import Image from "next/image"
import { Key, KeyRound, KeySquare, LockKeyhole, User2 } from "lucide-react";


export default function Login() {
  const router = useRouter()
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const { setLocalStorageAuth, deleteLocalStorageAuth } = useLocalStorage(
    "token",
    []
  );
  const login = useMutation({
    mutationKey: ["token"],
    mutationFn: async () => await authLogin(0, { nome: nome, senha: senha }),
  });

  useEffect(() => {
    deleteLocalStorageAuth();
  }, []);

  useEffect(() => {
    if (login?.data?.status == 200) {
      setLocalStorageAuth({ token: login.data.token });
      router.push("/site")
    }
  }, [login.data]);

  return (

    <div className="w-screen h-screen bg-orange-600">
      <div className="flex justify-center items-center flex-col gap-8 xl:hidden w-full h-full bg-orange-500">
        <h2 className="text-4xl text-white">Meu Restaurante</h2>
        <div><Image src={image} alt="" className="rounded-3xl fixed top-0 opacity-10 brightness-50 left-0 h-full" /></div>

        <div className="flex flex-col justify-center items-center gap-4 text-white z-50">
          <div className="flex gap-2 justify-center items-center">
            <User2 />
            <input
              type="text"
              onInput={(e) => setNome(e.currentTarget.value)}
              className="bg-orange-600 rounded-md w-64 h-10 bg-opacity-50 outline-none p-3"
            />
          </div>
          <div className="flex gap-2 justify-center items-center">
            <LockKeyhole />
            <input
              type="password"
              onChange={(e) => setSenha(e.currentTarget.value)}
              className="bg-orange-600 rounded-md w-64 h-10 bg-opacity-50 outline-none p-3"
            />
          </div>
        </div>
      </div>
      <div className="hidden xl:flex gap-8 ">
        <div className="w-[60%] h-full flex flex-col justify-center items-end">
          <div className="flex flex-col xl:w-full h-screen justify-center items-center rounded-e-[150%] bg-orange-500 shadow-2xl gap-20">
            <div className="h-32 z-50">
              <p className="text-white text-4xl text-center"> Seja bem vindo</p>
              <p className="text-white text-4xl text-center"> ao</p>
              <p className="text-white text-4xl ">Meu Restaurante!</p>
            </div>
          </div>
        </div>
        <div className=" h-full flex flex-col justify-center  items-center bg-orange-600 z-50">
          <div className=" flex flex-col justify-evenly items-center gap-40 h-1/4  ">
            <div><Image src={image} alt="" className="rounded-3xl fixed top-0 opacity-10 brightness-50 left-0 h-full" /></div>
            <h2 className="text-4xl text-white text-center z-50">Bem-vindo ao mundo da Comida!</h2>
            <div className="flex flex-col justify-center items-center gap-4 text-white z-50">
              <div className="flex gap-2 justify-center items-center">
                <User2 />
                <input
                  type="text"
                  onInput={(e) => setNome(e.currentTarget.value)}
                  className="bg-orange-700 rounded-md w-64 h-10 bg-opacity-50 outline-none p-3"
                />
              </div>
              <div className="flex gap-2 justify-center items-center z-50">
                <LockKeyhole />
                <input
                  type="password"
                  onChange={(e) => setSenha(e.currentTarget.value)}
                  className="bg-orange-700 rounded-md w-64 h-10 bg-opacity-50 outline-none p-3"
                />
              </div>
              <div>
              <button onClick={() => login.mutate()}>Logar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
