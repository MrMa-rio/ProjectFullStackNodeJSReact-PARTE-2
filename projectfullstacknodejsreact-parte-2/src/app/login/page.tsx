"use client";
import { authLogin } from "@/api/auth/auth";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import image from "../../../Carne Bisteca c-Salada.jpg";
import Image from "next/image";
import { LockKeyhole, User2 } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { setLocalStorageAuth, deleteLocalStorage } = useLocalStorage(
    "token",
    []
  );
  const login = useMutation({
    mutationKey: ["token"],
    mutationFn: async () => await authLogin(1, { email: email, senha: senha }),
  });

  useEffect(() => {
    deleteLocalStorage();
  }, []);

  useEffect(() => {
    if (login?.data?.status == 200) {
      setLocalStorageAuth({ token: login.data.token });
      router.push("/site");
    }
  }, [login.data]);

  return (
    <div className="w-screen h-screen bg-orange-500">
      <div className="flex justify-center items-center xl:hidden w-full h-full bg-orange-400">
        <div>
          <Image
            src={image}
            alt=""
            className="rounded-3xl fixed top-0 opacity-10 brightness-90 left-0 h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-8 bg-orange-300 w-full md:w-96 h-96 bg-opacity-30 rounded-2xl  ">
          <h2 className="text-4xl text-white">Meu Restaurante</h2>
          <h2 className="text-4xl text-white">Área do Cliente</h2>
          <div className="flex flex-col justify-center items-center gap-4 text-white z-50">
            <div className="flex gap-2 justify-center items-center">
              <User2 />
              <input
                type="text"
                placeholder="Digite seu usuario"
                onInput={(e) => setEmail(e.currentTarget.value)}
                className="bg-orange-600 rounded-md w-64 h-10 bg-opacity-50 outline-none p-3 placeholder-white"
              />
            </div>
            <div className="flex gap-2 justify-center items-center">
              <LockKeyhole />
              <input
                type="password"
                placeholder="Digite sua senha"
                onChange={(e) => setSenha(e.currentTarget.value)}
                onKeyDown={(e) => e.key=="Enter" && login.mutate()}
                className="bg-orange-600 rounded-md w-64 h-10 bg-opacity-50 outline-none p-3 placeholder-white"
              />
            </div>
            <div>
              <button
                  className="w-72 h-10 hover:bg-orange-300 hover:bg-opacity-50 rounded-md transition-all "
                  onClick={() => login.mutate()}
                
              >
                Logar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex gap-8 ">
        <div className="w-[60%] h-full flex flex-col justify-center items-end">
          <div className="flex flex-col xl:w-full h-screen justify-center items-center rounded-e-[150%] bg-orange-400 shadow-2xl gap-20">
            <div className="h-32 z-50">
              <p className="text-white text-4xl text-center"> Seja bem vindo</p>
              <p className="text-white text-4xl text-center"> ao</p>
              <p className="text-white text-4xl ">Meu Restaurante!</p>
            </div>
          </div>
        </div>
        <div className="self-center w-[40%] ">
          <div className=" flex flex-col justify-center items-center gap-10 ">
            <div>
              <Image
                src={image}
                alt=""
                className="rounded-3xl fixed top-0 opacity-10 brightness-50 left-0 w-full h-full object-cover"
              />
            </div>
            <h2 className="text-4xl text-white text-center z-50">
              Bem-vindo ao mundo da Comida!
            </h2>
            <h2 className="text-4xl text-white text-center z-50">Área do Cliente</h2>
            <div className="flex flex-col justify-center items-center gap-4 text-white z-50">
              <div className="flex gap-2 justify-center items-center">
                <User2 />
                <input
                  type="text"
                  placeholder="Digite seu usuario"
                  onInput={(e) => setEmail(e.currentTarget.value)}
                  className="bg-orange-700 rounded-md w-64 h-10 bg-opacity-50 outline-none p-3 placeholder-white"
                />
              </div>
              <div className="flex gap-2 justify-center items-center z-50">
                <LockKeyhole />
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  onChange={(e) => setSenha(e.currentTarget.value)}
                  className="bg-orange-700 rounded-md w-64 h-10 bg-opacity-50 outline-none p-3 placeholder-white"
                />
              </div>
              <div>
                <button
                  className="w-72 h-10 hover:bg-orange-300 hover:bg-opacity-50 rounded-md transition-all "
                  onClick={() => login.mutate()}
                >
                  Logar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
