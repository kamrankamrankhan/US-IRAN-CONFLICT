import type { Metadata } from 'next';
import HomePage from '@/views/HomePage';
import { getAllBlogsMerged } from '@/lib/get-all-blogs';
import FaqPageJsonLd from '@/components/FaqPageJsonLd';
import HomeLiveVideoJsonLd from '@/components/HomeLiveVideoJsonLd';

/** Hero “last 14 days” list uses merged blogs + rolling date window; ISR keeps Keystatic in sync after deploy */
export const revalidate = 3600;

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
};

export default async function Page() {
  const blogs = await getAllBlogsMerged();
  return (
    <>
      <FaqPageJsonLd />
      <HomeLiveVideoJsonLd />
      <HomePage blogs={blogs} />
    </>
  );
}
