'use client';

import { useEffect, useState } from 'react';

type TocItem = { id: string; text: string };

type ArticleTableOfContentsProps = {
  /** CSS selector for the article body root (e.g. `.markdoc-body`). */
  contentSelector: string;
  /** Minimum number of H2 headings before showing the TOC. */
  minHeadings?: number;
  /** Re-scan when the article identity changes (client navigations). */
  watchKey?: string;
};

export default function ArticleTableOfContents({
  contentSelector,
  minHeadings = 3,
  watchKey = '',
}: ArticleTableOfContentsProps) {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    let cancelled = false;
    const t = window.setTimeout(() => {
      if (cancelled) return;
      const root = document.querySelector(contentSelector);
      if (!root) {
        setItems([]);
        return;
      }

      const headings = Array.from(root.querySelectorAll('h2'));
      if (headings.length < minHeadings) {
        setItems([]);
        return;
      }

      const next: TocItem[] = [];
      headings.forEach((el, i) => {
        const text = el.textContent?.trim() ?? '';
        if (!text) return;
        let id = el.id;
        if (!id) {
          id = `section-${i}-${text.slice(0, 24).toLowerCase().replace(/\s+/g, '-')}`;
          el.id = id;
        }
        next.push({ id, text });
      });
      setItems(next);
    }, 0);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [contentSelector, minHeadings, watchKey]);

  if (items.length < minHeadings) return null;

  return (
    <nav
      className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-5"
      aria-labelledby="article-toc-heading"
    >
      <h2 id="article-toc-heading" className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3">
        On this page
      </h2>
      <ol className="space-y-2 text-sm">
        {items.map((it) => (
          <li key={it.id}>
            <a href={`#${it.id}`} className="text-red-600 hover:text-red-800 hover:underline">
              {it.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
