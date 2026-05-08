/**
 * Per-slug keywords for `/blog/[slug]` (supplements fallback derivation from title).
 * Keep aligned with `src/content/blogs.ts` and Keystatic post slugs.
 */
export const BLOG_SLUG_KEYWORDS: Record<string, string> = {
  // Israel / Gaza / Lebanon
  'israel-iran-war-2026-direct-confrontation':
    'Israel Iran war 2026, Middle East missile strikes, Iron Dome, direct Israel Iran conflict, Hezbollah, Operation Epic Fury, regional war',
  'hezbollah-israel-war-2026-lebanon-front':
    'Hezbollah Israel war, Lebanon conflict 2026, Iran proxy, rockets Israel border, Shiite militants, Lebanese front',
  'gaza-war-2026-israel-hamas-humanitarian-crisis':
    'Gaza war 2026, Israel Hamas crisis, Gaza humanitarian corridor, Rafah crossings, hostage releases, wartime famine risk',
  // US-Iran core
  'us-iran-conflict-causes-nuclear-sanctions-strait-hormuz':
    'US Iran conflict, Strait of Hormuz, Iran nuclear breakout, uranium enrichment JCPOA, maximum pressure sanctions Gulf',
  'kharg-island-attack-global-oil-prices-surge':
    'Kharg Island strike, Persian Gulf oil outage, Tehran export collapse, VLCC disruptions, Brent WTI spike 2026',
  'strait-of-hormuz-crisis-global-energy-supply-risk':
    'Strait of Hormuz closure risk, oil tanker routing, Hormuz chokepoint, Middle East maritime security 2026, energy supply shock',

  'iran-us-israel-war-global-impact-2026':
    'Iran US Israel escalation, Hormuz fallout, ballistic missile retaliation, Strait shipping insurance, geopolitical fallout 2026',

  // Nuclear & sanctions & Red Sea / proxies (newer pillar posts)
  'iran-nuclear-program-2026-weapons-danger-international-response':
    'Iran nuclear program 2026, weaponization timetable, uranium metal, IAEA safeguards, centrifuge cascades breakout, diplomacy response',
  'us-sanctions-on-iran-2026-economic-warfare-global-impact':
    'US sanctions Iran 2026, SWIFT bans, sanction evasion fleets, Strait insurance risk, Tehran budget crisis, maritime shadow fleet',
  'red-sea-crisis-2026-houthi-attacks-global-shipping-disruption':
    'Red Sea crisis 2026, Houthi shipping attacks, Suez disruptions, naval coalitions Bab el Mandeb risk, container reroutes cape cost',
  'iran-proxy-network-2026-axis-of-resistance-hezbollah-hamas-houthis':
    'Axis of Resistance, IRGC Quds Force, Hezbollah Hamas Houthis, IRGC militia supply lines, proxy drone attacks 2026',
  'us-iran-israel-war-2026-axis-of-resistance':
    'US Iran Israel war, Axis of Resistance, proxy deterrence, strategic bombers F-35s, regional escalation nuclear sites',

  // Oil by country (existing long-tail set)
  'saudi-arabia-oil-prices-2026-global-energy-market':
    'Saudi Arabia oil prices, Aramco, OPEC+, Arab Light crude, Saudi Vision 2030, Kingdom petroleum exports',
  'usa-oil-prices-2026-shale-production-energy-independence':
    'US oil prices, WTI crude, Permian shale, SPR drawdowns, US crude exports, American energy policy 2026',
  'russia-oil-prices-2026-sanctions-ural-crude-global-market':
    'Russia oil prices, Urals discount, shadow fleet sanctions, India China Russian crude, Moscow export policy',
  'china-oil-prices-2026-worlds-largest-importer-energy-security':
    'China oil imports SPR, PetroChina refining runs, yuan oil contracts Beijing, Middle East sourcing security',
  'india-oil-prices-2026-second-largest-importer-energy-growth':
    'India crude imports Russia Iran discount, IOC Reliance refining, INR oil payments, Strategic petroleum India',
  'uae-oil-prices-2026-emirates-energy-diversification':
    'UAE oil prices Murban, ADNOC capacity, LNG pivot Abu Dhabi Emirates energy transition',
  'kuwait-oil-prices-2026-opec-producer-energy-wealth':
    'Kuwait KPC crude, Neutral Zone oil barrels, Kuwait Future Generation Fund hydrocarbons',
  'iraq-oil-prices-2026-opec-second-largest-recovery':
    'Iraq Basra crude production, Baghdad OPEC compliance, Kurdish pipeline politics',
  'venezuela-oil-prices-2026-worlds-largest-reserves-crisis':
    'Venezuela PDVSA barrels, sanction waivers crude, Juan Guaidó era fallback, upgrading Orinoco output',
  'nigeria-oil-prices-2026-africa-largest-producer-challenges':
    'Nigeria Bonny crude NNPC outages, theft pipeline Niger Delta sabotage Brent linkage',
  'canada-oil-prices-2026-oil-sands-production-global-market':
    'Canada WCS oil sands barrels, Keystone politics, LNG Canada export diversification',
  'brazil-oil-prices-2026-pre-salt-deepwater-production':
    'Brazil pre-salt Buzios Petrobras capex FPSO commissioning deepwater rigs',
  'norway-oil-prices-2026-north-sea-european-energy':
    'Norway Johan Sverdrup Johan Castberg Equinor barrels EU gas backup',
  'uk-oil-prices-2026-north-sea-decline-energy-transition':
    'UK Brent benchmark fields decline electrification rigs North Sea capex cliff',
  'qatar-oil-prices-2026-lng-giant-petroleum-producer':
    'Qatar North Field LNG expansion QP oil condensates Red Sea fallout shipping',
  'iran-oil-prices-2026-sanctions-strait-hormuz-global-impact':
    'Iran oil sanctions embargo Kharg outage China India Russian swap barrels shadow fleet Hormuz ISR',
  'mexico-oil-prices-2026-pemex-production-decline-reform':
    'Mexico Pemex Maya crude Pemex bond stress Cantarell collapse energy reform Pemex rigs',
  'angola-oil-prices-2026-africa-second-largest-opec-member':
    'Angola Sonangol pre-salt blocks Cabinda outages Africa OPEC quotas',
  'algeria-oil-prices-2026-african-opec-member-gas-producer':
    'Algeria Sonatrach gas pipelines Europe backup Medgaz outages',
  'libya-oil-prices-2026-instability-african-reserves':
    'Libya Sharara outages NOC factions Haftar blockades African grade volatility',

  // Military / diplomacy / cyber
  'night-stalker-little-bird-helicopters-destroyed-iran-2026':
    '160th SOAR Little Bird helicopters, MH-6M Iran missile defense loss, kinetic raid aftermath SOF casualty reporting',
  'operation-epic-fury-april-2026-civilian-corridors-air-defenses':
    'Operation Epic Fury April 2026, civilian corridors, Middle East missile defense Patriot THAAD, humanitarian evacuation corridors',
  'us-iran-war-april-2026-un-security-council-divided-allies':
    'UN Security Council Iran war 2026, sanctions snapback debate, Europe energy security divisions, China Russia vetoes',
  'iran-us-cyber-war-2026-critical-infrastructure-hybrid-conflict':
    'Iran US cyber war, OT ransomware hospitals, hybrid warfare Pers Gulf, Shamoon style attacks',
  'gulf-arab-states-us-iran-war-2026-mediation-oil-neutrality':
    'GCC Iran mediation, Saudi Arabia UAE Kuwait balancing Hormuz risk, OPEC spare capacity diplomacy',

  // Legacy slugs (keep if old URLs / bookmarks still hit)
  'us-iran-conflict-causes-and-impact':
    'US Iran conflict causes, sanctions impact, Iran economy, Middle East tensions 2026',
  'global-oil-prices-rise-kharg-island-attack':
    'Kharg Island attack, global oil prices, Iran oil terminal, energy crisis',
  'strait-of-hormuz-crisis-global-energy-crisis':
    'Strait of Hormuz, global energy crisis, oil shipping Hormuz chokepoint',
  'iran-us-israel-conflict-global-impact':
    'Iran US Israel conflict, Middle East war global impact Hormuz closure risk',
};
