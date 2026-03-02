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
}

export const siteConfig: SiteConfig = {
  title: "US-Iran Conflict 2026 | Geopolitical Crisis Analysis",
  description: "A comprehensive analysis of the US-Iran conflict escalation in 2026, covering Operation Epic Fury, nuclear tensions, military buildup, and regional impact.",
  language: "en",
};

// -- Hero Section -------------------------------------------------------------
export interface HeroNavItem {
  label: string;
  sectionId: string;
  icon: "disc" | "play" | "calendar" | "music";
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
  decodeText: "US-IRAN CONFLICT",
  decodeChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*",
  subtitle: "The 2026 Escalation: A Comprehensive Analysis of the Current Crisis",
  ctaPrimary: "Explore Analysis",
  ctaPrimaryTarget: "crisis-cube",
  ctaSecondary: "View Timeline",
  ctaSecondaryTarget: "gallery",
  cornerLabel: "CRISIS ALERT",
  cornerDetail: "MARCH 2026",
  navItems: [
    { label: "Crisis Overview", sectionId: "crisis-cube", icon: "disc" },
    { label: "Visual Intel", sectionId: "gallery", icon: "play" },
    { label: "Timeline", sectionId: "gallery", icon: "calendar" },
    { label: "Analysis", sectionId: "contact", icon: "music" },
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
  quickLinks: string[];
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
  heroTitle: "UNCERTAIN FUTURE",
  heroSubtitle: "The conflict threatens to escalate into a wider regional war with global economic implications",
  artistLabel: "ANALYSIS BY",
  artistName: "STRATEGIC INTELLIGENCE",
  artistSubtitle: "Geopolitical Crisis Report",
  brandName: "US-IRAN CONFLICT 2026",
  brandDescription: "A comprehensive analysis of the most serious escalation in the Middle East since the June 2025 Twelve-Day War. Operation Epic Fury marks a fundamental shift in regional dynamics.",
  quickLinksTitle: "Key Topics",
  quickLinks: [
    "Operation Epic Fury",
    "Nuclear Program",
    "Military Buildup",
    "Economic Sanctions",
    "Proxy Networks",
    "Regional Impact",
  ],
  contactTitle: "Intelligence Contact",
  emailLabel: "Email",
  email: "kamrankamrankhan825@gmail.com",
  newsletterTitle: "Crisis Alerts",
  newsletterDescription: "Subscribe for real-time updates on the evolving situation",
  newsletterButtonText: "Subscribe",
  subscribeAlertMessage: "Crisis alert subscription activated. Stay informed.",
  copyrightText: "© 2026 Strategic Intelligence Report. All rights reserved.",
  bottomLinks: [
    "Privacy Policy",
    "Terms of Use",
    "Classification Guide",
  ],
  socialLinks: [
    { icon: "twitter", label: "Twitter", href: "#" },
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
