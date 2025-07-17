import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const cookieLocale = cookieStore.get('lang')?.value;

  const supportedLocales = ['pl', 'en'];
  const defaultLocale = 'pl';

  const locale = supportedLocales.includes(cookieLocale || '')
    ? cookieLocale
    : defaultLocale;

  const messages = (await import(`../messages/${locale}.json`)).default;

  return { locale, messages };
});
