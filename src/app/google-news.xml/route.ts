import { siteConfig } from '@/config';
import { getAllBlogsMerged } from '@/lib/get-all-blogs';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const PUBLICATION = 'US Iran Conflict Analysis';
const PUBLICATION_LANG = 'en';

export async function GET() {
  const base = siteConfig.siteUrl.replace(/\/$/, '');
  const posts = await getAllBlogsMerged();
  const recent = posts.slice(0, 100);

  const urls = recent
    .map((p) => {
      const loc = `${base}/blog/${p.slug}`;
      const pub = p.date.includes('T') ? p.date : `${p.date}T12:00:00Z`;
      const title = escapeXml(p.title);
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <news:news>
      <news:publication>
        <news:name>${escapeXml(PUBLICATION)}</news:name>
        <news:language>${PUBLICATION_LANG}</news:language>
      </news:publication>
      <news:publication_date>${escapeXml(pub)}</news:publication_date>
      <news:title>${title}</news:title>
    </news:news>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
