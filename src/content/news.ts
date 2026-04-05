// =============================================================================
// News Content - Real-time news about US-Iran and Israel-Iran conflict
// =============================================================================

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  sourceUrl: string;
  date: string;
  category: 'breaking' | 'military' | 'diplomatic' | 'economic' | 'regional';
  isUrgent?: boolean;
}

export const newsCategories = [
  { id: 'all', label: 'All News' },
  { id: 'breaking', label: 'Breaking' },
  { id: 'military', label: 'Military' },
  { id: 'diplomatic', label: 'Diplomatic' },
  { id: 'economic', label: 'Economic' },
  { id: 'regional', label: 'Regional' },
];

export const newsItems: NewsItem[] = [
  {
    id: 'news-0',
    title: 'Night Stalker Little Bird Helicopters Destroyed at Forward Landing Site in Iran',
    excerpt: 'US Army 160th SOAR AH-6 Little Bird helicopters destroyed at forward airfield in Iran during F-15E WSO rescue mission. Images show burned-out special operations aircraft near Isfahan, approximately 200 miles inside Iranian territory.',
    source: 'The War Zone',
    sourceUrl: 'https://www.twz.com/air/night-stalker-little-bird-helicopters-destroyed-at-forward-landing-site-in-iran',
    date: '2026-04-05',
    category: 'breaking',
    isUrgent: true,
  },
  {
    id: 'news-1',
    title: 'US-Israel-Iran War Live: US hits 9,000 Iranian targets as conflict enters fourth week',
    excerpt: 'The Middle East conflict has entered its fourth week, with tensions showing tentative signs of easing alongside continued military posturing. US President Donald Trump has announced a five-day pause on planned strikes targeting Iranian power and energy infrastructure, citing "very good and productive" talks with Tehran aimed at a complete resolution.',
    source: 'India Today',
    sourceUrl: 'https://www.indiatoday.in/world/story/us-israel-iran-war-live-updates-middle-east-conflict-donald-trump-netanyahu-strait-of-hormuz-lebanon-uae-dubai-gulf-iraq-west-asia-2885659-2026-03-23',
    date: '2026-03-23',
    category: 'breaking',
    isUrgent: true,
  },
  {
    id: 'news-2',
    title: 'Iran denies talks happened after Trump\'s claims of productive negotiations',
    excerpt: 'Iran says no negotiations with the US have taken place since the start of the war after Trump claimed talks happened. Tehran vows to completely close Hormuz if power plants are hit, escalating threats to global energy supplies.',
    source: 'Al Jazeera',
    sourceUrl: 'https://www.aljazeera.com/news/liveblog/2026/3/23/iran-war-live-tehran-vows-to-completely-close-hormuz-if-power-plants-hit',
    date: '2026-03-23',
    category: 'diplomatic',
    isUrgent: true,
  },
  {
    id: 'news-3',
    title: 'Trump\'s new red line could set the Iran war on a fateful course',
    excerpt: 'President Donald Trump said he was considering "winding down" his war with Iran. But a day later, he threatened to "obliterate" the country\'s power plants in an escalation that could reshape the conflict\'s trajectory.',
    source: 'CNN',
    sourceUrl: 'https://www.cnn.com/2026/03/23/politics/trump-iran-war-strait-of-hormuz-oil-gas-prices-analysis',
    date: '2026-03-23',
    category: 'military',
  },
  {
    id: 'news-4',
    title: 'Iran threatens to retaliate against Gulf energy and water facilities',
    excerpt: 'The risks of worsening regional conflict, highlighted by an Iranian threat to hit Gulf states\' desalination plants, are especially acute for the desert countries whose populations and economies depend on these vital resources.',
    source: 'Reuters',
    sourceUrl: 'https://www.reuters.com/world/middle-east/trump-iran-trade-threats-over-energy-targets-war-escalates-2026-03-22',
    date: '2026-03-23',
    category: 'regional',
    isUrgent: true,
  },
  {
    id: 'news-5',
    title: 'How Israel is reacting to Trump\'s "de-escalation" with Iran',
    excerpt: 'Israel\'s government navigates complex diplomatic waters as Trump signals potential de-escalation with Iran while Israeli cities continue to face threats from Iranian-backed forces across multiple fronts.',
    source: 'Al Jazeera',
    sourceUrl: 'https://www.aljazeera.com/video/newsfeed/2026/3/23/how-israel-is-reacting-to-trumps-de-escalation-with-iran',
    date: '2026-03-23',
    category: 'diplomatic',
  },
  {
    id: 'news-6',
    title: 'Iran war at inflection point: Off-ramps needed or escalation likely',
    excerpt: 'Experts warn that the conflict has reached a critical juncture where diplomatic off-ramps are urgently needed. Without de-escalation pathways, the risk of broader regional war continues to grow.',
    source: 'CNBC',
    sourceUrl: 'https://www.cnbc.com/video/2026/03/23/iran-war-at-inflection-point-off-ramps-needed-or-escalation-likely.html',
    date: '2026-03-23',
    category: 'diplomatic',
  },
  {
    id: 'news-7',
    title: 'Iran-Israel-US War: Iran warns of "punitive" strikes as conflict intensifies',
    excerpt: 'Israeli officials said that Iranian forces had for the first time fired long-range missiles, expanding the risk of attacks beyond the Middle East, even as an Iranian strike injured dozens of people not far from Israel\'s nuclear site.',
    source: 'CNBCTV18',
    sourceUrl: 'https://www.cnbctv18.com/world/iran-us-israel-war-live-updates-trump-netanyahu-khamenei-drone-west-asia-conflict-death-toll-oil-markets-liveblog-19872093.htm',
    date: '2026-03-23',
    category: 'military',
  },
  {
    id: 'news-8',
    title: 'What we know on the 21st day of the US and Israel\'s war with Iran',
    excerpt: 'Members of a Red Crescent rescue team work at a building that was damaged by a strike in Tehran, Iran. Comprehensive overview of the conflict\'s current state and key developments.',
    source: 'CNN',
    sourceUrl: 'https://www.cnn.com/2026/03/20/middleeast/us-israel-iran-middle-east-war-day-21-what-we-know-intl-hnk',
    date: '2026-03-20',
    category: 'military',
  },
  {
    id: 'news-9',
    title: 'US-Israel-Iran Conflict: Key Developments and Diplomatic Moves',
    excerpt: 'Stay informed on the evolving US-Israel-Iran conflict with updates on diplomatic moves, missile defenses, and regional stability efforts. Gulf states navigate between supporting allies and avoiding escalation.',
    source: 'Gulf News',
    sourceUrl: 'https://gulfnews.com/world/us-israel-iran-war-march-22-things-you-need-to-know-1.500482393',
    date: '2026-03-22',
    category: 'diplomatic',
  },
  {
    id: 'news-10',
    title: 'Iran awaits Trump threat deadline on Strait of Hormuz closure',
    excerpt: 'Iran faces deadline of US President Donald Trump warning to open Strait of Hormuz. The strategic waterway remains critical for global oil supplies as tensions persist over potential blockade threats.',
    source: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/international/iran-israel-war-usa-strait-of-hormuz-donald-trump-iran-israel-west-asia-live-updates-march-23-2026/article70774180.ece',
    date: '2026-03-23',
    category: 'economic',
  },
  {
    id: 'news-11',
    title: '2026 Iran War marks major shift in Middle East geopolitics',
    excerpt: 'The 2026 Iran War is a conflict centered on Iran that was initiated by the United States and Israel on February 28, 2026, embroiling the entire Middle East region in its most significant crisis in decades.',
    source: 'Britannica',
    sourceUrl: 'https://www.britannica.com/event/2026-Iran-War',
    date: '2026-03-23',
    category: 'military',
  },
  {
    id: 'news-12',
    title: 'Supreme Leader Khamenei killed in opening strikes of 2026 war',
    excerpt: 'The 2026 Iran war first began on 28 February 2026, when the United States and Israel launched surprise airstrikes on multiple sites across Iran, killing Supreme Leader Ali Khamenei and numerous other Iranian officials.',
    source: 'Wikipedia',
    sourceUrl: 'https://en.wikipedia.org/wiki/2026_Iran_war',
    date: '2026-03-22',
    category: 'breaking',
  },
];

// Featured/Breaking news for homepage
export const breakingNews = newsItems.filter(item => item.isUrgent);

// News sources for external links
export const newsSources = [
  { name: 'Al Jazeera', url: 'https://www.aljazeera.com', region: 'Middle East' },
  { name: 'Reuters', url: 'https://www.reuters.com', region: 'International' },
  { name: 'CNN', url: 'https://www.cnn.com', region: 'International' },
  { name: 'BBC', url: 'https://www.bbc.com', region: 'International' },
  { name: 'The Guardian', url: 'https://www.theguardian.com', region: 'UK' },
  { name: 'Gulf News', url: 'https://gulfnews.com', region: 'Gulf' },
  { name: 'Times of Israel', url: 'https://www.timesofisrael.com', region: 'Israel' },
  { name: 'Iran International', url: 'https://www.iranintl.com', region: 'Iran' },
];
