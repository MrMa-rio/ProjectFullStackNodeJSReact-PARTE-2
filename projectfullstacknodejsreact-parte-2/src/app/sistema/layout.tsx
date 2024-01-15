'use client'
import '../globals.css'
import {  QueryClient } from '@tanstack/react-query';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import { ReactNode } from 'react';

const QClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className={`w-screen h-fit`}>
      {children}
    </div>
  )
}
