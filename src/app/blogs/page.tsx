import type { Metadata } from 'next';
import BlogsListPage from '@/views/BlogsListPage';
import { getAllBlogsMerged } from '@/lib/get-all-blogs';
import { truncateMetaDescription } from '@/lib/seo';

export const dynamic = 'force-dynamic';

const blogsDescription = truncateMetaDescription(
  'Long-form essays and explainers on the US-Iran war 2026, Israel-Iran escalation, Hormuz disruptions, JCPOA and sanctions, Gaza and Hezbollah, global oil fallout, and Pentagon operations.',
);

export const metadata: Metadata = {
  title: 'Latest articles & analysis',
  description: blogsDescription,
  keywords: [
    'US Iran war',
    'Iran conflict analysis',
    'Operation Epic Fury',
    'Israel Iran war',
    'Strait of Hormuz',
    'Iran nuclear program',
    'Middle East sanctions',
    'Iran oil crisis',
    'breaking analysis',
  ],
  alternates: { canonical: '/blogs' },
  openGraph: {
    title: 'US Iran Conflict — Latest articles',
    description: blogsDescription,
    url: '/blogs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'US Iran Conflict — Latest articles',
    description: blogsDescription,
  },
};

export default async function Page() {
  const blogs = await getAllBlogsMerged();
  return <BlogsListPage blogs={blogs} />;
}
