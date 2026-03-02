// =============================================================================
// Blog posts — war/conflict related. Each has its own page at /blog/:slug
// =============================================================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  /** If set, this post links to external coverage; content is used as fallback on our page */
  externalUrl?: string;
  externalSource?: string;
}

export const blogs: BlogPost[] = [
  {
    slug: "aljazeera-us-israel-attack-iran-live",
    title: "Al Jazeera: US-Israel attack on Iran – live blog",
    excerpt: "Live updates and reporting on the US and Israeli strikes on Iran and regional developments from Al Jazeera.",
    date: "2026-03-02",
    content: "Al Jazeera is providing continuous live coverage of the US and Israeli attack on Iran. Follow the link below for real-time updates, on-the-ground reporting, and analysis from the Middle East.",
    externalUrl: "https://www.aljazeera.com/news/liveblog/2026/3/2/us-israel-attack-iran-live",
    externalSource: "Al Jazeera",
  },
  {
    slug: "cnn-widening-us-war-iran-third-day",
    title: "CNN: What we know about the widening US war with Iran",
    excerpt: "CNN's overview of the conflict's third day: casualties, Gulf attacks, oil and travel disruption, and key developments. Updated March 2, 2026.",
    date: "2026-03-02",
    content: "CNN reports on the widening US war with Iran on the conflict's third day: retaliatory strikes, Gulf cities under fire, oil and gas price surges, thousands of flights cancelled, and the death of Iran's supreme leader. Pentagon and White House have given updates on objectives and timeline.",
    externalUrl: "https://edition.cnn.com/2026/03/02/middleeast/us-israel-iran-conflict-what-we-know-intl",
    externalSource: "CNN",
  },
  {
    slug: "cnbc-iran-us-war-live-updates",
    title: "CNBC: Iran-U.S. war live updates – Strait of Hormuz, oil, markets",
    excerpt: "Live business and market updates: Iran and Strait of Hormuz, oil and gold, flight cancellations, and corporate impacts. March 2, 2026.",
    date: "2026-03-02",
    content: "CNBC is covering the Iran-U.S. conflict with a focus on markets and business: Iran's commander on closing the Strait of Hormuz, oil and gold price moves, tanker rates, flight cancellations, FedEx and Amazon delays, and Congress war powers. Follow the link for live updates.",
    externalUrl: "https://www.cnbc.com/2026/03/02/us-iran-live-updates-trump-oil-gold.html",
    externalSource: "CNBC",
  },
  {
    slug: "operation-epic-fury-what-we-know",
    title: "Operation Epic Fury: What We Know So Far",
    excerpt: "A breakdown of the February 2026 US military operation and its immediate aftermath.",
    date: "2026-03-01",
    content: "Operation Epic Fury, launched on February 28, 2026, marked a major escalation in the US-Iran conflict. US forces struck targets across 24 Iranian provinces using a mix of standoff munitions and coordinated air assets. Iranian state media reported significant infrastructure damage and civilian casualties. Tehran responded within hours with ballistic missile and drone attacks against US and partner bases in Iraq, Syria, and the Gulf. The UN Security Council convened an emergency session as the conflict threatened to spiral. This post summarizes what is known from open sources about the operation's scope, targets, and the initial round of retaliation.",
  },
  {
    slug: "iran-nuclear-program-2026-status",
    title: "Iran's Nuclear Program: Status and Breakout Time in 2026",
    excerpt: "Enrichment levels, stockpiles, and what they mean for proliferation risk.",
    date: "2026-02-28",
    content: "Iran's nuclear program has advanced significantly since the collapse of JCPOA revival talks. As of early 2026, Iran is reported to have enriched uranium to levels around 60% and to hold a growing stockpile of material that could be further enriched for weapons use. Experts estimate that breakout time—the period required to produce enough fissile material for one nuclear device—has shortened. This article reviews the current status of Iran's enrichment activities, IAEA reporting, and the implications for regional security and diplomacy.",
  },
  {
    slug: "us-troop-deployments-middle-east",
    title: "US Troop Deployments in the Middle East: Numbers and Missions",
    excerpt: "Where US forces are stationed and what role they play in the current crisis.",
    date: "2026-03-02",
    content: "The United States has bolstered its military presence in the Middle East in response to the crisis with Iran. Estimates suggest between 40,000 and 50,000 US troops are now in the region, including naval assets in the Persian Gulf and Eastern Mediterranean, air force units at bases in Gulf states and Jordan, and ground forces in Syria and Iraq. This post outlines the scale and distribution of US deployments and how they support deterrence, force protection, and contingency operations.",
  },
  {
    slug: "strait-of-hormuz-tensions",
    title: "Strait of Hormuz: Why This Chokepoint Matters",
    excerpt: "The strategic and economic importance of the world's most critical oil waterway.",
    date: "2026-02-25",
    content: "The Strait of Hormuz connects the Persian Gulf to the open ocean and sees roughly one-fifth of global oil shipments. Any serious disruption would send shockwaves through energy markets. Iran has repeatedly signaled its ability to interfere with shipping and has conducted naval exercises near the strait. US and allied navies maintain a presence to deter blockades and protect commercial traffic. This article explains the geography, traffic patterns, and why the strait remains a flashpoint in the US-Iran conflict.",
  },
  {
    slug: "proxy-wars-iraq-syria",
    title: "Proxy Wars: Iran-Backed Militias in Iraq and Syria",
    excerpt: "How Tehran uses non-state actors to extend influence and retaliate.",
    date: "2026-03-03",
    content: "Iran supports a network of militias and political factions in Iraq and Syria. These groups have been used to pressure US forces, attack Israeli interests, and secure supply routes. Since the escalation in February 2026, several attacks have been attributed to Iran-aligned factions. This post examines the main actors, their capabilities, and how proxy activity complicates de-escalation and diplomacy.",
  },
  {
    slug: "sanctions-maximum-pressure-2026",
    title: "Sanctions and Maximum Pressure: What's in Place in 2026",
    excerpt: "An overview of the sanctions regime targeting Iran and its impact.",
    date: "2026-02-20",
    content: "The US has reimposed and expanded sanctions on Iran under a maximum pressure approach. Measures target oil exports, banking, shipping, and key individuals and entities. European and Asian partners have struggled to maintain trade with Iran without triggering US secondary sanctions. This article summarizes the main sanctions categories, how they have evolved in 2026, and the debate over their effectiveness and humanitarian cost.",
  },
  {
    slug: "geneva-nuclear-talks-failure",
    title: "Why the Geneva Nuclear Talks Failed",
    excerpt: "The February 2026 round of negotiations and what went wrong.",
    date: "2026-02-27",
    content: "A final round of nuclear talks in Geneva in late February 2026 failed to produce an agreement. Disputes over the sequence of sanctions relief and nuclear rollback, verification, and Iran's regional activities had plagued the process for years. This post reviews the positions of the parties, the sticking points in the final sessions, and why diplomats left without a deal—setting the stage for the military escalation that followed.",
  },
  {
    slug: "un-security-council-emergency-session",
    title: "UN Security Council Holds Emergency Session on US-Iran Crisis",
    excerpt: "Diplomatic reactions and divisions at the United Nations.",
    date: "2026-03-01",
    content: "The UN Security Council met in emergency session following the outbreak of direct US-Iran military action. Member states expressed alarm and called for de-escalation, but divisions were clear: the US and allies emphasized Iran's nuclear and regional threats, while Russia and China criticized US military action and sanctions. No consensus resolution was adopted. This article summarizes the positions and the limits of multilateral diplomacy in the current crisis.",
  },
  {
    slug: "oil-prices-energy-markets-crisis",
    title: "Oil Prices and Energy Markets in the Midst of Crisis",
    excerpt: "How the conflict is affecting global energy supply and prices.",
    date: "2026-03-04",
    content: "The escalation in the Middle East has injected volatility into oil and gas markets. Prices have swung on news of strikes, retaliation, and threats to shipping. Major consumers and producers are weighing the risk of supply disruption against spare capacity and strategic reserves. This post examines the impact on benchmarks, the role of the Strait of Hormuz, and what could happen if the conflict widens.",
  },
  {
    slug: "israel-iran-shadow-war",
    title: "Israel and Iran: The Shadow War Goes Public",
    excerpt: "Decades of covert conflict and the risk of open confrontation.",
    date: "2026-02-22",
    content: "Israel and Iran have been locked in a long-running shadow war: strikes on nuclear and military sites, cyber operations, and proxy clashes. Israel views a nuclear-armed Iran as an existential threat and has not ruled out military action. With the US-Iran conflict now in the open, the risk of Israeli involvement or miscalculation has grown. This article traces the history of the rivalry and the current dynamics.",
  },
  {
    slug: "gulf-arab-states-divided",
    title: "Gulf Arab States: Divided Between Deterrence and Dialogue",
    excerpt: "How Saudi Arabia, UAE, and others are responding to the crisis.",
    date: "2026-03-05",
    content: "Gulf Arab states have long feared Iranian influence and supported US pressure. They also depend on US security guarantees and want to avoid a full-scale war on their doorstep. In 2026, several have allowed US forces to use their bases while quietly exploring channels to reduce tensions. This post looks at the calculus in Riyadh, Abu Dhabi, and other capitals as the crisis deepens.",
  },
  {
    slug: "civilian-casualties-operation-epic-fury",
    title: "Civilian Casualties and Operation Epic Fury",
    excerpt: "Reports of civilian harm and the debate over proportionality.",
    date: "2026-03-06",
    content: "International organizations and Iranian state media have reported civilian casualties from the February 2026 strikes. The US has stated that it takes precautions to minimize collateral damage and that it targets military and dual-use infrastructure. The exact toll remains disputed. This article reviews what is known about civilian harm and the legal and ethical debates over proportionality and distinction in the operation.",
  },
  {
    slug: "russia-china-iran-support",
    title: "Russia and China: How They View the US-Iran Conflict",
    excerpt: "Moscow and Beijing's positions and their ties to Tehran.",
    date: "2026-02-24",
    content: "Russia and China have criticized US policy toward Iran and have maintained economic and military cooperation with Tehran. Both have interests in the Middle East and in challenging US dominance. At the same time, they have reasons to avoid a full-blown regional war. This post examines their diplomatic stance, their relationship with Iran, and how the crisis could affect great-power competition.",
  },
  {
    slug: "hezbollah-lebanon-standoff",
    title: "Hezbollah and Lebanon: On the Edge of the Conflict",
    excerpt: "Iran's most powerful proxy and the risk of a second front.",
    date: "2026-03-07",
    content: "Hezbollah, Iran's closest ally in the Levant, has a large arsenal and has exchanged fire with Israel repeatedly. A full US-Iran or Israel-Iran war could draw in Lebanon. This article assesses Hezbollah's posture, the calculus in Beirut and Jerusalem, and why the Lebanese front remains one of the most dangerous escalation vectors.",
  },
  {
    slug: "yemen-houthis-red-sea",
    title: "Yemen's Houthis and Red Sea Tensions",
    excerpt: "How the Yemen war ties into the wider US-Iran confrontation.",
    date: "2026-02-23",
    content: "The Houthi movement in Yemen, backed by Iran, has attacked shipping in the Red Sea and launched missiles at Saudi Arabia and Israel. The US and allies have conducted strikes against Houthi targets. The Yemen conflict is both a humanitarian catastrophe and a theater of the broader US-Iran rivalry. This post explains the connection and how Red Sea security has become a flashpoint.",
  },
  {
    slug: "cyber-warfare-us-iran",
    title: "Cyber Warfare in the US-Iran Conflict",
    excerpt: "Digital attacks and infrastructure as a battleground.",
    date: "2026-03-08",
    content: "Both the US and Iran have invested in cyber capabilities. Attacks on industrial systems, government networks, and critical infrastructure have been attributed to state and proxy actors. In a heated military crisis, cyber operations can be used to signal, disrupt, or retaliate without crossing the threshold of armed attack. This article surveys the cyber dimension of the conflict and its implications.",
  },
  {
    slug: "diplomacy-still-possible",
    title: "Is Diplomacy Still Possible? Paths to De-Escalation",
    excerpt: "What it would take to restart talks and reduce tensions.",
    date: "2026-03-09",
    content: "Despite the military escalation, some analysts and officials believe that a return to diplomacy is possible—perhaps after a period of cooling off. This would require credible channels, a willingness to sequence concessions, and regional buy-in. This post outlines the conditions and obstacles for renewed nuclear or broader negotiations and the role of intermediaries.",
  },
  {
    slug: "media-narrative-war",
    title: "The Media and the Narrative War",
    excerpt: "How US, Iranian, and international media frame the conflict.",
    date: "2026-03-10",
    content: "Both sides use media and information operations to shape domestic and international opinion. State media, social media, and international broadcasters offer competing accounts of who started the conflict, who is defending, and what the costs are. This article examines the main narratives and the challenge of verifying facts in a high-stakes information environment.",
  },
  {
    slug: "humanitarian-aid-iran-sanctions",
    title: "Humanitarian Aid and Sanctions: The Debate Over Iran",
    excerpt: "Whether sanctions block medicine and food and how exemptions work.",
    date: "2026-02-21",
    content: "Critics argue that broad sanctions on Iran harm ordinary citizens and restrict humanitarian trade. The US and others maintain that humanitarian exemptions exist and that the regime is responsible for economic mismanagement. This post reviews the debate, the mechanics of exemptions, and the impact of the crisis on aid and health inside Iran.",
  },
  {
    slug: "future-of-jcpoa",
    title: "The JCPOA: Is the Nuclear Deal Dead for Good?",
    excerpt: "The past, present, and possible future of the 2015 agreement.",
    date: "2026-03-11",
    content: "The Joint Comprehensive Plan of Action was designed to constrain Iran's nuclear program in exchange for sanctions relief. After the US withdrawal and Iran's step-by-step breaches, the deal is in tatters. This article asks whether it can be revived, what would need to change, and what alternatives exist for managing the nuclear file.",
  },
  {
    slug: "veterans-and-families-impact",
    title: "Veterans and Military Families: The Human Cost of Escalation",
    excerpt: "How the crisis affects those who serve and their loved ones.",
    date: "2026-03-12",
    content: "Escalation in the Middle East means more deployments, extended rotations, and the risk of casualties. Military families and veterans' organizations watch with anxiety as tensions rise. This post reflects on the human dimension of the conflict for those in uniform and their communities, and the support they need.",
  },
  {
    slug: "global-alliances-nato-partners",
    title: "Global Alliances: How NATO and Partners Are Responding",
    excerpt: "European and Asian allies' stance on the US-Iran crisis.",
    date: "2026-03-13",
    content: "US allies in Europe and Asia have been cautious. Some have supported US deterrence and contributed to maritime security; others have urged restraint and diplomacy. NATO has not been at the center of the response, but individual members have been involved. This article surveys how key allies are positioning themselves and what it means for alliance cohesion.",
  },
];
