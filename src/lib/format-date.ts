/** Human-readable date for articles (e.g. April 28, 2026). Falls back to ISO string if parse fails. */
export function formatArticleDate(isoDate: string): string {
  const trimmed = isoDate?.trim()?.slice(0, 10);
  if (!trimmed) return isoDate;
  const d = new Date(trimmed + 'T12:00:00');
  if (Number.isNaN(d.getTime())) return isoDate;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
