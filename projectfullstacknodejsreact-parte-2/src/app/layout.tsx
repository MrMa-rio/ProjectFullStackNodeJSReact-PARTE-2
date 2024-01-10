'use client'
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainContextProvider } from "@/contexts/MainContext";
import { saira } from "@/utils/ChangeFont";
import { PrimeReactProvider } from "primereact/api";

const client = new QueryClient()
const metadata: Metadata = {
  title: "Meu Restaurante",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      {<MainContextProvider>
        <QueryClientProvider client={client}>
          <PrimeReactProvider>
            <body className={saira.className}>
              {children}
            </body>
          </PrimeReactProvider>
        </QueryClientProvider>
      </MainContextProvider>}
    </html>
  );
}
