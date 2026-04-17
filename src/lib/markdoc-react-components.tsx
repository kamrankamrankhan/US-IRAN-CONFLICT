import React from 'react';

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

function SmartImageOrLink({ href, children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!href) {
    return <a {...rest}>{children}</a>;
  }

  if (isSafeHttpUrl(href) && isLikelyImageUrl(href)) {
    const fromLabel = textFromChildren(children).trim();
    const alt =
      fromLabel && !/^https?:\/\//i.test(fromLabel) && fromLabel.length < 200 ? fromLabel : 'Article image';
    return (
      <figure className="my-8">
        <img
          src={href}
          alt={alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full max-h-[min(560px,70vh)] rounded-lg border border-gray-200 bg-gray-50 object-contain"
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
  return (
    <figure className="my-8">
      <img
        {...props}
        alt={props.alt ?? ''}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="w-full max-h-[min(560px,70vh)] rounded-lg border border-gray-200 bg-gray-50 object-contain"
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
