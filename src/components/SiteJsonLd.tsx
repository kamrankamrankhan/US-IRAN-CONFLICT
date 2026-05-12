import { siteConfig } from '@/config';

const base = siteConfig.siteUrl.replace(/\/$/, '');

/** Organization + WebSite + SearchAction (site-limited Google search) for rich results. */
export default function SiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${base}/#organization`,
        name: 'US Iran Conflict Analysis',
        alternateName: ['US-Iran Conflict Coverage', 'US Iran Conflict'],
        url: base,
        logo: {
          '@type': 'ImageObject',
          url: `${base}/favicon.svg`,
        },
        image: `${base}/gallery-6.jpg`,
        founder: {
          '@type': 'Person',
          name: siteConfig.founder.name,
          url: `${base}/about`,
        },
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
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `https://www.google.com/search?q={search_term_string}+site:usiranconflict.com`,
          },
          'query-input': 'required name=search_term_string',
        },
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
