import fs from 'fs';
import path from 'path';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import { blogs as staticBlogs, type BlogPost } from '@/content/blogs';
import { normalizeSlugParam } from '@/lib/slug-utils';
import { postPublicationTimeMs, sortBlogsByDateDesc } from '@/lib/blog-sort';

/** Vercel/serverless cwd is the app root. */
function contentRoot(): string {
  return process.cwd();
}

const KEYSTATIC_POSTS_DIR = path.join(contentRoot(), 'src/content/keystatic-posts');

/** Map Keystatic slug → .mdoc file mtime (ms) for sort when publish date is backdated. */
function buildKeystaticMtimeIndex(): Map<string, number> {
  const index = new Map<string, number>();
  try {
    for (const name of fs.readdirSync(KEYSTATIC_POSTS_DIR)) {
      if (!name.endsWith('.mdoc')) continue;
      const full = path.join(KEYSTATIC_POSTS_DIR, name);
      const mtimeMs = fs.statSync(full).mtimeMs;
      const stem = name.slice(0, -'.mdoc'.length);
      index.set(stem, mtimeMs);
      // Keystatic slugField titles often match filename; also index normalized stem
      const normalized = stem.toLowerCase().replace(/\s+/g, '-');
      if (!index.has(normalized)) index.set(normalized, mtimeMs);
    }
  } catch (e) {
    console.error('[keystatic] buildKeystaticMtimeIndex', e);
  }
  return index;
}

function keystaticMtimeMs(slug: string, index: Map<string, number>): number | null {
  if (index.has(slug)) return index.get(slug)!;
  const lower = slug.toLowerCase();
  if (index.has(lower)) return index.get(lower)!;
  for (const [stem, ms] of index) {
    if (stem.includes(slug) || slug.includes(stem)) return ms;
  }
  return null;
}

function normalizeDate(entry: { date?: unknown }): string {
  const dateVal = entry.date;
  if (typeof dateVal === 'string') return dateVal.slice(0, 10);
  if (dateVal && typeof dateVal === 'object' && dateVal !== null) {
    if ('value' in dateVal) return String((dateVal as { value: string }).value).slice(0, 10);
    if (dateVal instanceof Date && !Number.isNaN(dateVal.getTime())) {
      return dateVal.toISOString().slice(0, 10);
    }
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

function sortTimeForKeystatic(date: string, slug: string, mtimeIndex: Map<string, number>): number {
  const dateMs = postPublicationTimeMs(date) ?? 0;
  const fileMs = keystaticMtimeMs(slug, mtimeIndex);
  if (fileMs != null && fileMs > dateMs) return fileMs;
  return dateMs;
}

/** Parsed Keystatic entry (from `all()` or `read()`). */
function blogPostFromKeystaticEntry(
  entry: {
    title: unknown;
    excerpt?: unknown;
    date?: unknown;
    image?: unknown;
  },
  canonicalSlug: string,
  mtimeIndex: Map<string, number>,
): BlogPost {
  const date = normalizeDate(entry);
  return {
    slug: canonicalSlug,
    title: displayTitle(entry.title),
    excerpt: String(entry.excerpt ?? ''),
    date,
    content: '',
    image: entry.image ? String(entry.image) : undefined,
    sections: [],
    source: 'keystatic',
    sortTimeMs: sortTimeForKeystatic(date, canonicalSlug, mtimeIndex),
  };
}

function mapKeystaticItem(
  item: {
    slug: string;
    entry: {
      title: unknown;
      excerpt?: unknown;
      date?: unknown;
      image?: unknown;
    };
  },
  mtimeIndex: Map<string, number>,
): BlogPost {
  return blogPostFromKeystaticEntry(item.entry, item.slug, mtimeIndex);
}

export async function getAllBlogsMerged(): Promise<BlogPost[]> {
  const reader = createReader(contentRoot(), keystaticConfig);
  const mtimeIndex = buildKeystaticMtimeIndex();
  const ks: BlogPost[] = [];
  try {
    const all = await reader.collections.posts.all();
    for (const item of all) {
      ks.push(mapKeystaticItem(item, mtimeIndex));
    }
  } catch (e) {
    console.error('[keystatic] getAllBlogsMerged', e);
  }
  const map = new Map<string, BlogPost>();
  staticBlogs.forEach((b) => map.set(b.slug, b));
  ks.forEach((b) => map.set(b.slug, b));
  return sortBlogsByDateDesc(Array.from(map.values()));
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
    const mtimeIndex = buildKeystaticMtimeIndex();
    for (const s of [normalized, slug]) {
      const entry = await reader.collections.posts.read(s);
      if (entry) {
        return blogPostFromKeystaticEntry(entry, s, mtimeIndex);
      }
    }
  } catch (e) {
    console.error('[keystatic] getPostBySlug read', e);
  }

  return null;
}
