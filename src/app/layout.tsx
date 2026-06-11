import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { SpeedInsights } from '@vercel/speed-insights/next';

const Providers = dynamic(() => import('./providers'), { loading: () => null });
import SiteJsonLd from '@/components/SiteJsonLd';
import { siteConfig } from '@/config';
import { inter } from '@/lib/fonts';
import '../index.css';

const baseUrl = siteConfig.siteUrl.replace(/\/$/, '');

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

/** Google AdSense publisher client (set in env to override or leave empty to disable). */
const adsenseClient =
  process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT?.trim() ?? 'ca-pub-5831523939287299';

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
  authors: [
    { name: siteConfig.founder.name, url: `${baseUrl}/about` },
    { name: 'US Iran Conflict Analysis', url: baseUrl },
  ],
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
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {adsenseClient ? (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        ) : null}
      </head>
      <body className={`${inter.className} antialiased`}>
        <SiteJsonLd />
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
