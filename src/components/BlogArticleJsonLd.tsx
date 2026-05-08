import type { BlogPost } from '@/content/blogs';
import { buildNewsArticleJsonLdForPost } from '@/lib/seo';

/** Server-rendered NewsArticle structured data for blog posts (crawlers + rich results). */
export default function BlogArticleJsonLd({ post }: { post: BlogPost }) {
  const json = buildNewsArticleJsonLdForPost(post);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
