import '@/src/styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const { locale } = params;
  const messages = await import(`../../messages/${locale}.json`).then((m) => m);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="max-w-md mx-auto p-4">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
