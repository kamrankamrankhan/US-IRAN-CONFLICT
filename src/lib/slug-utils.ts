/** Next.js passes `[slug]`; browsers may send encoded segments (e.g. `%3A` for `:`). */
export function normalizeSlugParam(slug: string): string {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}
