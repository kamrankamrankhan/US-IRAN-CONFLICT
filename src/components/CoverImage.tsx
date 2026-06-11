import Image from 'next/image';
import { isLocalImageSrc } from '@/lib/image-remote-hosts';

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Fill-mode cover image for cards and heroes.
 * Local assets use next/image; remote CMS URLs use a native img so new hosts
 * do not require a dev-server restart or next.config change.
 */
export default function CoverImage({
  src,
  alt,
  className = 'object-cover',
  sizes = '100vw',
  priority = false,
}: CoverImageProps) {
  if (isLocalImageSrc(src)) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`absolute inset-0 h-full w-full ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}
