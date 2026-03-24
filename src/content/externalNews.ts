// =============================================================================
// External news / live coverage — integrated links to major outlets
// =============================================================================

export interface ExternalNewsSource {
  id: string;
  sourceName: string;
  title: string;
  url: string;
  description: string;
  date: string;
}

export const externalNewsSources: ExternalNewsSource[] = [
  {
    id: "aljazeera",
    sourceName: "Al Jazeera",
    title: "US-Israel attack on Iran – live blog",
    url: "https://www.aljazeera.com/news/liveblog/2026/3/2/us-israel-attack-iran-live",
    description:
      "Live updates and reporting on the US and Israeli strikes on Iran and regional developments. Al Jazeera's continuous coverage from the Middle East.",
    date: "2026-03-02",
  },
  {
    id: "cnn",
    sourceName: "CNN",
    title: "What we know about the widening US war with Iran on the conflict's third day",
    url: "https://edition.cnn.com/2026/03/02/middleeast/us-israel-iran-conflict-what-we-know-intl",
    description:
      "CNN's overview of the conflict's third day: casualties, retaliatory strikes, Gulf attacks, oil and gas price surges, travel disruption, and the death of Iran's supreme leader. Updated March 2, 2026.",
    date: "2026-03-02",
  },
  {
    id: "cnbc",
    sourceName: "CNBC",
    title: "Iran-U.S. war live updates: Strait of Hormuz, oil, markets",
    url: "https://www.cnbc.com/2026/03/02/us-iran-live-updates-trump-oil-gold.html",
    description:
      "Live business and market updates: Iran commander on Strait of Hormuz, oil and gold prices, flight cancellations, Congress war powers, and FedEx/Amazon disruptions. CNBC, March 2, 2026.",
    date: "2026-03-02",
  },
];
