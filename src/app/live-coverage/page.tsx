import type { Metadata } from 'next';
import LiveCoveragePage from '@/views/LiveCoveragePage';
import { truncateMetaDescription } from '@/lib/seo';

const lcDesc = truncateMetaDescription(
  'Embedded live coverage dashboards and breaking streams for the US-Iran war 2026, Hormuz disruptions, Tehran strikes, allied responses, refugee corridors, humanitarian pauses.',
);

export const metadata: Metadata = {
  title: 'Live coverage',
  description: lcDesc,
  keywords: ['US Iran live coverage', 'Iran conflict live updates', 'breaking Middle East streams'],
  alternates: { canonical: '/live-coverage' },
  openGraph: {
    title: 'US Iran Conflict — Live coverage',
    description: lcDesc,
    url: '/live-coverage',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'US Iran Conflict — Live coverage',
    description: lcDesc,
  },
};

export default function Page() {
  return <LiveCoveragePage />;
}
