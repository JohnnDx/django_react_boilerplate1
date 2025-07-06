import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import Toggle from "@/components/ThemeToggle";
import { Toaster } from "@/components/ui/toaster"
import React from "react";

import {PureNav} from "@/components/LandingPage/PURE_LP_TEMPLATE/navbar";
import PureFooter from "@/components/LandingPage/PURE_LP_TEMPLATE/footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className="relative overflow-hidden bg-gradient-to-tr from-pink-50 via-violet-50 to-amber-50 dark:from-pink-950 dark:via-indigo-950 dark:to-orange-950 dark:text-gray-100">
    <div className="">
      <Banner />
      <Toggle />
      {process.env.NEXT_PUBLIC_IS_WAITING_LIST_ENABLED !== "true" && <PureNav />}
      {children}
      {process.env.NEXT_PUBLIC_IS_WAITING_LIST_ENABLED !== "true" && <PureFooter />}
      <Toaster />
    </div>
  );
}
