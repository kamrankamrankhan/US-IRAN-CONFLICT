import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import { blogs as staticBlogs, type BlogPost } from '@/content/blogs';

function normalizeDate(entry: { date?: unknown }): string {
  const dateVal = entry.date;
  if (typeof dateVal === 'string') return dateVal.slice(0, 10);
  if (dateVal && typeof dateVal === 'object' && dateVal !== null && 'value' in dateVal) {
    return String((dateVal as { value: string }).value).slice(0, 10);
  }
  return new Date().toISOString().slice(0, 10);
}

export async function getAllBlogsMerged(): Promise<BlogPost[]> {
  const reader = createReader(process.cwd(), keystaticConfig);
  const ks: BlogPost[] = [];
  try {
    const all = await reader.collections.posts.all();
    for (const item of all) {
      const entry = item.entry;
      ks.push({
        slug: item.slug,
        title: String(entry.title),
        excerpt: String(entry.excerpt ?? ''),
        date: normalizeDate(entry),
        content: '',
        image: entry.image ? String(entry.image) : undefined,
        sections: [],
        source: 'keystatic',
      });
    }
  } catch (e) {
    console.error('[keystatic] getAllBlogsMerged', e);
  }
  const map = new Map<string, BlogPost>();
  staticBlogs.forEach((b) => map.set(b.slug, b));
  ks.forEach((b) => map.set(b.slug, b));
  return Array.from(map.values()).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const all = await getAllBlogsMerged();
  return all.find((p) => p.slug === slug) ?? null;
}
