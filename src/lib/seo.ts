/**
 * SEO utilities: update document title and meta tags for sharing and crawlers.
 * Optimized for "US Iran War" and related search queries.
 */

import { siteConfig } from '../config';
import { articleMeta } from '../content/featuredArticle';
import { blogs } from '../content/blogs';
import { topicPagesConfig } from '../config';

export interface SEOOptions {
  title: string;
  description: string;
  /** Optional path for canonical (relative). Defaults to current path. */
  path?: string;
  /** Override image for OG/Twitter. Defaults to siteConfig.ogImage. */
  image?: string;
  /** Optional Article JSON-LD for blog/article pages. If not set, any existing Article script is removed. */
  articleJsonLd?: Record<string, unknown>;
  /** Keywords for meta keywords tag */
  keywords?: string;
}

function ensureMeta(name: string, property = false): HTMLMetaElement {
  const attr = property ? 'property' : 'name';
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  return el;
}

function setMeta(name: string, content: string, property = false): void {
  const el = ensureMeta(name, property);
  el.setAttribute('content', content);
}

const SEO_ARTICLE_SCRIPT_ID = 'seo-article-jsonld';

function setArticleJsonLd(articleJsonLd: Record<string, unknown> | undefined): void {
  let script = document.getElementById(SEO_ARTICLE_SCRIPT_ID) as HTMLScriptElement | null;
  if (articleJsonLd) {
    if (!script) {
      script = document.createElement('script');
      script.id = SEO_ARTICLE_SCRIPT_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(articleJsonLd);
  } else if (script) {
    script.remove();
  }
}

function runtimeBaseUrl(): string {
  if (typeof window !== 'undefined' && window.location?.origin) return window.location.origin;
  return siteConfig.siteUrl.replace(/\/$/, '');
}

function toAbsoluteUrl(base: string, maybeUrl: string): string {
  if (/^https?:\/\//i.test(maybeUrl)) return maybeUrl;
  const path = maybeUrl.startsWith('/') ? maybeUrl : `/${maybeUrl}`;
  return `${base}${path}`;
}

function normalizeArticleJsonLd(
  articleJsonLd: Record<string, unknown> | undefined,
  absoluteUrl: string,
): Record<string, unknown> | undefined {
  if (!articleJsonLd) return undefined;
  const cloned: Record<string, unknown> = { ...articleJsonLd };
  cloned.url = absoluteUrl;

  const meop = cloned.mainEntityOfPage;
  if (meop && typeof meop === 'object' && !Array.isArray(meop)) {
    cloned.mainEntityOfPage = { ...(meop as Record<string, unknown>), '@id': absoluteUrl };
  }
  return cloned;
}

/**
 * Update document title, meta tags (description, Open Graph, Twitter Card), and optional Article JSON-LD.
 * Call on route change or when page-specific SEO is needed.
 */
export function updateSEO(options: SEOOptions): void {
  const { title, description, path, image, articleJsonLd, keywords } = options;
  const baseUrl = runtimeBaseUrl();
  const canonicalPath = path ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
  const url = `${baseUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
  const imageUrl = toAbsoluteUrl(baseUrl, image ?? siteConfig.ogImage ?? '/favicon.svg');

  document.title = title;

  setMeta('description', description);
  setMeta('title', title);
  if (keywords) {
    setMeta('keywords', keywords);
  }
  
  // Open Graph
  setMeta('og:title', title, true);
  setMeta('og:description', description, true);
  setMeta('og:image', imageUrl, true);
  setMeta('og:url', url, true);
  setMeta('og:type', articleJsonLd ? 'article' : 'website', true);
  setMeta('og:image:width', '1200', true);
  setMeta('og:image:height', '630', true);
  setMeta('og:site_name', 'US Iran Conflict Analysis', true);
  
  // Twitter Card
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:image', imageUrl);
  setMeta('twitter:site', '@usiranconflict');

  // Canonical URL
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;

  setArticleJsonLd(normalizeArticleJsonLd(articleJsonLd, url));
}

const baseUrl = () => siteConfig.siteUrl.replace(/\/$/, '');

function buildPublisher(): { '@type': string; name: string; url: string; logo?: { '@type': string; url: string } } {
  return {
    '@type': 'Organization',
    name: 'Strategic Intelligence',
    url: baseUrl(),
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl()}/favicon.svg`,
    },
  };
}

function buildArticleJsonLd(
  post: { title: string; excerpt: string; date: string; image?: string },
  url: string,
  keywords?: string
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: post.image ? toAbsoluteUrl(baseUrl(), post.image) : `${baseUrl()}/gallery-6.jpg`,
    author: buildPublisher(),
    publisher: buildPublisher(),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    articleSection: 'Geopolitics',
    keywords: keywords || 'US Iran war, Iran conflict, Middle East crisis',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  };
}

/**
 * Get title, description, and optional Article JSON-LD for a given pathname.
 * Used by App to set SEO on route change.
 */
export function getPageSEO(pathname: string): SEOOptions {
  const baseTitle = 'US Iran War 2026 | Complete Conflict Analysis & Latest News';
  const baseDescription = 'Complete coverage of the US-Iran war 2026: Operation Epic Fury, nuclear tensions, Strait of Hormuz crisis, oil prices impact, and real-time updates. Expert analysis on the Middle East conflict.';
  const baseKeywords = 'US Iran war, Iran war 2026, US Iran conflict, Middle East war, Operation Epic Fury, Iran nuclear program, Strait of Hormuz, Iran US tensions';
  const siteName = 'US Iran Conflict Analysis';

  if (pathname === '/' || pathname === '') {
    return { 
      title: baseTitle, 
      description: baseDescription, 
      path: '/',
      keywords: baseKeywords,
    };
  }

  if (pathname === '/article') {
    const url = `${baseUrl()}/article`;
    return {
      title: `${articleMeta.headline} | ${siteName}`,
      description: articleMeta.metaDescription,
      path: '/article',
      keywords: 'US Iran war analysis, Operation Epic Fury details, Iran conflict analysis, Middle East geopolitics',
      articleJsonLd: {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: articleMeta.headline,
        description: articleMeta.metaDescription,
        datePublished: '2026-03-01',
        dateModified: '2026-03-05',
        author: buildPublisher(),
        publisher: buildPublisher(),
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
        articleSection: 'Geopolitics',
        keywords: 'US Iran war, Iran conflict, Middle East crisis',
      },
    };
  }

  if (pathname === '/blogs') {
    return {
      title: `US Iran War News & Analysis | Latest Updates | ${siteName}`,
      description: 'Latest news and analysis on the US-Iran war 2026. Stay informed on Operation Epic Fury, nuclear tensions, Strait of Hormuz crisis, and regional developments.',
      path: '/blogs',
      keywords: 'US Iran war news, Iran conflict updates, Middle East news, Iran war latest',
    };
  }

  const blogMatch = pathname.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    const post = blogs.find((b) => b.slug === slug);
    if (post) {
      const url = `${baseUrl()}${pathname}`;
      let keywords = 'US Iran war, Iran conflict';
      
      // Comprehensive keywords based on blog content - Original blogs
      const keywordMap: Record<string, string> = {
        'us-iran-conflict-causes-and-impact': 'US Iran conflict, Iran war causes, US Iran relations, Middle East tensions, Iran nuclear program, US sanctions Iran',
        'global-oil-prices-rise-kharg-island-attack': 'Kharg Island attack, Iran oil prices, US Iran oil war, global oil crisis, Iran oil exports, Persian Gulf conflict',
        'strait-of-hormuz-crisis-global-energy-crisis': 'Strait of Hormuz crisis, Iran blockade, global energy crisis, oil shipping, Hormuz chokepoint, Iran US tensions',
        'iran-us-israel-conflict-global-impact': 'Iran US Israel conflict, Middle East war 2026, Strait of Hormuz closure, Iran nuclear program, JCPOA, Hezbollah Lebanon, Iran proxies, US Iran escalation',
        'israel-iran-war-2026-direct-confrontation': 'Israel Iran war 2026, Israel Iran direct conflict, Iran missile attacks, Israel airstrikes Iran, Hezbollah involvement, Middle East escalation',
        'hezbollah-israel-war-2026-lebanon-front': 'Hezbollah Israel war, Lebanon front conflict, Hezbollah 150000 missiles, Iran proxy, Israel Lebanon border, Hezbollah rockets',
        'gaza-war-2026-israel-hamas-humanitarian-crisis': 'Gaza war 2026, Israel Hamas conflict, October 7 attack, Gaza humanitarian crisis, Hamas Iran support, Israel Gaza',
        'us-iran-conflict-causes-nuclear-sanctions-strait-hormuz': 'US Iran conflict, Iran nuclear program, US sanctions, Strait of Hormuz crisis, Iran US relations, nuclear tensions',
        'kharg-island-attack-global-oil-prices-surge': 'Kharg Island attack, global oil prices, Iran oil terminal, oil price surge, energy crisis, Persian Gulf',
        'iran-proxy-network-hezbollah-hamas-houthis': 'Iran proxy network, Hezbollah, Hamas, Houthis, Iran militias, Axis of Resistance, Quds Force',
        'us-iran-israel-war-2026-axis-of-resistance': 'US Iran Israel war 2026, Axis of Resistance, Iran proxy forces, Operation Epic Fury timeline, Iran Israel conflict',
        
        // Oil Prices by Country - Comprehensive Keywords
        'saudi-arabia-oil-prices-2026-global-energy-market': 'Saudi Arabia oil prices, Aramco, OPEC+, Saudi oil production, Middle East oil, Arab Light crude, Saudi Vision 2030, Saudi petroleum exports, Kingdom oil revenue',
        'usa-oil-prices-2026-shale-production-energy-independence': 'USA oil prices, WTI crude, US shale production, American oil, Permian Basin, US strategic petroleum reserve, American energy independence, US oil exports',
        'russia-oil-prices-2026-sanctions-ural-crude-global-market': 'Russia oil prices, Urals crude, Russian oil sanctions, Russia China oil, Russian oil exports, Moscow oil, Russia India oil trade, Russian petroleum',
        'china-oil-prices-2026-worlds-largest-importer-energy-security': 'China oil prices, China oil imports, Chinese oil demand, China strategic petroleum reserve, Sinopec, PetroChina, China energy security, Beijing oil policy',
        'india-oil-prices-2026-second-largest-importer-energy-growth': 'India oil prices, India oil imports, Indian oil demand, Reliance refining, India Russia oil, Indian Oil Corporation, India energy policy, New Delhi oil',
        'uae-oil-prices-2026-emirates-energy-diversification': 'UAE oil prices, ADNOC, Murban crude, Emirates oil production, Abu Dhabi oil, UAE energy diversification, Dubai petroleum, UAE OPEC',
        'kuwait-oil-prices-2026-opec-producer-energy-wealth': 'Kuwait oil prices, KPC, Kuwait oil production, Kuwait Petroleum, OPEC Kuwait, Kuwait Future Generations Fund, Kuwait oil reserves',
        'iraq-oil-prices-2026-opec-second-largest-recovery': 'Iraq oil prices, Iraq oil production, Basra oil, Iraq OPEC, Iraqi oil exports, Iraq reconstruction, Iraq petroleum industry',
        'venezuela-oil-prices-2026-worlds-largest-reserves-crisis': 'Venezuela oil prices, PDVSA, Venezuela oil reserves, Venezuelan oil crisis, oil sanctions Venezuela, Caracas oil, Venezuela petroleum collapse',
        'nigeria-oil-prices-2026-africa-largest-producer-challenges': 'Nigeria oil prices, NNPC, Nigeria oil production, Bonny Light, Niger Delta oil, Nigeria petroleum, African oil producer',
        'canada-oil-prices-2026-oil-sands-production-global-market': 'Canada oil prices, WCS crude, Canadian oil sands, Alberta oil, Western Canadian Select, Canada petroleum, tar sands oil',
        'brazil-oil-prices-2026-pre-salt-deepwater-production': 'Brazil oil prices, Petrobras, pre-salt oil, Brazil oil production, South America oil, Brazilian petroleum, deepwater drilling',
        'norway-oil-prices-2026-north-sea-european-energy': 'Norway oil prices, Equinor, North Sea oil, Johan Sverdrup, Norway Oil Fund, Norwegian petroleum, Europe energy security',
        'uk-oil-prices-2026-north-sea-decline-energy-transition': 'UK oil prices, Brent crude, North Sea oil, UK oil production, British oil, United Kingdom petroleum, Brent benchmark',
        'qatar-oil-prices-2026-lng-giant-petroleum-producer': 'Qatar oil prices, QatarEnergy, Qatar LNG, North Field, Qatar petroleum, Doha oil gas, Qatari energy exports',
        'iran-oil-prices-2026-sanctions-strait-hormuz-global-impact': 'Iran oil prices, Iran oil sanctions, Kharg Island, Iran oil exports, Strait of Hormuz oil, Tehran petroleum, Iranian crude',
        'mexico-oil-prices-2026-pemex-production-decline-reform': 'Mexico oil prices, Pemex, Mexico oil production, Maya crude, Mexican oil, Mexico petroleum reform, Latin America oil',
        'angola-oil-prices-2026-africa-second-largest-opec-member': 'Angola oil prices, Sonangol, Angola oil production, Angola OPEC, African oil, Luanda petroleum, Angola offshore oil',
        'algeria-oil-prices-2026-african-opec-member-gas-producer': 'Algeria oil prices, Sonatrach, Algeria gas exports, Algeria OPEC, North African oil, Algerian petroleum, Sahara oil',
        'libya-oil-prices-2026-instability-african-reserves': 'Libya oil prices, Libya oil production, Libyan oil reserves, NOC Libya, Africa oil, Tripoli petroleum, Libyan conflict oil',
        'operation-epic-fury-april-2026-civilian-corridors-air-defenses':
          'Operation Epic Fury April 2026, US Iran war civilian corridors, air defense Middle East, humanitarian evacuation, missile defense Gulf',
        'us-iran-war-april-2026-un-security-council-divided-allies':
          'US Iran war UN Security Council 2026, Iran sanctions debate, Europe energy security, Russia China Middle East diplomacy',
        'iran-us-cyber-war-2026-critical-infrastructure-hybrid-conflict':
          'Iran US cyber war 2026, critical infrastructure attack, hybrid warfare Middle East, ransomware hospitals, Gulf cyber security',
        'gulf-arab-states-us-iran-war-2026-mediation-oil-neutrality':
          'Gulf states US Iran war, Saudi Arabia Iran mediation, UAE oil policy 2026, OPEC Strait of Hormuz, GCC neutrality',
      };
      
      keywords = keywordMap[slug] || keywords;
      
      return {
        title: `${post.title} | ${siteName}`,
        description: post.excerpt,
        path: pathname,
        image: post.image,
        keywords,
        articleJsonLd: buildArticleJsonLd(post, url, keywords),
      };
    }
  }

  const topicMatch = pathname.match(/^\/topic\/(.+)$/);
  if (topicMatch) {
    const slug = topicMatch[1];
    const topic = topicPagesConfig[slug];
    if (topic) {
      const topicKeywords: Record<string, string> = {
        'operation-epic-fury': 'Operation Epic Fury, US Iran military operation, Iran strikes 2026, US military Iran',
        'nuclear-program': 'Iran nuclear program, Iran uranium enrichment, JCPOA, Iran nuclear deal, nuclear weapons Iran',
        'military-buildup': 'US military Middle East, Iran military, US troops Middle East, Persian Gulf military',
        'economic-sanctions': 'Iran sanctions, US sanctions Iran, Iran economy, oil sanctions, Iran trade',
        'proxy-networks': 'Iran proxy forces, Hezbollah, Iran militias, Middle East proxies, Iran Syria Iraq',
        'regional-impact': 'Middle East conflict, Iran regional influence, Gulf states, regional war Iran',
      };
      
      return {
        title: `${topic.title} | US Iran War 2026 | ${siteName}`,
        description: topic.description,
        path: pathname,
        keywords: topicKeywords[slug] || 'US Iran war, Iran conflict',
      };
    }
  }

  if (pathname === '/live-coverage') {
    return {
      title: `Live Coverage: US Iran War Updates | Breaking News | ${siteName}`,
      description: 'Real-time reporting and breaking news on the US-Iran war from Al Jazeera, CNN, CNBC and other major sources. Live updates on Middle East conflict.',
      path: '/live-coverage',
      keywords: 'US Iran war live, Iran conflict live updates, Middle East breaking news, Iran war today',
    };
  }

  return { 
    title: baseTitle, 
    description: baseDescription, 
    path: pathname,
    keywords: baseKeywords,
  };
}
