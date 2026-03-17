// =============================================================================
// Blog posts — war/conflict related. Each has its own page at /blog/:slug
// =============================================================================

export interface BlogPostSection {
  title: string;
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  /** Optional hero image URL (e.g. /blog-hero.jpg) */
  image?: string;
  /** If set, article body is rendered as sections with H2 headings; otherwise content is used as single block */
  sections?: BlogPostSection[];
  /** If set, this post links to external coverage; content is used as fallback on our page */
  externalUrl?: string;
  externalSource?: string;
  /** If set, the post title becomes a clickable link to this URL (e.g. promo/external destination) */
  titleLink?: string;
}

export const blogs: BlogPost[] = [
  {
    slug: "us-iran-conflict-causes-and-impact",
    title: "US Iran Conflict: Causes and Impact",
    excerpt: "Explore the US Iran conflict, including nuclear tensions, US sanctions on Iran, Strait of Hormuz risks, and rising Middle East instability shaping global security and oil markets.",
    date: "2026-03-03",
    content: "A comprehensive look at the US Iran conflict: causes, nuclear dispute, military escalation, regional dynamics, and global impact.",
    image: "/gallery-6.jpg",
    titleLink: "https://enjoy-game.club/m/share?channel=7&userId=9061450&shareCode=9061450&t=45908&bindCode=0",
    sections: [
      {
        title: "Historical Background of US–Iran Relations",
        content: "A long history of political suspicion and strategic competition is the foundation of the US Iran conflict. The relations have worsened sharply after the Iranian Revolution of 1979 that changed the political regime of Iran and that Islam ceased to be closely associated with Washington. The hostage crisis was another step leading to the increase in hostility and the U.S. policy towards Tehran was developed by generations. Gradually, the foreign policy failed, and economic coercion and strategic isolation were put in place. The US sanctions against Iran turned into one of the main instruments with the purpose to inhibit the power of the country and its military potential in the region. These actions impacted greatly on the Iranian economy as they cemented the political strains between the two nations.",
      },
      {
        title: "Nuclear Dispute and Sanctions",
        content: "One of the factors that have led to the US Iran conflict is the Iran nuclear ambitions. The Iran nuclear program, especially uranium enrichment activities, which have the potential of making weapons, have been the subject of concern of the international community for a long time. In 2015, Iran came into a temporary de-escalation agreement with the Joint Comprehensive Plan of Action (JCPOA nuclear deal) that restricted Iranian nuclear activities in exchange for relief of sanctions. The U.S. withdrawal of the agreement however rekindled the US Iran war that resulted in the reinstatement of sanctions and diplomatic tension. Negotiations have been rather sporadic since that time with trust having been weak.",
      },
      {
        title: "Military Escalation and Regional Tensions",
        content: "In addition to the nuclear factor, the US Iran conflict has also spread to the military and proxy levels in the Middle East. The two countries have fought each other by proxy wars in allied groups, and alliances and this has contributed to the overall instability in the Middle East. The tension has also escalated in the Strait of Hormuz which is a strategically important oil transit route in the world. Any form of disruption in this slim water passage has a direct effect in world energy markets. Confrontation of Iran, naval maneuvers, and missile showcases associated with the Iran missile program have raised the issue of the likelihood of direct military involvement.",
      },
      {
        title: "Israel and Regional Dynamics",
        content: "The US Iran conflict is more of a close relationship with regional security issues especially Israel Iran tensions. Iran has been perceived by Israel as an existential threat by their military strength and nuclear-driven nuclear development and this has resulted in covert and open countermeasures. Meanwhile, the Gulf states watch the situation attentively, juggling between security cooperation with the United States and the danger of regionalization. The U.S. military forces in the Middle East still play a major role in disheartening factors, but they are a cause of a continuum of friction.",
      },
      {
        title: "Economic and Global Impact",
        content: "The impact of the US Iran conflict extends way out of the Middle East. The developments in the region are very sensitive to the energy markets. Any increase in the situation that touches on oil infrastructures or sea transportation may cause price fluctuations around the globe. The international trade, financial systems, and diplomatic alignments also are a subject of sanctions and countermeasures. The situation with the countries that rely on the energy resources of the Middle East, the course of the conflict is monitored by them with the understanding that even minor conflicts can have a worldwide impact.",
      },
      {
        title: "Diplomatic Efforts and Future Outlook",
        content: "There has been ongoing escalation but still there is an attempt to go after it diplomatically. The efforts at indirect negotiations, regional mediation efforts, international pressures are meant to forestall a wider war. There are however unresolved issues regarding the sanctions relief, nuclear transparency, and security in the region, which complicate the process. The US Iran conflict lies in the hands of both governments to make strategic decisions. De-escalation would be based on compromising and re-establishing diplomatic networks. Unless engaged on a long-term basis, the threat of a subsequent confrontation will be considered high.",
      },
      {
        title: "Conclusion",
        content: "To conclude, the US Iran conflict is not a one-time thing, but a complicated geopolitical fight that was influenced by history, nuclear issues, regional relations, and economic interests of the global community. Its development will still affect stability in the Middle East and international security in the future.",
      },
    ],
  },
  {
    slug: "global-oil-prices-rise-kharg-island-attack",
    title: "Global Oil Prices Rise in Response to U.S. Attack on Iran's Kharg Island",
    excerpt: "The global oil market responded to the U.S. attack on Iran's strategic oil export location, Kharg Island. The attack has sparked fears of interruption in global oil supply, causing prices to surge.",
    date: "2026-03-04",
    content: "The attack on Kharg Island has significant implications for global oil markets and energy security worldwide.",
    image: "/blog-kharg-island-oil.jpg",
    sections: [
      {
        title: "Introduction",
        content: "The global oil market responded to the U.S. attack on Iran's strategic oil export location, Kharg Island. The attack, which targeted Iran's military facilities, has sparked fears of an interruption in the global oil supply. The Middle East region is experiencing an increase in tensions, and the oil shipping route via the Strait of Hormuz is in doubt. Oil prices have responded by surging, and economies around the world are feeling the pinch.",
      },
      {
        title: "Why Kharg Island is Important for the Global Oil Supply",
        content: "Kharg Island is an island in the Persian Gulf that plays a crucial role in Iran's oil export business. Approximately 90% of Iran's oil export business passes through this location, making it a strategic location for oil supplies in the region. The strategic location of the island includes large oil storage facilities, oil export facilities that cater to large oil tankers, and military facilities that provide security for the oil facilities. The strategic location of the island makes any military attack in the area significant for the global oil market.",
      },
      {
        title: "Oil Markets React to the Rise in Geopolitical Risks",
        content: "The attack on Iran by the United States has seen the oil market react rapidly. Oil prices, including Brent crude oil and West Texas Intermediate, have recorded a significant rise in response to the attack. According to available information, Brent crude futures have risen above $100, with WTI oil futures also rising in response to the attack. The rise in oil prices is attributed to the sensitivity of the oil market to the rise in geopolitical tensions in the Middle East, where a large portion of the world's oil reserves and oil export business takes place.",
      },
      {
        title: "The Strait of Hormuz: An Essential Energy Choke-Point in the World",
        content: "One of the main concerns that is contributing to the rising oil prices is the possibility that the Strait of Hormuz, the waterway that connects the Persian Gulf to international shipping routes, could be closed. One-fifth of the world's oil is transported through the Strait of Hormuz, making it one of the most important oil routes in the world. If tensions are high and oil cannot be transported through the Strait of Hormuz, or is heavily restricted, then oil supplies could be impacted, leading to even higher oil prices.",
      },
      {
        title: "Economic Ripple Effects on the World",
        content: "If oil prices were to rise, there would be significant ripple effects on the world economy, such as higher oil and transportation costs, understanding inflation in many countries across the world, higher costs on manufacturing and production, and pressures on global stock exchanges. Economists are stating that high oil prices could slow the world economy and raise the price of living.",
      },
      {
        title: "Uncertainty, Risk, and the Possibility of Escalation",
        content: "Despite the reported U.S. attack on Iran, which struck military targets instead of oil facilities, the U.S. has stated that Iran's oil facilities could become targets if Iran interferes with shipping lanes. Iran has hinted at retaliatory attacks, and the region is therefore concerned about the possibility of a wider conflict. Energy markets are therefore closely observing diplomatic efforts, military movements, and shipping movements in the region.",
      },
      {
        title: "What's Next?",
        content: "According to experts, the future direction for oil prices in the world market will depend on several key factors. These include whether shipping in the Strait of Hormuz resumes, possibilities for further military attacks, diplomatic efforts by various world powers, and releases from strategic oil reserves by various economies in the world. If tensions in the region continue to rise, oil prices may rise even higher in the future.",
      },
      {
        title: "Conclusion",
        content: "The attack by the U.S. on Iran's Kharg Island has resulted in an increase in tensions in the region, and the oil markets have therefore become more volatile. Considering that Kharg Island plays a crucial role in Iran's oil export business, any attack in the region could have serious consequences. As the situation in the region evolves, various governments, investors, and oil companies in the world are waiting to see what happens in the region, which could affect the oil market.",
      },
    ],
  },
  {
    slug: "strait-of-hormuz-crisis-global-energy-crisis",
    title: "Strait of Hormuz Crisis: Will a Blockade Lead to a Global Energy Crisis?",
    excerpt: "The Strait of Hormuz, a narrow waterway connecting the Persian Gulf with international waters, has become the focal point of the world. With ongoing USA-Iran tensions, the possibility of a blockade leading to a global energy crisis is rising.",
    date: "2026-03-05",
    content: "An analysis of the strategic importance of the Strait of Hormuz and the potential consequences of a blockade on global energy security.",
    image: "/blog-strait-of-hormuz-crisis.jpg",
    sections: [
      {
        title: "Introduction",
        content: "The Strait of Hormuz, a narrow waterway that connects the Persian Gulf with the Gulf of Oman and the Arabian Sea, has become the focal point of the world. With the ongoing tension between the USA and Iran and the recent military strikes on Iran's Kharg Island, the possibility of a blockade leading to a global energy crisis is on the rise.",
      },
      {
        title: "Why the Strait of Hormuz is Important",
        content: "The Strait of Hormuz is only 21 miles wide at its narrowest point but is the gateway to 20 percent of the world's oil exports. Many countries, including China, India, Japan, and the European Union, use this route as the primary channel for the import of crude oil and liquefied natural gas.",
      },
      {
        title: "Key Facts",
        content: "The Strait of Hormuz has several critical characteristics that make it vital to global energy security. It is 21 miles wide at its narrowest point, with 20 million barrels of oil passing through every day. Major oil-exporting countries that rely on this route include Saudi Arabia, UAE, Iraq, and Iran. Due to its strategic location, even a small disruption may have significant repercussions on the world.",
      },
      {
        title: "Possible Consequences of the Blockade",
        content: "A blockade of the Strait of Hormuz may lead to severe global consequences. Skyrocketing oil prices could see Brent crude oil and WTI oil rise significantly as investors start to worry about the oil supply, and oil futures will become unpredictable. An energy shortage may occur as oil-importing countries face a decline in oil supply, and industries that use oil as their primary source of energy may face a decline in production. Inflation and economic crisis could follow, with transportation costs going up, global inflation rising through the roof, and both developed and developing nations facing the brunt. Geopolitical consequences are also likely, as allies of the USA and Iran may get dragged into the war, and military action may disrupt the oil routes in the Persian Gulf.",
      },
      {
        title: "The Strait in the Spotlight: What the U.S.-Iran Conflict Means",
        content: "The recent U.S. attack on Iran's Kharg Island has highlighted the risks of a blockade. Iran has previously threatened to block the Strait in retaliation for sanctions and military intervention. Even discussions of such an action have oil prices moving upwards, creating uncertainty in the oil markets.",
      },
      {
        title: "What the World Is Doing in Response",
        content: "The world is carefully observing the situation, and several steps have been taken to ensure that a blockade doesn't happen. Strategic reserves have been established by nations such as the United States and Japan that can help in maintaining oil supplies. Alternative routes exist but cannot match the Strait's capabilities. International talks have been held to ensure that a blockade doesn't happen. Even with these precautions, the world would still feel the impact of a blockade.",
      },
      {
        title: "Bottom Line",
        content: "The Strait of Hormuz is not just any strait. It is an important part of the world's oil infrastructure. The current tensions between Iran and the United States have put the Strait in the spotlight. Several people are concerned about the situation, as even a small blockade would have a significant impact on the world.",
      },
    ],
  },
];
