import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import BlogPostPage from '@/views/BlogPostPage';
import { getPostBySlug, getAllBlogsMerged } from '@/lib/get-all-blogs';
import { renderKeystaticPostBody } from '@/lib/render-keystatic-post';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allBlogs = await getAllBlogsMerged();
  let markdocBody: ReactNode = null;
  if (post.source === 'keystatic') {
    markdocBody = await renderKeystaticPostBody(slug);
  }

  return (
    <BlogPostPage post={post} allBlogs={allBlogs} markdocBody={markdocBody} />
  );
}
