import HomePage from '@/views/HomePage';
import { getAllBlogsMerged } from '@/lib/get-all-blogs';

/** Hero “last 7 days” uses `Date.now` on the client + fresh merges from Keystatic after rebuild/revalidate */
export const revalidate = 3600;

export default async function Page() {
  const blogs = await getAllBlogsMerged();
  return <HomePage blogs={blogs} />;
}
