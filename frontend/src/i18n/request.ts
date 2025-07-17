import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = 'pl'; // lub dynamiczne np. z cookies
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
