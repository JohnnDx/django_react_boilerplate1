'use client'

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
  useKBar,
} from 'kbar'

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import {KBarCommand} from '@/components/KBarCommand';
import { AppSidebar } from '@/components/Sidebar/app-sidebar'
import Header from '@/components/Sidebar/header/header'

// ✅ akcje
const actions = [
  {
    id: "dashboard-overview",
    name: "Overview",
    shortcut: ["o"],
    keywords: "overview main home",
    section: "Navigation",
    perform: () => (window.location.href = "/dashboard/overview"),
  },
  {
    id: "dashboard-api-keys",
    name: "API Keys",
    shortcut: ["a"],
    keywords: "api keys integrations tokens",
    section: "Navigation",
    perform: () => (window.location.href = "/dashboard/api-keys"),
  },
  {
    id: "dashboard-chat",
    name: "Chat",
    shortcut: ["c"],
    keywords: "chat messages support",
    section: "Navigation",
    perform: () => (window.location.href = "/dashboard/chat"),
  },
  {
    id: "dashboard-mailsetup",
    name: "Mail Setup",
    shortcut: ["m"],
    keywords: "mail smtp email imap",
    section: "Navigation",
    perform: () => (window.location.href = "/dashboard/mailsetup"),
  },
  {
    id: "dashboard-modals",
    name: "Modals",
    shortcut: ["d"],
    keywords: "modal dialog popup",
    section: "Navigation",
    perform: () => (window.location.href = "/dashboard/modals"),
  },
  {
    id: "dashboard-referral",
    name: "Referral Program",
    shortcut: ["r"],
    keywords: "referral invite affiliate",
    section: "Navigation",
    perform: () => (window.location.href = "/dashboard/refferal"),
  },
  {
    id: "dashboard-settings",
    name: "Settings",
    shortcut: ["s"],
    keywords: "settings preferences account",
    section: "Navigation",
    perform: () => (window.location.href = "/dashboard/settings"),
  },
]


function Overlay() {
  const { visualState } = useKBar((state) => state)

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-75 ${
        visualState === 'showing' ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    />
  )
}




export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <KBarProvider actions={actions}>
      <KBarPortal>
        <Overlay />
        <KBarPositioner className="z-50">
          <KBarAnimator >
          {/* <KBarAnimator className="pl-[256px]"> */}
            <div className="flex justify-center w-full">
              <div className="w-full max-w-md">
                <KBarCommand />
              </div>
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Header />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </KBarProvider>
  )
}
