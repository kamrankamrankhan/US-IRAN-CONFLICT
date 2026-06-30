import type { Metadata } from 'next';
import NewsPage from '@/views/NewsPage';
import { truncateMetaDescription } from '@/lib/seo';

const newsDesc = truncateMetaDescription(
  'Breaking headlines on US-Iran tensions, Lebanon, Yemen, Hormuz maritime risk, Tehran diplomacy, Pentagon statements, Reuters AFP NPR Axios CNBC feeds and live conflict updates.',
);

export const metadata: Metadata = {
  title: 'Breaking news & headlines',
  description: newsDesc,
  keywords: ['US Iran breaking news', 'Iran war headlines today', 'Middle East news wire', 'Hormuz Strait news'],
  alternates: { canonical: '/news' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'US Iran Conflict — Breaking news',
    description: newsDesc,
    url: '/news',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'US Iran Conflict — Breaking news',
    description: newsDesc,
  },
};

export default function Page() {
  return <NewsPage />;
}
