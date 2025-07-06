"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { BotIcon, Home, LogOut, PackageIcon, UserCog, X } from "lucide-react";
import { usePathname } from "next/navigation";
import useLogout from "../../hooks/auth/useLogout";
import LogoToggle from "../LogoToggle";
import { Button } from "@/components/ui/button";
interface DashboardSidebarProps {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: Dispatch<SetStateAction<boolean>>;
  desktopSidebarOpen: boolean;
}
export default function DashboardSidebar(props: DashboardSidebarProps) {
  const logoSrc = LogoToggle();
  const { mobileSidebarOpen, setMobileSidebarOpen, desktopSidebarOpen } = props;
  const handleLogout = useLogout();
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string>(pathname);
  useEffect(() => {
    console.log(window.location.pathname);
    setCurrentPath(window.location.pathname);
  }, [pathname]);

  return (
    <nav
      id="page-sidebar"
      aria-label="Main Sidebar Navigation"
      className={`fixed bottom-0 left-0 top-0 z-40 flex h-full w-full flex-col border-r border-gray-200 bg-white transition-transform duration-500 ease-out dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 lg:w-64 ${
        desktopSidebarOpen ? "lg:translate-x-0" : "lg:-translate-x-full"
      } ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex h-16 w-full flex-none items-center justify-between px-4 dark:bg-gray-600 dark:bg-opacity-25 lg:justify-center">
        <Link href="/" className="">
          <Image
            src={logoSrc}
            alt={`${process.env.NEXT_PUBLIC_COMPANY_NAME} Logo`}
            width={200}
            height={180}
          />
        </Link>

        <div className="lg:hidden">
          <Button
            onClick={() => setMobileSidebarOpen(false)}
            type="button"
            className=""
          >
            <X className="hi-mini hi-x-mark -mx-0.5 inline-block h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="overflow-y-auto text-gray-600">
        <div className="w-full p-4">
          <nav className="space-y-1">
            <Link
              onClick={() => setMobileSidebarOpen(false)}
              href="/dashboard"
              className={`group flex items-center space-x-2 rounded-lg  ${
                currentPath === "/dashboard"
                  ? "bg-pink-50 border border-pink-100"
                  : ""
              } px-2.5 hover:bg-pink-50 text-sm font-medium text-gray-900 dark:border-transparent dark:hover:bg-gray-700/75 dark:bg-transparent dark:text-white`}
            >
              <span
                className={`flex flex-none items-center ${
                  currentPath === "/dashboard"
                    ? "text-pink-500"
                    : "text-gray-500"
                } dark:text-gray-300`}
              >
                <Home className="w-5 h-5" />
              </span>
              <span className="grow py-2">Dashboard</span>
            </Link>

            <div className="px-3 pb-2 pt-5 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Account
            </div>

            <Link
              onClick={() => setMobileSidebarOpen(false)}
              href="/dashboard/settings"
              className={`group flex items-center space-x-2 rounded-lg  ${
                currentPath === "/dashboard/settings"
                  ? "bg-pink-50 border border-pink-100"
                  : ""
              } px-2.5 hover:bg-pink-50 text-sm font-medium text-gray-900 dark:border-transparent dark:hover:bg-gray-700/75 dark:bg-transparent dark:text-white`}
            >
              <span
                className={`flex flex-none items-center ${
                  currentPath === "/dashboard/settings"
                    ? "text-pink-500"
                    : "text-gray-500"
                } dark:text-gray-300`}
              >
                <UserCog className="w-5 h-5" />
              </span>
              <span className="grow py-2">Settings</span>
            </Link>
            <Button
              onClick={() => handleLogout()}
              variant={"ghost"}
              className="group flex items-center ps-2 w-full space-x-2 rounded-lg hover:bg-pink-50 dark:hover:bg-gray-700/75 dark:text-white"
            >
              <span className="flex flex-none items-center text-gray-500  dark:text-gray-300 ">
                <LogOut className="w-5 h-5" />
              </span>
              <span className="grow py-2 text-start">Log out</span>
            </Button>
            <div className="px-3 pb-2 pt-5 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Demo
            </div>
            <Link
              onClick={() => setMobileSidebarOpen(false)}
              href="/dashboard/chat"
              className={`group flex items-center space-x-2 rounded-lg  ${
                currentPath === "/dashboard/modals"
                  ? "bg-pink-50 border border-pink-100"
                  : ""
              } px-2.5 hover:bg-pink-50 text-sm font-medium text-gray-900 dark:border-transparent dark:hover:bg-gray-700/75 dark:bg-transparent dark:text-white`}
            >
              <span
                className={`flex flex-none items-center ${
                  currentPath === "/dashboard/chat"
                    ? "text-pink-500"
                    : "text-gray-500"
                } dark:text-gray-300`}
              >
                <BotIcon className="w-5 h-5" />
              </span>
              <span className="grow py-2">Chat</span>
            </Link>

            <Link
              onClick={() => setMobileSidebarOpen(false)}
              href="/dashboard/modals"
              className={`group flex items-center space-x-2 rounded-lg  ${
                currentPath === "/dashboard/modals"
                  ? "bg-pink-50 border border-pink-100"
                  : ""
              } px-2.5 hover:bg-pink-50 text-sm font-medium text-gray-900 dark:border-transparent dark:hover:bg-gray-700/75 dark:bg-transparent dark:text-white`}
            >
              <span
                className={`flex flex-none items-center ${
                  currentPath === "/dashboard/modals"
                    ? "text-pink-500"
                    : "text-gray-500"
                } dark:text-gray-300`}
              >
                <UserCog className="w-5 h-5" />
              </span>
              <span className="grow py-2">Modals</span>
            </Link>
            <Link
              onClick={() => setMobileSidebarOpen(false)}
              href="/dashboard/api-keys"
              className={`group flex items-center space-x-2 rounded-lg  ${
                currentPath === "/dashboard/api-keys"
                  ? "bg-pink-50 border border-pink-100"
                  : ""
              } px-2.5 hover:bg-pink-50 text-sm font-medium text-gray-900 dark:border-transparent dark:hover:bg-gray-700/75 dark:bg-transparent dark:text-white`}
            >
              <span
                className={`flex flex-none items-center ${
                  currentPath === "/dashboard/api-keys"
                    ? "text-pink-500"
                    : "text-gray-500"
                } dark:text-gray-300`}
              >
                <UserCog className="w-5 h-5" />
              </span>
              <span className="grow py-2">Api Keys</span>
            </Link>

            <Link
              onClick={() => setMobileSidebarOpen(false)}
              href="/dashboard/refferal"
              className={`group flex items-center space-x-2 rounded-lg  ${
                currentPath === "/dashboard/refferal"
                  ? "bg-pink-50 border border-pink-100"
                  : ""
              } px-2.5 hover:bg-pink-50 text-sm font-medium text-gray-900 dark:border-transparent dark:hover:bg-gray-700/75 dark:bg-transparent dark:text-white`}
            >
              <span
                className={`flex flex-none items-center ${
                  currentPath === "/dashboard/refferal"
                    ? "text-pink-500"
                    : "text-gray-500"
                } dark:text-gray-300`}
              >
                <PackageIcon className="w-5 h-5" />
              </span>
              <span className="grow py-2">Referral Dashboard</span>
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}
