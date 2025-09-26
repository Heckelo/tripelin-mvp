import type { ReactNode } from 'react';
import { i18n } from '../../i18n';      // <— i18n.ts ligger i projektroten
import '../globals.css';                // <— global CSS vi lade i app/

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
