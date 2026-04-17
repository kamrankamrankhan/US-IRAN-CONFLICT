import BlogsListPage from '@/views/BlogsListPage';
import { getAllBlogsMerged } from '@/lib/get-all-blogs';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const blogs = await getAllBlogsMerged();
  return <BlogsListPage blogs={blogs} />;
}
