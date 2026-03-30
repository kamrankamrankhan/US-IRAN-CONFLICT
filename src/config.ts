// =============================================================================
// Site Configuration
// Edit ONLY this file to customize all content across the site.
// All animations, layouts, and styles are controlled by the components.
// =============================================================================

// -- Site-wide settings -------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  /** Full site URL for canonical and Open Graph (e.g. https://yoursite.com). No trailing slash. */
  siteUrl: string;
  /** Optional: absolute URL for social share image (e.g. https://yoursite.com/og-image.jpg). Use 1200×630 for best results. Add image to public/ and set this to siteUrl + "/og-image.jpg". */
  ogImage?: string;
}

export const siteConfig: SiteConfig = {
  title: "US Iran War 2026 | Complete Conflict Analysis & Latest News",
  description: "Complete coverage of the US-Iran war 2026: Operation Epic Fury, nuclear tensions, Strait of Hormuz crisis, oil prices impact, and real-time updates. Expert analysis on the Middle East conflict.",
  language: "en",
  siteUrl: "https://usiranconflict.com",
  ogImage: "https://usiranconflict.com/gallery-6.jpg",
};

// -- Hero Section -------------------------------------------------------------
export interface HeroNavItem {
  label: string;
  sectionId: string;
  icon: "disc" | "play" | "calendar" | "music" | "blog" | "radio" | "news";
  /** If set, nav item links to this path instead of scrolling to section */
  path?: string;
}

export interface HeroConfig {
  backgroundImage: string;
  brandName: string;
  decodeText: string;
  decodeChars: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryTarget: string;
  ctaSecondary: string;
  ctaSecondaryTarget: string;
  cornerLabel: string;
  cornerDetail: string;
  navItems: HeroNavItem[];
}

export const heroConfig: HeroConfig = {
  backgroundImage: "/hero-bg.jpg",
  brandName: "STRATEGIC INTELLIGENCE",
  decodeText: "US-IRAN WAR 2026",
  decodeChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*",
  subtitle: "The Complete Analysis: Operation Epic Fury, Nuclear Crisis & Middle East Conflict",
  ctaPrimary: "Explore Analysis",
  ctaPrimaryTarget: "crisis-cube",
  ctaSecondary: "Latest Updates",
  ctaSecondaryTarget: "gallery",
  cornerLabel: "WAR COVERAGE",
  cornerDetail: "MARCH 2026",
  navItems: [
    { label: "Visual Intel", sectionId: "gallery", icon: "play" },
    { label: "Analysis", sectionId: "contact", icon: "music" },
    { label: "Blogs", sectionId: "", icon: "blog", path: "/blogs" },
    { label: "News", sectionId: "", icon: "news", path: "/news" },
    { label: "Live coverage", sectionId: "", icon: "radio", path: "/live-coverage" },
  ],
};

// -- Album Cube Section -------------------------------------------------------
export interface Album {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface AlbumCubeConfig {
  albums: Album[];
  cubeTextures: string[];
  scrollHint: string;
}

export const albumCubeConfig: AlbumCubeConfig = {
  albums: [
    {
      id: 1,
      title: "OPERATION EPIC FURY",
      subtitle: "FEBRUARY 28, 2026",
      image: "/cube-1.jpg",
    },
    {
      id: 2,
      title: "NUCLEAR THRESHOLD",
      subtitle: "60% ENRICHMENT",
      image: "/cube-2.jpg",
    },
    {
      id: 3,
      title: "MILITARY BUILDUP",
      subtitle: "40K-50K TROOPS",
      image: "/cube-3.jpg",
    },
    {
      id: 4,
      title: "IRANIAN RETALIATION",
      subtitle: "BALLISTIC MISSILES",
      image: "/cube-4.jpg",
    },
  ],
  cubeTextures: [
    "/cube-1.jpg",
    "/cube-2.jpg",
    "/cube-3.jpg",
    "/cube-4.jpg",
    "/cube-5.jpg",
    "/cube-6.jpg",
  ],
  scrollHint: "Scroll to explore crisis facets",
};

// -- Parallax Gallery Section -------------------------------------------------
export interface ParallaxImage {
  id: number;
  src: string;
  alt: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  date: string;
}

export interface ParallaxGalleryConfig {
  sectionLabel: string;
  sectionTitle: string;
  galleryLabel: string;
  galleryTitle: string;
  marqueeTexts: string[];
  endCtaText: string;
  parallaxImagesTop: ParallaxImage[];
  parallaxImagesBottom: ParallaxImage[];
  galleryImages: GalleryImage[];
}

export const parallaxGalleryConfig: ParallaxGalleryConfig = {
  sectionLabel: "VISUAL INTELLIGENCE",
  sectionTitle: "Conflict in Focus",
  galleryLabel: "IMAGE ANALYSIS",
  galleryTitle: "Strategic Imagery",
  marqueeTexts: [
    "OPERATION EPIC FURY",
    "24 PROVINCES TARGETED",
    "1,200+ MUNITIONS",
    "133+ CIVILIAN DEATHS",
    "8 NATIONS AFFECTED",
    "40K-50K US TROOPS",
    "972 LBS URANIUM",
    "60% ENRICHED",
  ],
  endCtaText: "View Full Timeline",
  parallaxImagesTop: [
    { id: 1, src: "/para-1.jpg", alt: "F-22 Raptors on airbase" },
    { id: 2, src: "/para-2.jpg", alt: "Military helicopter over desert" },
    { id: 3, src: "/para-3.jpg", alt: "Drone command center" },
    { id: 4, src: "/para-4.jpg", alt: "Strait of Hormuz shipping" },
    { id: 5, src: "/para-5.jpg", alt: "Missile defense systems" },
    { id: 6, src: "/para-6.jpg", alt: "War room strategic planning" },
  ],
  parallaxImagesBottom: [
    { id: 7, src: "/para-6.jpg", alt: "Strategic command center" },
    { id: 8, src: "/para-5.jpg", alt: "Patriot missile battery" },
    { id: 9, src: "/para-4.jpg", alt: "Oil tankers in strait" },
    { id: 10, src: "/para-3.jpg", alt: "Military operations center" },
    { id: 11, src: "/para-2.jpg", alt: "Desert military operations" },
    { id: 12, src: "/para-1.jpg", alt: "Fighter jets at dusk" },
  ],
  galleryImages: [
    { id: 1, src: "/gallery-1.jpg", title: "Regional Unrest", date: "2026.02.28" },
    { id: 2, src: "/gallery-2.jpg", title: "Naval Strike", date: "2026.03.01" },
    { id: 3, src: "/gallery-3.jpg", title: "Satellite Intel", date: "2026.03.01" },
    { id: 4, src: "/gallery-4.jpg", title: "Economic Impact", date: "2026.03.02" },
    { id: 5, src: "/gallery-5.jpg", title: "Proxy Networks", date: "2026.03.02" },
    { id: 6, src: "/gallery-6.jpg", title: "Diplomatic Crisis", date: "2026.03.02" },
  ],
};

// -- Tour Schedule Section ----------------------------------------------------
export interface TourDate {
  id: number;
  date: string;
  time: string;
  city: string;
  venue: string;
  status: "on-sale" | "sold-out" | "coming-soon";
  image: string;
}

export interface TourStatusLabels {
  onSale: string;
  soldOut: string;
  comingSoon: string;
  default: string;
}

export interface TourScheduleConfig {
  sectionLabel: string;
  sectionTitle: string;
  vinylImage: string;
  buyButtonText: string;
  detailsButtonText: string;
  bottomNote: string;
  bottomCtaText: string;
  statusLabels: TourStatusLabels;
  tourDates: TourDate[];
}

export const tourScheduleConfig: TourScheduleConfig = {
  sectionLabel: "CRISIS TIMELINE",
  sectionTitle: "Key Events & Developments",
  vinylImage: "/vinyl.png",
  buyButtonText: "View Details",
  detailsButtonText: "Intel Report",
  bottomNote: "Conflict continues to escalate across 8 nations",
  bottomCtaText: "View Strategic Outlook",
  statusLabels: {
    onSale: "ACTIVE",
    soldOut: "CRITICAL",
    comingSoon: "PENDING",
    default: "MONITORING",
  },
  tourDates: [
    {
      id: 1,
      date: "2026.02.04",
      time: "00:00",
      city: "WASHINGTON DC",
      venue: "Maximum Pressure Campaign Restored",
      status: "sold-out",
      image: "/timeline-1.jpg",
    },
    {
      id: 2,
      date: "2026.02.26",
      time: "14:00",
      city: "GENEVA",
      venue: "Nuclear Negotiations Fail",
      status: "sold-out",
      image: "/timeline-2.jpg",
    },
    {
      id: 3,
      date: "2026.02.28",
      time: "05:00",
      city: "TEHRAN",
      venue: "Operation Epic Fury Launched",
      status: "sold-out",
      image: "/timeline-3.jpg",
    },
    {
      id: 4,
      date: "2026.02.28",
      time: "08:00",
      city: "MIDDLE EAST",
      venue: "Iran Retaliates - 27 Bases Targeted",
      status: "on-sale",
      image: "/gallery-2.jpg",
    },
    {
      id: 5,
      date: "2026.03.01",
      time: "12:00",
      city: "NEW YORK",
      venue: "UN Security Council Emergency Meeting",
      status: "on-sale",
      image: "/timeline-4.jpg",
    },
    {
      id: 6,
      date: "2026.03.02",
      time: "06:00",
      city: "REGIONAL",
      venue: "Sixth Wave Missile Attacks",
      status: "coming-soon",
      image: "/gallery-1.jpg",
    },
  ],
};

// -- Topic Pages (Key Topics) -------------------------------------------------
export interface TopicLink {
  label: string;
  path: string;
  slug: string;
}

export interface TopicPageContent {
  title: string;
  description: string;
  body: string;
  /** Optional hero image for the topic page */
  image?: string;
  /** SEO keywords for the topic */
  keywords?: string;
}

export const topicLinks: TopicLink[] = [
  { label: "Operation Epic Fury", path: "/topic/operation-epic-fury", slug: "operation-epic-fury" },
  { label: "Iran Nuclear Program", path: "/topic/nuclear-program", slug: "nuclear-program" },
  { label: "Military Buildup", path: "/topic/military-buildup", slug: "military-buildup" },
  { label: "Economic Sanctions", path: "/topic/economic-sanctions", slug: "economic-sanctions" },
  { label: "Iran Proxy Networks", path: "/topic/proxy-networks", slug: "proxy-networks" },
  { label: "Regional Impact", path: "/topic/regional-impact", slug: "regional-impact" },
];

export const topicPagesConfig: Record<string, TopicPageContent> = {
  "operation-epic-fury": {
    title: "Operation Epic Fury 2026: US Military Strikes on Iran | Complete Analysis",
    description: "Operation Epic Fury: The February 28, 2026 US-led military operation targeting Iranian nuclear facilities, military bases, and infrastructure across 24 provinces. Over 1,200 munitions deployed, immediate Iranian retaliation followed.",
    body: `<h2>Operation Epic Fury: February 28, 2026 US-Iran Military Escalation</h2>
<p>Operation Epic Fury represents the most significant US military action against Iran in decades, marking a fundamental shift from diplomatic pressure and economic sanctions to direct military confrontation. Launched in the early hours of February 28, 2026, this coordinated operation targeted Iranian military infrastructure, nuclear facilities, and command centers across 24 of Iran's 31 provinces.</p>

<h3>Operation Epic Fury: Key Facts and Timeline</h3>
<ul>
<li><strong>Date:</strong> February 28, 2026, beginning at approximately 05:00 local time</li>
<li><strong>Scope:</strong> 24 Iranian provinces targeted simultaneously</li>
<li><strong>Ordnance:</strong> Over 1,200 precision-guided munitions deployed</li>
<li><strong>Assets:</strong> B-2 stealth bombers, F-35 fighters, Tomahawk cruise missiles, submarine-launched weapons</li>
<li><strong>Primary Targets:</strong> Nuclear facilities (Natanz, Fordow), military bases, IRGC command centers, air defense systems</li>
</ul>

<h3>Targets of Operation Epic Fury</h3>
<p>The operation focused on several categories of targets:</p>
<ul>
<li><strong>Nuclear Facilities:</strong> Uranium enrichment plants at Natanz and Fordow, Arak heavy water reactor, nuclear research centers</li>
<li><strong>Military Infrastructure:</strong> IRGC headquarters, air defense systems, missile production facilities, drone manufacturing sites</li>
<li><strong>Command and Control:</strong> Senior military leadership positions, communication nodes, intelligence facilities</li>
</ul>

<h3>Iranian Retaliation Following Operation Epic Fury</h3>
<p>Within hours of the US strikes, Iran launched a massive retaliatory response. Ballistic missiles targeted US military bases across the region, including facilities in Iraq, Qatar, UAE, and Saudi Arabia. Iran's proxy networks, including Hezbollah in Lebanon and Houthi rebels in Yemen, launched coordinated attacks. The Strait of Hormuz was threatened, triggering global oil price spikes.</p>

<h3>Casualties and Humanitarian Impact</h3>
<p>Reports indicate significant casualties from Operation Epic Fury. Iranian sources report over 130 civilian deaths, including a tragic incident at an elementary school. Military casualties on both sides have been substantial. The operation has created a humanitarian crisis, with infrastructure damage affecting water, electricity, and medical services in targeted areas.</p>

<h3>International Response to Operation Epic Fury</h3>
<p>The operation drew mixed international reactions. US allies including Israel and several Gulf states expressed support, while Russia, China, and numerous other nations condemned the strikes. The UN Security Council convened emergency meetings but failed to reach consensus on a resolution. Global financial markets experienced volatility, and oil prices surged by over 15% in immediate aftermath.</p>

<h3>Strategic Implications of Operation Epic Fury</h3>
<p>Operation Epic Fury has fundamentally altered the US-Iran relationship. Decades of deterrence and proxy conflict have given way to direct military confrontation. The operation's success in degrading Iranian nuclear and military capabilities remains debated, but its impact on regional stability is undeniable. The conflict continues to evolve, with both sides threatening further escalation.</p>`,
    image: "/topic-operation-epic-fury.jpg",
    keywords: "Operation Epic Fury, US Iran war 2026, February 28 2026, US military strikes Iran, Iran retaliation, Natanz Fordow, ballistic missiles, Middle East conflict",
  },
  "nuclear-program": {
    title: "Iran Nuclear Program 2026: Uranium Enrichment, JCPOA & Weapons Threat",
    description: "Iran nuclear program 2026: Complete analysis of uranium enrichment to 60%, JCPOA collapse, nuclear breakout capability, IAEA monitoring, Natanz and Fordow facilities, and international response.",
    body: `<h2>Iran Nuclear Program 2026: From JCPOA to Crisis</h2>
<p>Iran's nuclear program stands at the center of the current Middle East crisis, representing one of the most contentious issues in international relations. With uranium enrichment levels reaching 60% purity—approaching weapons-grade material—and diplomatic efforts in collapse, the program has become a primary driver of regional tensions and military confrontation.</p>

<h3>Iran Nuclear Program: Current Status (2026)</h3>
<ul>
<li><strong>Uranium Enrichment:</strong> 60% purity at Natanz and Fordow facilities</li>
<li><strong>Stockpile:</strong> Approximately 972 kg of enriched uranium</li>
<li><strong>Centrifuges:</strong> Advanced IR-6 centrifuges in operation</li>
<li><strong>Breakout Time:</strong> Estimated 2-3 weeks to weapons-grade material</li>
<li><strong>IAEA Access:</strong> Severely restricted since 2021</li>
</ul>

<h3>History of Iran's Nuclear Program</h3>
<p>Iran's nuclear ambitions date to the 1950s under the US-backed Atoms for Peace program. The 1979 Islamic Revolution initially slowed development, but the program resumed during the Iran-Iraq War. Secret nuclear activities were revealed in 2002, including undeclared facilities at Natanz and Arak. International sanctions followed, leading to years of negotiations.</p>

<h3>JCPOA: The Nuclear Deal and Its Collapse</h3>
<p>The 2015 Joint Comprehensive Plan of Action (JCPOA) represented a diplomatic breakthrough. Iran agreed to limit uranium enrichment to 3.67% and reduce its stockpile in exchange for sanctions relief. For several years, the agreement successfully constrained Iran's nuclear activities. However, the US withdrawal in 2018 and subsequent sanctions prompted Iran to gradually exceed all JCPOA limits.</p>

<h3>Key Nuclear Facilities</h3>
<ul>
<li><strong>Natanz:</strong> Primary uranium enrichment facility, targeted in 2026 strikes</li>
<li><strong>Fordow:</strong> Hardened underground enrichment facility near Qom</li>
<li><strong>Arak:</strong> Heavy water reactor with plutonium production potential</li>
<li><strong>Boushehr:</strong> Nuclear power plant with Russian assistance</li>
</ul>

<h3>Nuclear Weapons Concerns</h3>
<p>The international community's primary concern is Iran's "breakout capability"—the ability to produce enough weapons-grade uranium for a nuclear weapon in a short timeframe. With current enrichment levels and stockpiles, experts estimate Iran could produce sufficient weapons-grade material within weeks. Additionally, Iran's ballistic missile program provides potential delivery systems for nuclear weapons.</p>

<h3>International Response and IAEA Monitoring</h3>
<p>The International Atomic Energy Agency (IAEA) has faced increasing restrictions in monitoring Iran's nuclear activities. Iran has reduced inspector access, disabled surveillance cameras at key facilities, and ceased voluntary implementation of the Additional Protocol. The IAEA has expressed concerns about undeclared nuclear materials and activities.</p>

<h3>2026 Military Strikes on Nuclear Facilities</h3>
<p>Operation Epic Fury specifically targeted Iran's nuclear infrastructure, with strikes on Natanz, Fordow, and other facilities. The extent of damage to Iran's nuclear program remains unclear. Iran has vowed to rebuild and potentially accelerate its nuclear activities, raising concerns that military action may ultimately accelerate rather than prevent nuclear weapons development.</p>`,
    image: "/topic-nuclear-program.jpg",
    keywords: "Iran nuclear program, uranium enrichment, JCPOA, Natanz, Fordow, 60% enrichment, nuclear breakout, IAEA, Iran nuclear weapons, nuclear deal",
  },
  "military-buildup": {
    title: "US Military Buildup Middle East 2026: Troops, Aircraft Carriers & Regional Deployment",
    description: "US military buildup 2026: 40,000-50,000 troops deployed to Middle East, aircraft carrier strike groups, F-35 squadrons, Patriot missiles, and naval forces in Persian Gulf for Iran conflict deterrence.",
    body: `<h2>US Military Buildup in Middle East 2026: Regional Force Deployment</h2>
<p>The United States has undertaken one of the largest military deployments to the Middle East in decades, positioning an estimated 40,000-50,000 troops, multiple aircraft carrier strike groups, and advanced air defense systems in response to the Iran crisis. This buildup represents a significant commitment of military assets aimed at deterring Iranian aggression and protecting US interests and allies.</p>

<h3>US Military Buildup: Force Composition</h3>
<ul>
<li><strong>Personnel:</strong> 40,000-50,000 troops deployed across the region</li>
<li><strong>Naval Assets:</strong> 2-3 aircraft carrier strike groups in Persian Gulf and Arabian Sea</li>
<li><strong>Aircraft:</strong> F-35, F-22, F-15, F-16 squadrons; B-52 and B-2 bombers positioned</li>
<li><strong>Air Defense:</strong> Patriot and THAAD missile batteries in multiple countries</li>
<li><strong>Ground Forces:</strong> Army brigades, Marine expeditionary units, special operations forces</li>
</ul>

<h3>Aircraft Carrier Deployments</h3>
<p>Multiple US Navy aircraft carriers have been positioned in the Persian Gulf and Arabian Sea. Each carrier strike group includes guided-missile cruisers, destroyers, and submarines capable of launching Tomahawk cruise missiles. These naval assets provide significant strike capability, air superiority, and command and control infrastructure for operations against Iran.</p>

<h3>Air Force Deployments</h3>
<p>The US Air Force has deployed advanced aircraft to bases across the Middle East:</p>
<ul>
<li><strong>F-35 Lightning II:</strong> Fifth-generation stealth fighters for strike and air superiority missions</li>
<li><strong>F-22 Raptor:</strong> Advanced air superiority fighters</li>
<li><strong>B-2 Spirit:</strong> Stealth bombers for penetrating Iranian air defenses</li>
<li><strong>B-52 Stratofortress:</strong> Long-range bombers for conventional strike missions</li>
</ul>

<h3>Regional Base Locations</h3>
<p>US forces operate from bases across multiple countries:</p>
<ul>
<li><strong>Qatar:</strong> Al Udeid Air Base (Central Command forward headquarters)</li>
<li><strong>UAE:</strong> Al Dhafra Air Base, naval facilities</li>
<li><strong>Bahrain:</strong> Naval Support Activity, Fifth Fleet headquarters</li>
<li><strong>Kuwait:</strong> Camp Arifjan, Ali Al Salem Air Base</li>
<li><strong>Saudi Arabia:</strong> Multiple air bases and training facilities</li>
</ul>

<h3>Air Defense Systems</h3>
<p>Patriot missile batteries and THAAD systems have been deployed to protect US bases and regional allies from Iranian missile attacks. These systems provide layered defense against short, medium, and intermediate-range ballistic missiles. The effectiveness of these defenses was tested during Iranian retaliatory strikes following Operation Epic Fury.</p>

<h3>Purpose of the Military Buildup</h3>
<p>The US military presence serves multiple objectives:</p>
<ul>
<li><strong>Deterrence:</strong> Discouraging Iranian escalation and attacks on US forces and allies</li>
<li><strong>Defense:</strong> Protecting shipping through the Strait of Hormuz and regional partners</li>
<li><strong>Strike Capability:</strong> Maintaining ability to conduct military operations against Iran</li>
<li><strong>Crisis Response:</strong> Positioning forces for potential evacuation or contingencies</li>
</ul>

<h3>Iranian Response to US Buildup</h3>
<p>Iran has characterized the US military buildup as provocative and threatening. Iranian officials have warned that US bases in the region are within range of Iranian missiles. The buildup has influenced Iranian military planning and contributed to the decision to develop asymmetric capabilities including proxy forces and missile arsenals.</p>`,
    image: "/topic-military-buildup.jpg",
    keywords: "US military buildup, Middle East deployment, aircraft carrier, F-35, Persian Gulf, US troops Iran, Patriot missiles, military bases, US Iran conflict",
  },
  "economic-sanctions": {
    title: "US Sanctions on Iran 2026: Economic Warfare, Oil Embargo & Global Impact",
    description: "US sanctions on Iran 2026: Maximum pressure campaign, oil export restrictions, banking sanctions, humanitarian impact on Iranian civilians, global energy market effects, and Iran's sanctions evasion strategies.",
    body: `<h2>US Sanctions on Iran 2026: Comprehensive Economic Pressure Campaign</h2>
<p>US sanctions on Iran constitute one of the most extensive economic pressure campaigns ever deployed against a nation. Following the restoration of "maximum pressure" policies in 2026, sanctions have intensified, targeting Iran's oil exports, banking sector, shipping industry, and individual officials. The humanitarian and economic impact on Iran has been severe, while global energy markets have experienced significant volatility.</p>

<h3>Types of Sanctions on Iran</h3>
<ul>
<li><strong>Oil Sanctions:</strong> Restrictions on Iran's primary export revenue source</li>
<li><strong>Financial Sanctions:</strong> Exclusion from SWIFT and global banking systems</li>
<li><strong>Secondary Sanctions:</strong> Penalties for third-party countries trading with Iran</li>
<li><strong>Individual Sanctions:</strong> Asset freezes and travel bans on officials</li>
<li><strong>Sectoral Sanctions:</strong> Restrictions on automotive, shipping, construction industries</li>
</ul>

<h3>Maximum Pressure Campaign 2026</h3>
<p>The restoration of maximum pressure policies in February 2026 dramatically intensified economic strain on Iran. Oil exports, historically accounting for 80% of government revenue, have been severely restricted. Secondary sanctions have forced countries including China and India to reduce Iranian oil purchases or risk US penalties. The Iranian rial has lost significant value, contributing to high inflation and reduced living standards.</p>

<h3>Impact on Iranian Economy</h3>
<ul>
<li><strong>Currency:</strong> Iranian rial has lost over 80% of value against US dollar</li>
<li><strong>Inflation:</strong> Annual inflation exceeding 40% on essential goods</li>
<li><strong>Oil Exports:</strong> Reduced from 2.5 million to under 500,000 barrels daily</li>
<li><strong>Unemployment:</strong> Youth unemployment exceeding 30%</li>
<li><strong>GDP:</strong> Significant contraction in multiple years</li>
</ul>

<h3>Humanitarian Impact of Sanctions</h3>
<p>While sanctions technically exempt humanitarian goods including food and medicine, practical difficulties have created shortages. Banks and shipping companies avoid transactions involving Iran even for exempt items due to compliance concerns. Medical equipment shortages, delayed treatments, and reduced access to essential medicines have been documented. Critics argue sanctions constitute collective punishment of civilians.</p>

<h3>Global Energy Market Effects</h3>
<p>Sanctions on Iranian oil exports have contributed to global supply concerns and price volatility. With Iran historically producing 3-4 million barrels daily, removal of this supply from markets affects global prices. The 2026 escalation has added to supply concerns, with oil prices rising over 15% following military action and threats to Strait of Hormuz shipping.</p>

<h3>Iran's Sanctions Evasion Strategies</h3>
<p>Iran has developed sophisticated methods to circumvent sanctions:</p>
<ul>
<li><strong>Ship-to-Ship Transfers:</strong> Transferring oil at sea to disguise origin</li>
<li><strong>Front Companies:</strong> Using third-country entities to facilitate transactions</li>
<li><strong>Cryptocurrency:</strong> Digital currency alternatives to traditional banking</li>
<li><strong>Barter Arrangements:</strong> Trading oil directly for goods without financial transfers</li>
<li><strong>Alternative Partners:</strong> Strengthening ties with China, Russia, and other non-Western partners</li>
</ul>

<h3>Effectiveness Debate: Do Sanctions Work?</h3>
<p>The effectiveness of sanctions remains contested. Supporters argue economic pressure brought Iran to negotiations in 2015 and remains essential for changing Iranian behavior. Critics contend sanctions have not achieved core objectives—Iran continues its nuclear program, supports proxy groups, and represses domestic dissent. Some argue sanctions strengthen hardliners by creating external enemies to blame for economic problems.</p>`,
    image: "/topic-economic-sanctions.jpg",
    keywords: "US sanctions Iran, economic sanctions, Iran oil exports, maximum pressure, Iranian rial, SWIFT, Iran economy, humanitarian impact, secondary sanctions",
  },
  "proxy-networks": {
    title: "Iran Proxy Networks 2026: Hezbollah, Hamas, Houthis & Axis of Resistance",
    description: "Iran proxy networks 2026: Complete analysis of Iran's Axis of Resistance including Hezbollah Lebanon, Hamas Gaza, Houthi Yemen, Iraqi militias, and their role in attacking Israel and US interests across Middle East.",
    body: `<h2>Iran Proxy Networks 2026: The Axis of Resistance Explained</h2>
<p>Iran has built one of the most extensive and sophisticated proxy networks in modern history, creating what Tehran calls the "Axis of Resistance." This network of allied groups across the Middle East allows Iran to project power far beyond its borders, threaten enemies from multiple directions, and maintain plausible deniability for attacks. Understanding these proxy networks is essential for understanding the current Middle East conflict.</p>

<h3>Iran's Major Proxy Groups</h3>
<ul>
<li><strong>Hezbollah (Lebanon):</strong> 150,000 missiles, Iran's most powerful proxy</li>
<li><strong>Hamas (Gaza):</strong> Governed Gaza since 2007, launched October 7 attack on Israel</li>
<li><strong>Houthis (Yemen):</strong> Disrupted Red Sea shipping, attacked Saudi Arabia</li>
<li><strong>Iraqi Militias:</strong> Kataib Hezbollah, Asaib Ahl al-Haq, attacked US forces</li>
<li><strong>Syrian Groups:</strong> Various militias supporting Assad regime</li>
</ul>

<h3>Hezbollah: Iran's Crown Jewel</h3>
<p>Hezbollah in Lebanon represents Iran's most capable proxy force. Founded in 1982 with Iranian support, Hezbollah has evolved into a "state within a state" with an estimated 150,000 missiles pointed at Israel. Iran provides $700 million to $1 billion annually in funding, plus advanced weapons and training. Hezbollah fighters gained combat experience in Syria's civil war. In the current conflict, Hezbollah has opened a critical second front against Israel, launching thousands of rockets and engaging in ground combat.</p>

<h3>Hamas and Palestinian Islamic Jihad</h3>
<p>Iran has been a major supporter of Hamas in Gaza, providing funding, weapons, and training. The October 7, 2023 Hamas attack on Israel demonstrated capabilities Iran helped build. Palestinian Islamic Jihad maintains even closer ties to Iran. While Hamas has some independence from Iran—relations were strained during the Syrian civil war—the alliance has strengthened in recent years. Iran views Palestinian groups as key components of its anti-Israel strategy.</p>

<h3>Houthi Rebels in Yemen</h3>
<p>The Houthis have emerged as a significant Iranian proxy, particularly through their attacks on Red Sea shipping. Iranian-supplied missiles and drones have enabled attacks on commercial vessels and Saudi territory. The Houthis' disruption of global trade through the Bab al-Mandab strait demonstrates how a relatively weak proxy can impose significant costs on the global economy. Their attacks continue into 2026 as part of Iran's multi-front pressure campaign.</p>

<h3>Iraqi Shiite Militias</h3>
<p>Iran has cultivated extensive influence among Iraqi Shiite groups, building militias that operate as part of the Popular Mobilization Forces while maintaining loyalty to Iran. Groups including Kataib Hezbollah and Asaib Ahl al-Haq have attacked US forces in Iraq multiple times. Iran's influence in neighboring Iraq gives it leverage over a country hosting US troops and major oil production.</p>

<h3>Iran's Strategic Logic: Why Proxies?</h3>
<p>Iran's reliance on proxies serves multiple strategic purposes:</p>
<ul>
<li><strong>Strategic Depth:</strong> Attacking enemies from multiple directions</li>
<li><strong>Plausible Deniability:</strong> Difficult to attribute attacks directly to Iran</li>
<li><strong>Cost Effectiveness:</strong> Projecting power at relatively low cost</li>
<li><strong>Deterrence:</strong> Creating threats that complicate enemy responses</li>
<li><strong>Leverage:</strong> Building negotiating positions and regional influence</li>
</ul>

<h3>IRGC Quds Force: Coordinating Proxy Operations</h3>
<p>The Islamic Revolutionary Guard Corps (IRGC) Quds Force coordinates Iran's proxy network. The unit, formerly led by Qasem Soleimani until his 2020 assassination by US forces, manages weapons transfers, training, operational planning, and financial support to proxy groups across the region.</p>

<h3>Proxy Networks in the 2026 Conflict</h3>
<p>The 2026 escalation has demonstrated both the strengths and limits of Iran's proxy strategy. Hezbollah has opened a major front against Israel. Hamas, though damaged, continues resistance. Houthis have disrupted global shipping. Iraqi militias threaten US forces. However, the shift to direct confrontation between Iran and the US/Israel has exposed Iran itself to attack in ways that proxy warfare was designed to avoid.</p>`,
    image: "/topic-proxy-networks.jpg",
    keywords: "Iran proxy network, Hezbollah, Hamas, Houthis, Axis of Resistance, Iranian militias, IRGC Quds Force, Kataib Hezbollah, Iran Israel proxy war",
  },
  "regional-impact": {
    title: "Regional Impact 2026: Middle East Conflict Effects on 8+ Nations",
    description: "Regional impact 2026: How US-Iran conflict affects Israel, Saudi Arabia, UAE, Iraq, Syria, Lebanon, Yemen, and global markets. Strait of Hormuz crisis, oil prices, refugees, and escalation risks explained.",
    body: `<h2>Regional Impact 2026: Middle East Crisis Spillover Effects</h2>
<p>The US-Iran conflict has created far-reaching consequences across the Middle East and beyond, affecting at least eight nations directly and many more through economic and diplomatic ripple effects. From threats to global energy supplies through the Strait of Hormuz to refugee flows and the risk of broader regional war, the conflict's impact extends far beyond the immediate US-Iran bilateral relationship.</p>

<h3>Countries Directly Affected by the Conflict</h3>
<ul>
<li><strong>Israel:</strong> Direct missile attacks from Iran and Hezbollah, ongoing Gaza war</li>
<li><strong>Lebanon:</strong> Hezbollah-Israel conflict, displaced civilians, economic crisis</li>
<li><strong>Iraq:</strong> Militia attacks on US forces, Iranian influence, territory for operations</li>
<li><strong>Syria:</strong> Iranian military presence, Israeli airstrikes, proxy operations</li>
<li><strong>Yemen:</strong> Houthi attacks on shipping, Saudi border conflicts</li>
<li><strong>Saudi Arabia:</strong> Threatened by Iran and Houthis, oil infrastructure at risk</li>
<li><strong>UAE:</strong> US base host, potential Iranian target, economic exposure</li>
<li><strong>Qatar:</strong> US Central Command headquarters, mediation role</li>
</ul>

<h3>Strait of Hormuz: Global Energy Chokepoint</h3>
<p>The Strait of Hormuz represents the most critical flashpoint with global implications. This narrow waterway, only 21 miles wide at its narrowest point, handles approximately 20% of global oil consumption—roughly 21 million barrels daily. Iranian threats to close the strait have caused oil prices to surge. Any sustained closure would trigger global economic crisis, affecting energy-importing nations worldwide.</p>

<h3>Israel-Iran Direct Conflict</h3>
<p>Israel has moved from proxy conflict with Iran to direct confrontation. Iranian ballistic missiles have struck Israeli cities. Israel's missile defense systems—Iron Dome, David's Sling, and Arrow—have intercepted most threats, but some have penetrated. Israel has conducted airstrikes on Iranian territory, marking a fundamental shift in the conflict. The opening of a second front by Hezbollah in Lebanon has divided Israeli military focus.</p>

<h3>Gulf States: Between Security and Escalation</h3>
<p>Saudi Arabia, UAE, and other Gulf states face difficult choices. They host US military facilities and view Iran as a threat, but fear being caught in crossfire. Iranian-backed groups have attacked Saudi oil facilities in the past, and the current conflict raises risks of similar strikes. Gulf states have sought to balance security cooperation with the US against diplomatic engagement with Iran.</p>

<h3>Refugee Crisis and Humanitarian Impact</h3>
<p>The conflict has created significant refugee flows:</p>
<ul>
<li><strong>Lebanon:</strong> Hundreds of thousands displaced from southern regions</li>
<li><strong>Israel:</strong> 60,000+ evacuated from northern communities</li>
<li><strong>Gaza:</strong> Nearly entire population displaced, humanitarian catastrophe</li>
<li><strong>Yemen:</strong> Ongoing displacement from civil war and Houthi conflict</li>
</ul>

<h3>Global Economic Impact</h3>
<ul>
<li><strong>Oil Prices:</strong> Surged 15-20% following February 2026 escalation</li>
<li><strong>Shipping:</strong> Red Sea crisis increased costs, delayed deliveries</li>
<li><strong>Supply Chains:</strong> Disruption affecting multiple industries</li>
<li><strong>Financial Markets:</strong> Volatility across global exchanges</li>
<li><strong>Inflation:</strong> Energy costs contributing to global inflation</li>
</ul>

<h3>Risk of Broader Regional War</h3>
<p>Multiple factors could trigger expansion of the conflict:</p>
<ul>
<li>Major missile attack causing significant casualties in Israel or Gulf states</li>
<li>Successful closure of Strait of Hormuz</li>
<li>Direct Iranian attack on Saudi or UAE oil facilities</li>
<li>Large-scale Israeli ground invasion of Lebanon</li>
<li>Iranian nuclear test or declared nuclear capability</li>
</ul>

<h3>International Diplomatic Response</h3>
<p>The UN Security Council has convened emergency sessions but failed to reach consensus. Russia and China have opposed strong condemnation of Iran. European nations have called for de-escalation while maintaining some sanctions. Regional organizations including the Arab League have sought diplomatic solutions. The complexity of the conflict, with multiple actors and proxy groups, has complicated diplomatic efforts.</p>

<h3>Long-Term Regional Implications</h3>
<p>The 2026 conflict will reshape Middle Eastern politics for years to come:</p>
<ul>
<li><strong>Security Architecture:</strong> Potential restructuring of regional security arrangements</li>
<li><strong>Alliances:</strong> Shifts in relationships between US, Israel, and Arab states</li>
<li><strong>Iran's Position:</strong> Either enhanced regional influence or isolation</li>
<li><strong>Israeli Security:</strong> Fundamental reassessment of deterrence strategy</li>
<li><strong>Global Energy:</strong> Accelerated transition away from Middle East oil dependence</li>
</ul>`,
    image: "/topic-regional-impact.jpg",
    keywords: "Regional impact, Middle East conflict, Strait of Hormuz, Israel Iran war, Saudi Arabia, UAE, oil prices, refugee crisis, Gulf states, regional war risk",
  },
};

// -- Footer Section -----------------------------------------------------------
export interface FooterImage {
  id: number;
  src: string;
}

export interface SocialLink {
  icon: "instagram" | "twitter" | "youtube" | "music";
  label: string;
  href: string;
}

export interface FooterConfig {
  portraitImage: string;
  portraitAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  artistLabel: string;
  artistName: string;
  artistSubtitle: string;
  brandName: string;
  brandDescription: string;
  quickLinksTitle: string;
  quickLinks: TopicLink[];
  contactTitle: string;
  emailLabel: string;
  email: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  subscribeAlertMessage: string;
  copyrightText: string;
  bottomLinks: string[];
  socialLinks: SocialLink[];
  galleryImages: FooterImage[];
}

export const footerConfig: FooterConfig = {
  portraitImage: "/footer-portrait.jpg",
  portraitAlt: "Strategic Leadership",
  heroTitle: "US IRAN WAR COVERAGE",
  heroSubtitle: "Complete analysis of the US-Iran conflict: Operation Epic Fury, nuclear tensions, Strait of Hormuz crisis, and regional escalation",
  artistLabel: "ANALYSIS BY",
  artistName: "STRATEGIC INTELLIGENCE",
  artistSubtitle: "US Iran War Coverage 2026",
  brandName: "US-IRAN WAR 2026",
  brandDescription: "Complete coverage of the US-Iran war including Operation Epic Fury strikes, Iranian nuclear program, Strait of Hormuz tensions, and global economic impact. Expert analysis and real-time updates on the escalating Middle East conflict.",
  quickLinksTitle: "Key Topics",
  quickLinks: topicLinks,
  contactTitle: "Intelligence Contact",
  emailLabel: "Email",
  email: "kamrankamrankhan825@gmail.com",
  newsletterTitle: "War Updates",
  newsletterDescription: "Subscribe for real-time updates on the US-Iran conflict",
  newsletterButtonText: "Subscribe",
  subscribeAlertMessage: "Crisis alert subscription activated. Stay informed on US Iran war developments.",
  copyrightText: "© 2026 US Iran War Analysis. All rights reserved.",
  bottomLinks: [
    "Privacy Policy",
    "Terms of Use",
    "Classification Guide",
  ],
  socialLinks: [
    { icon: "twitter", label: "Twitter", href: "https://twitter.com/usiranconflict" },
    { icon: "youtube", label: "YouTube", href: "#" },
    { icon: "music", label: "Podcast", href: "#" },
  ],
  galleryImages: [
    { id: 1, src: "/cube-1.jpg" },
    { id: 2, src: "/cube-2.jpg" },
    { id: 3, src: "/cube-3.jpg" },
    { id: 4, src: "/cube-4.jpg" },
    { id: 5, src: "/cube-5.jpg" },
    { id: 6, src: "/cube-6.jpg" },
  ],
};
