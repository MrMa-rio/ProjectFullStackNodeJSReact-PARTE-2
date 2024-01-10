'use client'
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { saira } from "@/utils/ChangeFont";
import { PrimeReactProvider } from "primereact/api";
import { MainContextProvider, SearchContextProvider } from "@/contexts";
import { HeaderUser } from "@/components/HeaderUser/HeaderUser";

const client = new QueryClient()
const metadata: Metadata = {
  title: "Meu Restaurante",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" >
      {<MainContextProvider>

        <SearchContextProvider>
          <QueryClientProvider client={client}>
            <PrimeReactProvider>
              <body className={saira.className}>
                <HeaderUser />
                {children}
              </body>
            </PrimeReactProvider>
          </QueryClientProvider>
        </SearchContextProvider>

      </MainContextProvider>}
    </html>
  );
}
