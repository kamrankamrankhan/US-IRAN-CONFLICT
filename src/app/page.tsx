import HomePage from '@/views/HomePage';
import { getAllBlogsMerged } from '@/lib/get-all-blogs';

export default async function Page() {
  const blogs = await getAllBlogsMerged();
  return <HomePage blogs={blogs} />;
}
