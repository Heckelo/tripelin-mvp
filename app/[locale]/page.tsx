import Link from 'next/link';
import { useTranslations } from 'next-intl';

async function getServices() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/services`, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (e) {
    return [];
  }
}

export default async function Home({ params }: { params: { locale: string } }) {
  const t = useTranslations();
  const services: any[] = await getServices();

  return (
    <main>
      <header className="py-6">
        <h1 className="text-2xl font-bold">{t('appName')}</h1>
        <p className="text-sm text-gray-600">{t('tagline')}</p>
      </header>

      <section className="my-6">
        <div className="card">
          <h2 className="text-lg font-semibold">{t('explore')}</h2>
          <p className="text-sm text-gray-600">{t('home')}</p>
          <div className="mt-4 flex gap-2">
            <Link className="btn" href={`/${params.locale}/signin`}>{t('signin')}</Link>
            <Link className="btn btn-primary" href={`/${params.locale}/dashboard`}>{t('dashboard')}</Link>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-2">{t('services')}</h3>
        <div className="space-y-3">
          {services.length ? (
            services.map((s: any) => (
              <Link key={s.id} href={`/${params.locale}/service/${s.id}`} className="card block">
                <div className="font-medium">{s.title}</div>
                <div className="text-sm text-gray-600">{s.city} • {s.category}</div>
                <div className="text-sm">{s.price} {s.currency}</div>
              </Link>
            ))
          ) : (
            // dummy cards
            <>
              <div className="card">Guidad stadsvandring — Stockholm — 20.0 USD</div>
              <div className="card">Fototur i naturen — Göteborg — 35.0 USD</div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
