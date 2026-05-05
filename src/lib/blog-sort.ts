import type { BlogPost } from '@/content/blogs';

/** Newest first; uses numeric dates so ISO strings sort reliably. */
export function sortBlogsByDateDesc(blogs: BlogPost[]): BlogPost[] {
  return [...blogs].sort((a, b) => {
    const ta = postPublicationTimeMs(a.date) ?? 0;
    const tb = postPublicationTimeMs(b.date) ?? 0;
    return tb - ta;
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
    const t = postPublicationTimeMs(b.date);
    if (t === null) return false;
    return t >= cutoff;
  });
}
