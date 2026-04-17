import { siteConfig } from '@/config';

/** Organization + WebSite schema for rich results (contact, brand). */
export default function SiteJsonLd() {
  const base = siteConfig.siteUrl.replace(/\/$/, '');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${base}/#organization`,
        name: 'US Iran Conflict Analysis',
        alternateName: ['Strategic Intelligence', 'US-Iran Conflict'],
        url: base,
        logo: {
          '@type': 'ImageObject',
          url: `${base}/favicon.svg`,
        },
        image: `${base}/gallery-6.jpg`,
        sameAs: [
          'https://twitter.com/usiranconflict',
          'https://www.youtube.com/@usiranconflict',
          'https://www.facebook.com/usiranconflict',
          'https://www.linkedin.com/company/usiranconflict',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: siteConfig.contactPhone,
          email: siteConfig.contactEmail,
          contactType: 'editorial',
          areaServed: 'Worldwide',
          availableLanguage: ['English'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${base}/#website`,
        url: base,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { '@id': `${base}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
