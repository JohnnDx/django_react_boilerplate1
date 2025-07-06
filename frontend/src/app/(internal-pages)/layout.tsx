'use client'

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
} from 'kbar'

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"


// import AppSidebar from '@/components/app-sidebar'
import {AppSidebar} from '@/components/Sidebar/app-sidebar'
import Header from '@/components/Sidebar/header/header'



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <KBarProvider actions={[]}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator className="rounded-lg border bg-popover p-4 shadow-lg">
            <KBarSearch className="w-full rounded-md border px-3 py-2 text-sm" />
            <KBarResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>



<SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" /> */}
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
    

    </KBarProvider>


  )
}
