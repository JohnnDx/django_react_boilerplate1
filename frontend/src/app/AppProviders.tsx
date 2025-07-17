"use client";

import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { CookiesProvider } from "react-cookie";
import { UserContextProvider } from "../contexts/userContext";
import { ModalContextProvider } from "@/contexts/ModalProvider";
import Modals from "@/components/Modals";
import Impersonated from "@/components/auth/impersonated";
import { useMyReportWebVitals } from "./reportWebVitals";
// import { NextIntlClientProvider } from "next-intl";
import dynamic from "next/dynamic";

const queryClient = new QueryClient();

const Toaster = dynamic(() => import("react-hot-toast").then((c) => c.Toaster), {
  ssr: false,
});

export default function AppProviders({
  children,
  
}: {
  children: React.ReactNode;
   
}) {
  useMyReportWebVitals();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <QueryClientProvider client={queryClient}>
        
          <UserContextProvider>
            <ModalContextProvider>
              <Impersonated />
              <Modals />
              {children}
              {mounted && <Toaster />}
            </ModalContextProvider>
          </UserContextProvider>
        
      </QueryClientProvider>
    </CookiesProvider>
  );
}
