'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Newspaper, Radio, BookOpen, Mail } from 'lucide-react';
import { updateSEO } from '@/lib/seo-client';

export default function NotFoundPage() {
  useEffect(() => {
    updateSEO({
      title: 'Page not found',
      description:
        'This URL is not on US Iran Conflict. Browse articles, live coverage, breaking news, or return home.',
      path: '/404',
    });
  }, []);

  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/blogs', label: 'All articles', icon: BookOpen },
    { href: '/news', label: 'Breaking news', icon: Newspaper },
    { href: '/live-coverage', label: 'Live coverage', icon: Radio },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-2">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">Page not found</h1>
        <p className="text-gray-600 text-center max-w-md mb-10 leading-relaxed">
          The address may be mistyped or the page was moved. Use the links below to continue reading about the US–Iran
          conflict and Middle East developments.
        </p>
        <nav aria-label="Helpful links" className="w-full max-w-md">
          <ul className="grid gap-3 sm:grid-cols-2">
            {links.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-3 min-h-[48px] rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                >
                  <Icon className="h-5 w-5 text-red-600 shrink-0" aria-hidden />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-[48px] items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to home
        </Link>
      </main>
    </div>
  );
}
