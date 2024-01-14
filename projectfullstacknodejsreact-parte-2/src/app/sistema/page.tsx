"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const { setLocalStorageAuth, deleteLocalStorage} = useLocalStorage(
    "token",
    []
  );

  return (
    <>
    aaa
    </>
  );
}
