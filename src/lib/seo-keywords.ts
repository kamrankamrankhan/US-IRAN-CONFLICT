// =============================================================================
// SEO Keywords & Content Strategy for US-Iran Conflict Website
// =============================================================================

// Primary Keywords (High Priority)
export const primaryKeywords = {
  main: [
    "Iran Israel conflict",
    "US Iran war 2026",
    "Middle East war updates",
    "Iran Israel war impact",
    "Middle East politics analysis",
  ],
  secondary: [
    "Iran nuclear program",
    "Israel Iran tensions",
    "US Iran relations 2026",
    "Strait of Hormuz crisis",
    "Iran sanctions impact",
    "Middle East geopolitical crisis",
  ],
};

// Long-tail Keywords for Content Integration
export const longTailKeywords = [
  "What caused the Iran Israel conflict 2026",
  "How does US Iran war affect oil prices",
  "Iran Israel war latest news today",
  "Impact of Iran conflict on global economy",
  "Iran nuclear program latest updates",
  "Strait of Hormuz shipping disruption 2026",
  "Hezbollah Israel border conflict",
  "Iran proxy networks in Middle East",
  "US military presence in Middle East 2026",
  "Iran sanctions economic impact analysis",
  "Israel Iran direct confrontation 2026",
  "Middle East oil price crisis",
  "Operation Epic Fury Iran strikes",
  "Iran ballistic missile attacks",
  "Gulf states response to Iran conflict",
];

// LSI Keywords (Latent Semantic Indexing)
export const lsiKeywords = {
  conflict: [
    "geopolitical tensions",
    "military escalation",
    "regional instability",
    "armed conflict",
    "proxy warfare",
    "deterrence strategy",
    "military confrontation",
    "ceasefire negotiations",
  ],
  oil: [
    "crude oil prices",
    "Brent crude",
    "WTI oil",
    "OPEC production",
    "energy security",
    "oil supply disruption",
    "petroleum exports",
    "energy markets",
    "gasoline prices",
    "strategic petroleum reserve",
  ],
  politics: [
    "diplomatic relations",
    "international sanctions",
    "foreign policy",
    "nuclear negotiations",
    "JCPOA",
    "strategic alliances",
    "regional diplomacy",
    "peace talks",
  ],
  military: [
    "airstrikes",
    "ballistic missiles",
    "air defense systems",
    "military bases",
    "naval operations",
    "drone attacks",
    "missile defense",
    "military buildup",
  ],
};

// Content Clusters for SEO
export const contentClusters = [
  {
    name: "Iran Nuclear Program",
    slug: "nuclear-program",
    description: "Comprehensive coverage of Iran's nuclear ambitions, uranium enrichment, and international response.",
    keywords: ["Iran nuclear program", "uranium enrichment", "JCPOA", "nuclear negotiations", "IAEA"],
    relatedArticles: [
      "/blog/iran-nuclear-program-2026-update",
      "/topic/nuclear-program",
    ],
  },
  {
    name: "Israel Iran Conflict",
    slug: "israel-iran-conflict",
    description: "Direct confrontations, proxy warfare, and escalating tensions between Israel and Iran.",
    keywords: ["Israel Iran war", "Iran Israel conflict", "Hezbollah", "Hamas", "Tel Aviv attacks"],
    relatedArticles: [
      "/blog/israel-iran-war-2026-direct-confrontation",
      "/blog/hezbollah-israel-war-2026-lebanon-front",
    ],
  },
  {
    name: "US Military Involvement",
    slug: "us-military-involvement",
    description: "American military operations, troop deployments, and strategic interests in the Iran conflict.",
    keywords: ["US Iran war", "Operation Epic Fury", "US military Middle East", "American strikes Iran"],
    relatedArticles: [
      "/blog/us-iran-conflict-causes-nuclear-sanctions-strait-hormuz",
    ],
  },
  {
    name: "Oil & Energy Markets",
    slug: "oil-energy-markets",
    description: "Impact of the Iran conflict on global oil prices, energy security, and OPEC decisions.",
    keywords: ["oil prices Iran", "Brent crude", "OPEC", "energy crisis", "Strait of Hormuz oil"],
    relatedArticles: [
      "/blog/kharg-island-attack-global-oil-prices-surge",
      "/blog/global-oil-prices-iran-conflict-impact",
    ],
  },
  {
    name: "Sanctions & Economy",
    slug: "sanctions-economy",
    description: "Economic sanctions on Iran, their impact on the Iranian economy, and global trade effects.",
    keywords: ["Iran sanctions", "economic impact", "trade restrictions", "oil embargo"],
    relatedArticles: [
      "/blog/us-sanctions-iran-economic-impact",
    ],
  },
  {
    name: "Regional Proxy Networks",
    slug: "proxy-networks",
    description: "Iran's proxy forces across the Middle East including Hezbollah, Hamas, and Houthi rebels.",
    keywords: ["Iran proxy networks", "Hezbollah", "Hamas", "Houthis", "Axis of Resistance"],
    relatedArticles: [
      "/blog/iran-proxy-network-hezbollah-hamas-houthis",
      "/topic/proxy-networks",
    ],
  },
];

// Meta Description Templates
export const metaDescriptions = {
  home: "Complete coverage of US-Iran war 2026, Israel-Iran conflict & Middle East crisis. Real-time updates on Operation Epic Fury, nuclear tensions, oil prices & regional impact.",
  blogs: "Expert analysis on US-Iran war 2026, Israel-Iran conflict, Middle East tensions & global oil markets. In-depth articles on nuclear program, sanctions & regional impact.",
  news: "Breaking news & live coverage of US-Iran conflict, Israel-Iran war & Middle East crisis. Real-time updates from major news sources worldwide.",
  default: "US Iran Conflict Analysis - Comprehensive coverage of Middle East tensions, nuclear program, sanctions & global oil market impact.",
};

// Article Headline Templates (SEO-Optimized)
export const headlineTemplates = {
  breaking: "{Topic}: Breaking Updates on Iran Israel Conflict {Year}",
  analysis: "Iran Israel War Analysis: {Specific Topic} | Expert Insights",
  oil: "Oil Prices Surge: How Iran Conflict Impacts Global Energy Markets",
  timeline: "Iran Israel Conflict Timeline: Key Events & Developments in {Year}",
  faq: "{Topic} Explained: What You Need to Know About Iran Israel Tensions",
};

// Social Media Share Templates
export const socialShareTemplates = {
  twitter: {
    prefix: "🚨 BREAKING: ",
    suffix: " | Follow @usiranconflict for the latest updates",
    hashtags: ["IranConflict", "MiddleEastCrisis", "IsraelIran", "USIranWar"],
  },
  facebook: {
    prefix: "Latest on the Iran-Israel Conflict: ",
    callToAction: "Read the full analysis",
  },
  linkedin: {
    prefix: "Geopolitical Analysis: ",
    suffix: " | US Iran Conflict Coverage",
  },
};

// Regional Keywords (for Local SEO)
export const regionalKeywords = [
  "Iran conflict USA news",
  "Middle East war updates in Israel",
  "Iran Israel conflict Europe impact",
  "Gulf states Iran tensions",
  "Saudi Arabia Iran conflict",
  "Iran war updates for Americans",
  "Middle East crisis Asia impact",
];

// Trending Topics (for dynamic content)
export const trendingTopics = [
  {
    topic: "Operation Epic Fury",
    keywords: ["Operation Epic Fury", "US strikes Iran", "military operation Iran"],
    searchVolume: "high",
  },
  {
    topic: "Strait of Hormuz Closure",
    keywords: ["Strait of Hormuz", "oil shipping disruption", "Persian Gulf"],
    searchVolume: "high",
  },
  {
    topic: "Kharg Island Attack",
    keywords: ["Kharg Island", "Iran oil terminal", "oil export disruption"],
    searchVolume: "medium",
  },
  {
    topic: "Hezbollah Israel Front",
    keywords: ["Hezbollah Israel", "Lebanon border", "rocket attacks"],
    searchVolume: "high",
  },
  {
    topic: "Iran Nuclear Breakout",
    keywords: ["Iran nuclear weapon", "uranium enrichment", "breakout time"],
    searchVolume: "medium",
  },
];

// FAQ Schema Data
export const faqSchemaData = [
  {
    question: "What is the current status of the Iran Israel conflict?",
    answer: "The Iran Israel conflict has escalated significantly in 2026, with direct military confrontations replacing proxy warfare. Iran has launched ballistic missile attacks on Israel, while Israel has conducted airstrikes on Iranian targets. The conflict now involves direct state-on-state confrontation.",
  },
  {
    question: "How does the US Iran war affect oil prices?",
    answer: "The US Iran war has caused significant disruption to global oil markets. Brent crude prices have exceeded $100 per barrel due to threats to the Strait of Hormuz, through which 20% of global oil passes. The attack on Iran's Kharg Island oil terminal has further constrained supply expectations.",
  },
  {
    question: "What is Operation Epic Fury?",
    answer: "Operation Epic Fury is the US military operation launched on February 28, 2026, targeting Iranian military infrastructure and nuclear facilities across 24 Iranian provinces. The operation involved over 1,200 munitions and marked a major escalation in US-Iran tensions.",
  },
  {
    question: "Why is the Strait of Hormuz important?",
    answer: "The Strait of Hormuz is a critical chokepoint through which approximately 20% of global oil supply passes. Iran's threats to close the strait in response to US attacks have created significant concerns about global energy security and oil price volatility.",
  },
  {
    question: "What role does Hezbollah play in the Iran Israel conflict?",
    answer: "Hezbollah, Iran's most powerful proxy force in Lebanon, has opened a second front against Israel, launching rockets and missiles into northern Israel. This has expanded the conflict beyond Iran and Israel to include Lebanon and threatens broader regional escalation.",
  },
];

// Export helper function to generate meta tags
export function generateMetaTags(page: string, customData?: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
}) {
  const baseTitle = "US Iran War 2026 | Israel Iran Conflict | Middle East Analysis";
  const baseDescription = metaDescriptions[page as keyof typeof metaDescriptions] || metaDescriptions.default;
  
  return {
    title: customData?.title || baseTitle,
    description: customData?.description || baseDescription,
    keywords: customData?.keywords || primaryKeywords.main,
    image: customData?.image || "/gallery-6.jpg",
  };
}
