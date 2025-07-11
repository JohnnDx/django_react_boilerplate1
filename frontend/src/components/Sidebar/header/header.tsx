'use client'

import React, { useEffect, useState } from 'react'
// import { SidebarTrigger } from '../ui/sidebar';
// import { Separator } from '../ui/separator';
// import { Breadcrumbs } from '../breadcrumbs';
// import SearchInput from '../search-input';
// import { UserNav } from './user-nav';
// import { ThemeSelector } from '../theme-selector';
// import { ModeToggle } from './ThemeToggle/theme-toggle';
// import CtaGithub from './cta-github';

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'

import CtaGithub from './cta-github'
import SearchInput from './search-input'
import { UserNav } from './user-nav'

import { ModeToggle } from './theme-toggle'
import { Breadcrumbs } from './breadcrumbs'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
  className={`mt-2 sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between gap-2 border-b border-border bg-background transition-all ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 ${
    scrolled ? ' rounded-xl shadow-sm' : ''
  }`}
>

      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumbs />
      </div>

      <div className="flex items-center gap-2 px-4">
        <CtaGithub />
        <div className="hidden md:flex">
          <SearchInput />
        </div>
        <UserNav />
        <ModeToggle />
        {/* <ThemeSelector /> */}
      </div>
    </header>

    // <header className="flex h-16 shrink-0 items-center gap-2">
    //       <div className="flex items-center gap-2 px-4">
    //         <SidebarTrigger className="-ml-1" />
    //         <Separator
    //           orientation="vertical"
    //           className="mr-2 data-[orientation=vertical]:h-4"
    //         />
    //         <Breadcrumb>
    //           <BreadcrumbList>
    //             <BreadcrumbItem className="hidden md:block">
    //               <BreadcrumbLink href="#">
    //                 Building Your Application
    //               </BreadcrumbLink>
    //             </BreadcrumbItem>
    //             <BreadcrumbSeparator className="hidden md:block" />
    //             <BreadcrumbItem>
    //               <BreadcrumbPage>Data Fetching</BreadcrumbPage>
    //             </BreadcrumbItem>
    //           </BreadcrumbList>
    //         </Breadcrumb>
    //       </div>
    //     </header>
  )
}
