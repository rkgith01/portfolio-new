"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <ToastProvider />
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
};

export default Providers;
