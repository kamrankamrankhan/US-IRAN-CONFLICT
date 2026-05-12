import { siteConfig } from '@/config';

type Item = { name: string; path: string };

export default function BlogBreadcrumbJsonLd({ items }: { items: Item[] }) {
  const base = siteConfig.siteUrl.replace(/\/$/, '');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${base}${it.path.startsWith('/') ? it.path : `/${it.path}`}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
