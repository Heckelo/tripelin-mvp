'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function SignUp({ params }: { params: { locale: string } }) {
  const t = useTranslations();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [businessName, setBusinessName] = useState('');

  async function submit(e: any) {
    e.preventDefault();
    const res = await fetch(`/${params.locale}/api/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, businessName })
    });
    if (res.ok) router.push(`/${params.locale}/signin`);
    else alert('Error');
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <h2 className="text-xl">{t('signup')}</h2>
      <input className="w-full p-2 border rounded" value={businessName} onChange={(e)=>setBusinessName(e.target.value)} placeholder="Business name" />
      <input className="w-full p-2 border rounded" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
      <input className="w-full p-2 border rounded" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      <div>
        <button className="btn btn-primary" type="submit">{t('signup')}</button>
      </div>
    </form>
  );
}
