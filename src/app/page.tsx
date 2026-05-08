import type { Metadata } from 'next';
import HomePage from '@/views/HomePage';
import { getAllBlogsMerged } from '@/lib/get-all-blogs';

/** Hero “last 14 days” list uses merged blogs + rolling date window; ISR keeps Keystatic in sync after deploy */
export const revalidate = 3600;

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default async function Page() {
  const blogs = await getAllBlogsMerged();
  return <HomePage blogs={blogs} />;
}
