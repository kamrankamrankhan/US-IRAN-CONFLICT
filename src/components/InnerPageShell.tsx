import Link from 'next/link';
import type { ReactNode } from 'react';
import Header from '@/sections/Header';
import Footer from '@/sections/NewFooter';

type InnerPageShellProps = {
  breadcrumbCurrent: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function InnerPageShell({ breadcrumbCurrent, title, intro, children }: InnerPageShellProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{breadcrumbCurrent}</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          {intro ? <p className="text-lg text-gray-600 leading-relaxed">{intro}</p> : null}
        </header>

        <div className="max-w-3xl prose prose-gray prose-headings:text-gray-900 prose-a:text-red-600 prose-strong:text-gray-900">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
