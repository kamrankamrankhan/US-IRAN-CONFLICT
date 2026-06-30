/** Slugs excluded from the public site (off-topic or policy cleanup). */
const UNPUBLISHED_POST_SLUGS = new Set([
  'south-africa-plans-presidential-impeachment-probe-over-farmgate-scandal',
  'zelensky-slams-us-envoys-moscow-visits-disrespectful-to-skip-kyiv',
]);

export function isPublishedPostSlug(slug: string): boolean {
  return !UNPUBLISHED_POST_SLUGS.has(slug);
}
