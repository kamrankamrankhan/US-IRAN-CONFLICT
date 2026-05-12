/**
 * SERP-oriented title/description helpers (50–60 char titles, 150–160 descriptions + CTA).
 */

const TITLE_MAX = 60;
const TITLE_SOFT_MIN = 50;
const DESC_MIN = 150;
const DESC_MAX = 160;

/** Strip site suffix patterns for measuring primary segment length. */
function stripCommonSuffixes(raw: string): string {
  return raw.replace(/\s*\|\s*US Iran Conflict.*$/i, '').replace(/\s*\|\s*US Iran Conflict Analysis.*$/i, '').trim();
}

/**
 * Produce a document title ≤ `maxLen` characters, prioritizing primary keywords at the front.
 * If `fullTitle` already fits, return as-is; otherwise truncate the headline and append a short brand.
 */
export function formatSerpTitle(fullTitle: string, maxLen = TITLE_MAX): string {
  const t = fullTitle.replace(/\s+/g, ' ').trim();
  if (t.length <= maxLen) return t;

  const brand = ' | US Iran Conflict';
  const headroom = maxLen - brand.length;
  if (headroom < TITLE_SOFT_MIN) {
    return t.slice(0, maxLen - 1).trimEnd() + '…';
  }

  const primary = stripCommonSuffixes(t);
  let cut = primary.slice(0, headroom);
  const lastSpace = cut.lastIndexOf(' ');
  if (lastSpace > 24) cut = cut.slice(0, lastSpace);
  cut = cut.trimEnd();
  if (!/[.…!?]$/.test(cut)) cut = cut.replace(/[,;:]\s*$/, '').trimEnd();
  return `${cut}${brand}`.length <= maxLen ? `${cut}${brand}` : `${cut.slice(0, headroom - 1)}…${brand}`.slice(0, maxLen);
}

const DEFAULT_CTA = ' Read analysis, timelines, and expert context.';

/**
 * Meta description between ~150–160 chars with optional CTA suffix (truncates excerpt first).
 */
export function formatSerpDescription(
  excerptOrBody: string,
  opts?: { cta?: string; minLen?: number; maxLen?: number },
): string {
  const minLen = opts?.minLen ?? DESC_MIN;
  const maxLen = opts?.maxLen ?? DESC_MAX;
  const cta = (opts?.cta ?? DEFAULT_CTA).trim();
  const base = excerptOrBody.replace(/\s+/g, ' ').trim();
  if (!base) return cta.slice(0, maxLen);

  let withCta = `${base}${base.endsWith('.') ? '' : '.'}${cta.startsWith(' ') ? '' : ' '}${cta}`.replace(/\s+/g, ' ').trim();

  if (withCta.length > maxLen) {
    const room = maxLen - cta.length - 1;
    if (room > 40) {
      let cut = base.slice(0, room);
      const ls = cut.lastIndexOf(' ');
      if (ls > 30) cut = cut.slice(0, ls);
      withCta = `${cut.trimEnd()}…${cta}`.replace(/\s+/g, ' ').trim();
    } else {
      withCta = base.slice(0, maxLen - 1).trimEnd() + '…';
    }
  }

  if (withCta.length < minLen && base.length > withCta.length) {
    const pad = base.slice(withCta.length, withCta.length + (minLen - withCta.length) + 20);
    withCta = `${withCta} ${pad}`.slice(0, maxLen).trimEnd();
    if (withCta.length < minLen) withCta = `${withCta}${cta}`.slice(0, maxLen);
  }

  return withCta.slice(0, maxLen);
}
