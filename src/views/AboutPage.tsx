import Image from 'next/image';
import Link from 'next/link';
import Header from '@/sections/Header';
import Footer from '@/sections/NewFooter';
import { siteConfig } from '@/config';

const lastUpdated = 'May 2026';

export default function AboutPage() {
  const { founder } = siteConfig;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">About us</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About us</h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              <strong className="text-gray-900">{founder.name}</strong> founded this site to deliver{' '}
              <strong className="text-gray-900">clear, timely news and updates</strong> on US–Iran tensions, broader
              Middle East conflicts, oil markets, and related security developments. Our goal is to help readers stay
              informed with curated reporting and analysis in one dedicated place.
            </p>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Whether you follow breaking headlines or deeper context—sanctions, the Strait of Hormuz, nuclear
                diplomacy, regional actors—we aim to summarize what matters and point you to primary sources wherever
                possible.
              </p>
              <p>
                This is an independently run publication focused on editorial quality and reader trust. Corrections,
                tips, or partnership inquiries are welcome via our{' '}
                <Link href="/contact" className="font-semibold text-red-600 hover:text-red-700">
                  contact page
                </Link>{' '}
                or{' '}
                <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-red-600 hover:text-red-700">
                  email
                </a>
                .
              </p>
            </div>

            <dl className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm space-y-3">
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="font-semibold text-gray-900 shrink-0">Site</dt>
                <dd className="text-gray-600">{siteConfig.title}</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="font-semibold text-gray-900 shrink-0">Founded by</dt>
                <dd className="text-gray-600">{founder.name}</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="font-semibold text-gray-900 shrink-0">Page updated</dt>
                <dd className="text-gray-600">{lastUpdated}</dd>
              </div>
            </dl>
          </div>

          <figure className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8 shadow-sm lg:sticky lg:top-24">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-xl bg-gray-200">
              <Image
                src={founder.portraitSrc}
                alt={`Portrait of ${founder.name}, ${founder.role} of US-Iran Conflict Coverage`}
                width={560}
                height={560}
                className="h-full w-full object-cover object-center"
                priority
              />
            </div>
            <figcaption className="mt-6 text-center">
              <p className="text-xl font-bold text-gray-900">{founder.name}</p>
              <p className="text-red-600 font-semibold">{founder.role}</p>
              <p className="mt-2 text-sm text-gray-600">Publisher of this independent news &amp; updates platform</p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200 max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Editorial practices</h2>
          <p className="text-gray-600 leading-relaxed">
            We summarize and contextualize publicly available reporting. When we cite or aggregate third-party outlets,
            we label sources clearly. Views expressed in analysis pieces are labelled as such and do not replace
            professional or legal advice. For accuracy concerns, reach out through{' '}
            <Link href="/contact" className="font-semibold text-red-600 hover:text-red-700">
              Contact
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
