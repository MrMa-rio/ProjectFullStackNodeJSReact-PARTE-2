'use client'
import '../../globals.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { PrimeReactProvider } from "primereact/api";
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import { ReactNode } from 'react';
import { MainContextProvider } from '@/contexts';
import { saira } from '@/utils/ChangeFont';


const QClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div>
      {
        <MainContextProvider>
          <QueryClientProvider client={QClient}>
            <PrimeReactProvider>
              <div className={`${saira.className} w-screen h-fit`}>
                {children}
              </div>
            </PrimeReactProvider>
          </QueryClientProvider>
        </MainContextProvider>
      }
    </div>
  )
}
