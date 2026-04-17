import TopicPage from '@/views/TopicPage';
import { getAllBlogsMerged } from '@/lib/get-all-blogs';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogs = await getAllBlogsMerged();
  return <TopicPage slug={slug} blogs={blogs} />;
}
