'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function SignIn({ params }: { params: { locale: string } }) {
  const t = useTranslations();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e: any) {
    e.preventDefault();
    const res = await signIn('credentials', { redirect: false, email, password });
    if (res?.ok) router.push(`/${params.locale}/dashboard`);
    else alert('Invalid');
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <h2 className="text-xl">{t('signin')}</h2>
      <input className="w-full p-2 border rounded" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
      <input className="w-full p-2 border rounded" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      <div className="flex gap-2">
        <button className="btn" type="submit">{t('signin')}</button>
      </div>
    </form>
  );
}
