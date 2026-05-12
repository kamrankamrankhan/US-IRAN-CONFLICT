import { siteConfig } from '@/config';

const LIVE_EMBED_ID = 'gCNeDWCI0vo';

/** VideoObject for the primary homepage live embed (news context). */
export default function HomeLiveVideoJsonLd() {
  const base = siteConfig.siteUrl.replace(/\/$/, '');
  const embedUrl = `https://www.youtube.com/embed/${LIVE_EMBED_ID}`;
  const watchUrl = `https://www.youtube.com/watch?v=${LIVE_EMBED_ID}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'US Iran conflict — live news feed',
    description:
      'Embedded live news stream covering US–Iran tensions, Middle East escalation, and regional security updates.',
    thumbnailUrl: `https://i.ytimg.com/vi/${LIVE_EMBED_ID}/hqdefault.jpg`,
    uploadDate: '2026-01-01T12:00:00+00:00',
    contentUrl: watchUrl,
    embedUrl,
    publisher: {
      '@type': 'Organization',
      name: 'US Iran Conflict Analysis',
      logo: {
        '@type': 'ImageObject',
        url: `${base}/favicon.svg`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
