import type { Metadata } from 'next';
import HomePage from '@/views/HomePage';
import { getAllBlogsMerged } from '@/lib/get-all-blogs';
import FaqPageJsonLd from '@/components/FaqPageJsonLd';
import HomeLiveVideoJsonLd from '@/components/HomeLiveVideoJsonLd';

/** Regenerate often so new Keystatic posts show on the homepage after deploy (was 3600s). */
export const revalidate = 300;

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
