"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Navbar } from "@/lib/landing/components/Navbar";

export function ThemeProvider({
  children,
  ...props
}: Readonly<React.ComponentProps<typeof NextThemesProvider>>) {
  return <NextThemesProvider {...props}>
    <Navbar/>{
    
    children}</NextThemesProvider>;
}
