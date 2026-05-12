import React from 'react';
import Image from 'next/image';
import { shouldUseNextImage } from '@/lib/image-remote-hosts';

/** Plain URL pasted as a markdown link `[url](url)` should still render as an image when it points at media. */
function isLikelyImageUrl(href: string): boolean {
  const path = href.split('?')[0].toLowerCase();
  return /\.(jpg|jpeg|png|gif|webp|avif|svg|bmp)(\?|$)/i.test(href) || /\.(jpg|jpeg|png|gif|webp|avif|svg)$/i.test(path);
}

function isSafeHttpUrl(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

function textFromChildren(node: React.ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textFromChildren).join('');
  if (React.isValidElement(node) && node.props && typeof node.props === 'object' && 'children' in node.props) {
    return textFromChildren((node.props as { children?: React.ReactNode }).children);
  }
  return '';
}

function toPositiveInt(value: unknown, fallback: number): number {
  const n = typeof value === 'string' ? parseInt(value, 10) : Number(value);
  return Number.isFinite(n) && n > 0 ? Math.round(n) : fallback;
}

const figureClass = 'w-full max-h-[min(560px,70vh)] rounded-lg border border-gray-200 bg-gray-50 object-contain';

function SmartImageOrLink({ href, children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!href) {
    return <a {...rest}>{children}</a>;
  }

  if (isSafeHttpUrl(href) && isLikelyImageUrl(href)) {
    const fromLabel = textFromChildren(children).trim();
    const alt =
      fromLabel && !/^https?:\/\//i.test(fromLabel) && fromLabel.length < 200 ? fromLabel : 'Article image';

    if (shouldUseNextImage(href)) {
      return (
        <figure className="my-8">
          <Image
            src={href}
            alt={alt}
            width={1200}
            height={675}
            sizes="(max-width: 768px) 100vw, 896px"
            className={figureClass}
          />
        </figure>
      );
    }

    return (
      <figure className="my-8">
        <img
          src={href}
          alt={alt}
          width={1200}
          height={675}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className={figureClass}
        />
      </figure>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-red-600 underline decoration-red-600/40 underline-offset-2 transition-colors hover:text-red-700"
      {...rest}
    >
      {children}
    </a>
  );
}

function MarkdocImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { src: srcProp, alt: altProp, width, height, className, title } = props;
  const src = typeof srcProp === 'string' ? srcProp : '';
  const alt = typeof altProp === 'string' ? altProp : '';
  const w = toPositiveInt(width, 1200);
  const h = toPositiveInt(height, 675);
  const mergedClass = [figureClass, className].filter(Boolean).join(' ');

  if (src && shouldUseNextImage(src)) {
    return (
      <figure className="my-8">
        <Image
          src={src}
          alt={alt}
          title={title}
          width={w}
          height={h}
          sizes="(max-width: 768px) 100vw, 896px"
          className={mergedClass}
        />
      </figure>
    );
  }

  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        title={title}
        width={w}
        height={h}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className={mergedClass}
      />
    </figure>
  );
}

function MarkdocArticle({ children, ...rest }: React.ComponentProps<'article'>) {
  return (
    <article {...rest} className="space-y-4">
      {children}
    </article>
  );
}

/**
 * Passed to Markdoc.renderers.react so Keystatic bodies get readable typography and image-like links render as images.
 */
export const markdocReactComponents: Record<string, React.ComponentType<Record<string, unknown>>> = {
  a: SmartImageOrLink as React.ComponentType<Record<string, unknown>>,
  img: MarkdocImg as React.ComponentType<Record<string, unknown>>,
  article: MarkdocArticle as React.ComponentType<Record<string, unknown>>,
};
