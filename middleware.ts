import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['sv', 'en', 'es'],
  defaultLocale: 'sv'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
