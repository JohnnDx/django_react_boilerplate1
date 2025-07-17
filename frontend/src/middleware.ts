import { NextRequest, NextResponse } from 'next/server'

const SUPPORTED_LOCALES = ['pl', 'en']
const DEFAULT_LOCALE = 'pl'

function getLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get('lang')?.value
  const acceptLanguage = request.headers.get('accept-language')?.split(',')[0]

  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)) return cookieLocale
  if (acceptLanguage && SUPPORTED_LOCALES.includes(acceptLanguage)) return acceptLanguage

  return DEFAULT_LOCALE
}

export function middleware(request: NextRequest) {
  const locale = getLocale(request)

  // ⬇️ Ustawiamy locale w nagłówku + cookies
  const response = NextResponse.next()
  response.headers.set('x-locale', locale)
  response.cookies.set('lang', locale)

  return response
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|.*\\..*).*)'],
}
