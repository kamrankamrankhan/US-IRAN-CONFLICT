import Link from 'next/link';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import Header from '@/sections/Header';
import Footer from '@/sections/NewFooter';
import EmailJsContactForm from '@/components/EmailJsContactForm';
import { siteConfig } from '@/config';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Contact</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact us</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
              Send a message about coverage, corrections, or partnerships. We read every note and reply when we can.
            </p>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 space-y-6 max-w-md">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white">
                  <Mail className="w-5 h-5" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email</p>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-gray-900 font-medium hover:text-red-600 transition-colors break-all"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white">
                  <Phone className="w-5 h-5" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Phone</p>
                  <a
                    href={`tel:${siteConfig.contactPhone.replace(/\s/g, '')}`}
                    className="text-gray-900 font-medium hover:text-red-600 transition-colors"
                  >
                    {siteConfig.contactPhone}
                  </a>
                </div>
              </div>
            </div>

            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 mt-10 text-sm font-semibold text-red-600 hover:text-red-700"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to articles
            </Link>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Send a message</h2>
            <p className="text-sm text-gray-600 mb-6">
              Use the form below. Add your EmailJS keys in <code className="rounded bg-gray-100 px-1">.env.local</code>{' '}
              if sending is not configured yet.
            </p>
            <EmailJsContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
