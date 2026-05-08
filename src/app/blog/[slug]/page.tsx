import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogArticleJsonLd from '@/components/BlogArticleJsonLd';
import BlogPostPage from '@/views/BlogPostPage';
import { getPostBySlug, getAllBlogsMerged } from '@/lib/get-all-blogs';
import { renderKeystaticPostBody } from '@/lib/render-keystatic-post';
import { toNextBlogMetadata } from '@/lib/seo';

/** Keystatic content is read at request time from repo files; avoid stale static caches. */
export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Article not found' };
  return toNextBlogMetadata(post);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allBlogs = await getAllBlogsMerged();
  let markdocBody: ReactNode = null;
  if (post.source === 'keystatic') {
    markdocBody = await renderKeystaticPostBody(post.slug);
  }

  return (
    <>
      <BlogArticleJsonLd post={post} />
      <BlogPostPage post={post} allBlogs={allBlogs} markdocBody={markdocBody} />
    </>
  );
}
