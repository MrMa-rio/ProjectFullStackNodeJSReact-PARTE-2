"use client"
import { useOrder } from "@/hooks/useOrder";
import { useOrderClient } from "@/hooks/useOrderClient";
import { useEffect } from "react";

export default function page() {
  const { data, Error, Loading, Fetching } = useOrderClient(29,13);
  useEffect(() => {
    console.log(data)
  }, [data])

  return <>Meus Pedidos</>;
}
