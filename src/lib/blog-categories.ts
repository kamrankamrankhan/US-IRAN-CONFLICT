import type { BlogPost } from '@/content/blogs';
import { sortBlogsByPublishDateDesc } from '@/lib/blog-sort';

export type BlogTopicSection = 'oil' | 'war';

function haystack(post: BlogPost): string {
  return `${post.slug} ${post.title} ${post.excerpt}`.toLowerCase();
}

const OIL_MARKERS = [
  'oil-prices',
  'oil-price',
  'oil prices',
  'kharg-island',
  'kharg island',
  'saudi-arabia-oil',
  'usa-oil',
  'russia-oil',
  'china-oil',
  'india-oil',
  'uae-oil',
  'kuwait-oil',
  'iraq-oil',
  'venezuela-oil',
  'nigeria-oil',
  'canada-oil',
  'brazil-oil',
  'norway-oil',
  'uk-oil',
  'qatar-oil',
  'iran-oil',
  'mexico-oil',
  'angola-oil',
  'algeria-oil',
  'libya-oil',
  'global oil',
  'oil market',
  'oil export',
  'crude oil',
  'opec',
  'brent',
  'wti',
  'petroleum',
  'energy market',
  'oil prices spike',
];

const WAR_MARKERS = [
  'israel',
  'hezbollah',
  'hamas',
  'gaza',
  'strait-of-hormuz',
  'strait of hormuz',
  'hormuz',
  'operation-epic',
  'epic fury',
  'nuclear',
  'proxy',
  'axis-of-resistance',
  'us-iran',
  'iran-us',
  'iran-war',
  'us-iran-war',
  'us iran war',
  'iran war',
  'ceasefire',
  'military',
  'blockade',
  'naval',
  'tanker',
  'cargo ship',
  'switzerland',
  'lebanon',
  'tehran',
  'diplomacy',
  'talks',
  'conflict',
  'middle-east',
  'middle east',
  'gulf-arab',
  'night-stalker',
  'little-bird',
  'special-operations',
  'war powers',
  'hegseth',
  'witkoff',
  'strike',
  'sanctions',
];

function matchesAny(text: string, markers: string[]): boolean {
  return markers.some((m) => text.includes(m));
}

/** Primary homepage topic bucket for a post (oil vs war). */
export function getBlogTopicSection(post: BlogPost): BlogTopicSection | null {
  const text = haystack(post);
  const oil = matchesAny(text, OIL_MARKERS);
  const war = matchesAny(text, WAR_MARKERS);

  if (oil && war) {
    if (text.includes('oil-price') || text.includes('oil prices') || text.includes('kharg')) {
      return 'oil';
    }
    return 'war';
  }
  if (oil) return 'oil';
  if (war) return 'war';
  return null;
}

/** Newest-first posts for a homepage topic section, ordered by publish date. */
export function pickBlogsForTopicSection(
  blogs: BlogPost[],
  section: BlogTopicSection,
  limit: number,
): BlogPost[] {
  return sortBlogsByPublishDateDesc(blogs)
    .filter((post) => getBlogTopicSection(post) === section)
    .slice(0, limit);
}

/** Card badge label/colors (shared with list pages). */
export function getBlogCategoryBadge(post: BlogPost): { label: string; color: string } {
  const slug = post.slug.toLowerCase();

  if (slug.includes('oil-prices') || slug.includes('kharg-island')) {
    return { label: 'OIL & ENERGY', color: 'bg-red-600' };
  }
  if (
    slug.includes('saudi-arabia') ||
    slug.includes('uae') ||
    slug.includes('kuwait') ||
    slug.includes('qatar') ||
    slug.includes('iran-oil')
  ) {
    return { label: 'MIDDLE EAST OIL', color: 'bg-amber-600' };
  }
  if (slug.includes('russia') || slug.includes('venezuela')) {
    return { label: 'SANCTIONS', color: 'bg-purple-600' };
  }
  if (slug.includes('china') || slug.includes('india') || slug.includes('japan')) {
    return { label: 'ASIA ENERGY', color: 'bg-blue-600' };
  }
  if (
    slug.includes('usa') ||
    slug.includes('canada') ||
    slug.includes('mexico') ||
    slug.includes('brazil') ||
    slug.includes('nigeria') ||
    slug.includes('angola') ||
    slug.includes('algeria') ||
    slug.includes('libya')
  ) {
    return { label: 'GLOBAL OIL', color: 'bg-teal-600' };
  }
  if (slug.includes('norway') || slug.includes('uk')) {
    return { label: 'NORTH SEA', color: 'bg-cyan-600' };
  }
  if (slug.includes('israel') || slug.includes('hezbollah') || slug.includes('hamas') || slug.includes('gaza')) {
    return { label: 'ISRAEL-IRAN WAR', color: 'bg-red-600' };
  }
  if (slug.includes('night-stalker') || slug.includes('little-bird') || slug.includes('special-operations')) {
    return { label: 'SPECIAL OPS', color: 'bg-slate-700' };
  }
  if (slug.includes('strait-of-hormuz') || slug.includes('hormuz')) {
    return { label: 'STRAIT OF HORMUZ', color: 'bg-orange-800' };
  }
  if (slug.includes('nuclear') || slug.includes('operation-epic')) {
    return { label: 'NUCLEAR PROGRAM', color: 'bg-yellow-600' };
  }
  if (slug.includes('proxy') || slug.includes('axis-of-resistance')) {
    return { label: 'PROXY NETWORKS', color: 'bg-indigo-600' };
  }
  if (slug.includes('sanctions') || slug.includes('economic')) {
    return { label: 'SANCTIONS', color: 'bg-purple-600' };
  }
  if (getBlogTopicSection(post) === 'war') {
    return { label: 'CONFLICT', color: 'bg-red-600' };
  }
  if (getBlogTopicSection(post) === 'oil') {
    return { label: 'OIL & ENERGY', color: 'bg-amber-600' };
  }

  return { label: 'GEOPOLITICS', color: 'bg-gray-600' };
}
