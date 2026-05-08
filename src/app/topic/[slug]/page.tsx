import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TopicPage from '@/views/TopicPage';
import { getAllBlogsMerged } from '@/lib/get-all-blogs';
import { topicPagesConfig } from '@/config';
import { toNextTopicMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!topicPagesConfig[slug]) return { title: 'Topic not found' };
  const m = toNextTopicMetadata(slug);
  return m ?? { title: 'Topic' };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!topicPagesConfig[slug]) notFound();
  const blogs = await getAllBlogsMerged();
  return <TopicPage slug={slug} blogs={blogs} />;
}
