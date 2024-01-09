"use client";
import { authLogin } from "@/api/auth/auth";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    <>
      <div className="w-full h-screen flex gap-3 justify-center items-center">
        <input
          type="text"
          onInput={(e) => setNome(e.currentTarget.value)}
          className="border-2 border-black"
        />
        <input
          type="text"
          onChange={(e) => setSenha(e.currentTarget.value)}
          className="border-2 border-black"
        />
        <button onClick={() => login.mutate()}>Logar</button>
      </div>
    </>
  );
}
