import type { BlogPost } from '@/content/blogs';

/** Newest first; uses numeric dates so ISO strings sort reliably. */
export function sortBlogsByDateDesc(blogs: BlogPost[]): BlogPost[] {
  return [...blogs].sort((a, b) => {
    const ta = Date.parse(a.date) || 0;
    const tb = Date.parse(b.date) || 0;
    return tb - ta;
  });
}
