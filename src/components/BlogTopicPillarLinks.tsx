import Link from 'next/link';

/** Curated internal links for topic clusters (pillar SEO). */
const PILLAR_LINKS = [
  { href: '/article', label: 'US–Iran conflict 2026: full guide' },
  { href: '/topic/operation-epic-fury', label: 'Operation Epic Fury' },
  { href: '/topic/nuclear-program', label: 'Iran nuclear program' },
  { href: '/topic/strait-of-hormuz', label: 'Strait of Hormuz' },
  { href: '/blogs', label: 'Middle East oil & energy' },
  { href: '/topic/israel-iran-conflict', label: 'Israel–Iran conflict' },
] as const;

export default function BlogTopicPillarLinks() {
  return (
    <section className="mt-10 rounded-xl border border-red-100 bg-red-50/40 p-6" aria-labelledby="pillar-links-heading">
      <h2 id="pillar-links-heading" className="text-lg font-bold text-gray-900 mb-2">
        Explore related coverage
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Deep dives and explainers across military operations, sanctions, Hormuz risk, and oil markets.
      </p>
      <ul className="flex flex-wrap gap-2">
        {PILLAR_LINKS.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-flex items-center rounded-full border border-red-200 bg-white px-3 py-1.5 text-sm font-medium text-red-700 transition-colors hover:bg-red-600 hover:text-white hover:border-red-600"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
