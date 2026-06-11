import type { Metadata } from 'next';
import HomePage from '@/views/HomePage';
import { getAllBlogsMerged } from '@/lib/get-all-blogs';
import FaqPageJsonLd from '@/components/FaqPageJsonLd';
import HomeLiveVideoJsonLd from '@/components/HomeLiveVideoJsonLd';

/** Regenerate so new Keystatic posts appear on the hero soon after publish/deploy. */
export const revalidate = 120;

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
