import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import { blogs as staticBlogs, type BlogPost } from '@/content/blogs';
import { normalizeSlugParam } from '@/lib/slug-utils';

/** Vercel/serverless cwd is the app root. */
function contentRoot(): string {
  return process.cwd();
}

function normalizeDate(entry: { date?: unknown }): string {
  const dateVal = entry.date;
  if (typeof dateVal === 'string') return dateVal.slice(0, 10);
  if (dateVal && typeof dateVal === 'object' && dateVal !== null && 'value' in dateVal) {
    return String((dateVal as { value: string }).value).slice(0, 10);
  }
  return new Date().toISOString().slice(0, 10);
}

function displayTitle(title: unknown): string {
  if (typeof title === 'string') return title;
  if (title && typeof title === 'object' && title !== null && 'name' in title) {
    return String((title as { name: string }).name);
  }
  return String(title ?? '');
}

/** Parsed Keystatic entry (from `all()` or `read()`). */
function blogPostFromKeystaticEntry(
  entry: {
    title: unknown;
    excerpt?: unknown;
    date?: unknown;
    image?: unknown;
  },
  canonicalSlug: string
): BlogPost {
  return {
    slug: canonicalSlug,
    title: displayTitle(entry.title),
    excerpt: String(entry.excerpt ?? ''),
    date: normalizeDate(entry),
    content: '',
    image: entry.image ? String(entry.image) : undefined,
    sections: [],
    source: 'keystatic',
  };
}

function mapKeystaticItem(item: {
  slug: string;
  entry: {
    title: unknown;
    excerpt?: unknown;
    date?: unknown;
    image?: unknown;
  };
}): BlogPost {
  return blogPostFromKeystaticEntry(item.entry, item.slug);
}

export async function getAllBlogsMerged(): Promise<BlogPost[]> {
  const reader = createReader(contentRoot(), keystaticConfig);
  const ks: BlogPost[] = [];
  try {
    const all = await reader.collections.posts.all();
    for (const item of all) {
      ks.push(mapKeystaticItem(item));
    }
  } catch (e) {
    console.error('[keystatic] getAllBlogsMerged', e);
  }
  const map = new Map<string, BlogPost>();
  staticBlogs.forEach((b) => map.set(b.slug, b));
  ks.forEach((b) => map.set(b.slug, b));
  return Array.from(map.values()).sort((a, b) => (a.date < b.date ? 1 : -1));
}

function findBySlugVariants(all: BlogPost[], raw: string, normalized: string): BlogPost | undefined {
  const lower = (s: string) => s.toLowerCase();
  return (
    all.find((p) => p.slug === raw) ??
    all.find((p) => p.slug === normalized) ??
    all.find((p) => lower(p.slug) === lower(raw)) ??
    all.find((p) => lower(p.slug) === lower(normalized))
  );
}

/**
 * Resolve a post for /blog/[slug]. Handles encoded URLs and direct Keystatic read if list missed an entry.
 * `read()` returns the entry object (not `{ slug, entry }` like `all()`).
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const normalized = normalizeSlugParam(slug);
  const all = await getAllBlogsMerged();
  const fromList = findBySlugVariants(all, slug, normalized);
  if (fromList) return fromList;

  try {
    const reader = createReader(contentRoot(), keystaticConfig);
    for (const s of [normalized, slug]) {
      const entry = await reader.collections.posts.read(s);
      if (entry) {
        return blogPostFromKeystaticEntry(entry, s);
      }
    }
  } catch (e) {
    console.error('[keystatic] getPostBySlug read', e);
  }

  return null;
}
