import type { Metadata, Viewport } from 'next';
import Providers from './providers';
import SiteJsonLd from '@/components/SiteJsonLd';
import { siteConfig } from '@/config';
import '../index.css';

const baseUrl = siteConfig.siteUrl.replace(/\/$/, '');

const defaultKeywords = [
  'US Iran war',
  'Iran war 2026',
  'US Iran conflict',
  'Israel Iran war',
  'Middle East war',
  'Strait of Hormuz',
  'Iran nuclear program',
  'Operation Epic Fury',
  'usiranconflict',
].join(', ');

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}/`),
  title: {
    default: siteConfig.title,
    template: '%s | US Iran Conflict',
  },
  description: siteConfig.description,
  keywords: defaultKeywords,
  authors: [{ name: 'US Iran Conflict Analysis', url: baseUrl }],
  creator: 'US Iran Conflict Analysis',
  publisher: 'US Iran Conflict Analysis',
  applicationName: 'US Iran Conflict',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'US Iran Conflict Analysis',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage ?? `${baseUrl}/gallery-6.jpg`,
        width: 1200,
        height: 630,
        alt: 'US Iran War 2026 — analysis and breaking coverage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@usiranconflict',
    creator: '@usiranconflict',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage ?? `${baseUrl}/gallery-6.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' }],
    shortcut: ['/favicon.svg'],
    apple: [{ url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' }],
  },
  manifest: '/site.webmanifest',
  category: 'news',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteJsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
