/**
 * Hostnames allowed for next/image optimization.
 * Keep in sync with `images.remotePatterns` in next.config.ts (patterns are derived from this list).
 */
export const IMAGE_REMOTE_HOSTNAMES = [
  'usiranconflict.com',
  'www.usiranconflict.com',
  'images.wsj.net',
  'i.ytimg.com',
  'www.ms.now',
  'www.aljazeera.com',
  'www.iiss.org',
  'img.turkiyetoday.com',
  'assets1.cbsnewsstatic.com',
  'assets2.cbsnewsstatic.com',
  'assets3.cbsnewsstatic.com',
  'static.toiimg.com',
  'mecouncil.org',
  'i.guim.co.uk',
  'ichef.bbci.co.uk',
  'res.cloudinary.com',
  'akm-img-a-in.tosshub.com',
  'kslnewsradio.com',
  'live-production.wcms.abc-cdn.net.au',
  'media.cnn.com',
] as const;

const HOST_SET = new Set<string>(IMAGE_REMOTE_HOSTNAMES);

export function isLocalImageSrc(src: string): boolean {
  return src.startsWith('/');
}

export function shouldUseNextImage(src: string): boolean {
  if (!src || isLocalImageSrc(src)) return true;
  if (!/^https?:\/\//i.test(src)) return false;
  try {
    return HOST_SET.has(new URL(src).hostname);
  } catch {
    return false;
  }
}
