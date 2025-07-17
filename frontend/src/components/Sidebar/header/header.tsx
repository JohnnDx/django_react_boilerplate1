'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import {
  SidebarTrigger,
} from '@/components/ui/sidebar'

import { Separator } from '@/components/ui/separator'
import CtaGithub from './cta-github'
import SearchInput from './search-input'
import { UserNav } from './user-nav'
import { ModeToggle } from './theme-toggle'
import { Breadcrumbs } from './breadcrumbs'

import LanguageSwitcher from '@/components/lang/LanguageSwitcher';

// helpers
const setCookie = (name: string, value: string, days = 30) => {
  const expires = new Date(Date.now() + days * 86400000).toUTCString()
  document.cookie = `${name}=${value}; expires=${expires}; path=/`
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = (locale: 'pl' | 'en') => {
    setCookie('lang', locale)
    router.refresh() // odśwież aktualny path i zainicjalizuj middleware na nowo
  }

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
        scrolled ? 'rounded-xl shadow-sm' : ''
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
         <LanguageSwitcher />
        <UserNav />
        <ModeToggle />

       

      </div>
    </header>
  )
}
