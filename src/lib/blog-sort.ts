import type { BlogPost } from '@/content/blogs';

/** Timestamp used for ordering lists (newest first). */
export function getBlogSortTimeMs(post: BlogPost): number {
  if (post.sortTimeMs != null && Number.isFinite(post.sortTimeMs)) {
    return post.sortTimeMs;
  }
  return postPublicationTimeMs(post.date) ?? 0;
}

/** Newest first; uses `sortTimeMs` when set, else publish date. */
export function sortBlogsByDateDesc(blogs: BlogPost[]): BlogPost[] {
  return [...blogs].sort((a, b) => {
    const tb = getBlogSortTimeMs(b);
    const ta = getBlogSortTimeMs(a);
    if (tb !== ta) return tb - ta;
    return a.slug.localeCompare(b.slug);
  });
}

/**
 * Parse `BlogPost.date` (YYYY-MM-DD, ISO date string, or full ISO datetime) to a comparable timestamp (ms).
 * Uses noon UTC for date-only strings so timezone boundaries don’t drop posts from day windows.
 */
export function postPublicationTimeMs(dateStr: string): number | null {
  const s = dateStr.trim();
  if (!s) return null;

  const ymd = /^(\d{4})-(\d{2})-(\d{2})/.exec(s);
  if (ymd) {
    const y = Number(ymd[1]);
    const mo = Number(ymd[2]) - 1;
    const d = Number(ymd[3]);
    if (!Number.isFinite(y) || !Number.isFinite(mo) || !Number.isFinite(d)) return null;
    return Date.UTC(y, mo, d, 12, 0, 0);
  }

  const t = Date.parse(s);
  return Number.isNaN(t) ? null : t;
}

/**
 * Posts whose publish time is within the last `days` **rolling** 24h periods from `now`
 * (not UTC “calendar day” math, which can hide real “last week” posts).
 */
export function filterBlogsWithinLastDays(
  blogs: BlogPost[],
  days: number,
  now: Date = new Date(),
): BlogPost[] {
  const safeDays = Math.max(1, days);
  const cutoff = now.getTime() - safeDays * 86400000;

  return sortBlogsByDateDesc(blogs).filter((b) => {
    const t = getBlogSortTimeMs(b);
    if (t <= 0) return false;
    return t >= cutoff;
  });
}
