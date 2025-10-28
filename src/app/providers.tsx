"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <ToastContainer
        position="top-right"
        newestOnTop
        theme="dark"
        closeOnClick
        pauseOnHover={false}
      />
    </ThemeProvider>
  );
}
