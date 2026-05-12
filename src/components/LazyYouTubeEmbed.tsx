'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import { Play } from 'lucide-react';

type LazyYouTubeEmbedProps = {
  videoId: string;
  title: string;
  /** Extra query params after autoplay (e.g. rel=0&modestbranding=1) */
  embedParams?: string;
  className?: string;
};

/**
 * Click-to-play YouTube embed: reserves aspect ratio (CLS), defers third-party JS until the user opts in.
 */
export default function LazyYouTubeEmbed({
  videoId,
  title,
  embedParams = 'rel=0&modestbranding=1',
  className = '',
}: LazyYouTubeEmbedProps) {
  const [active, setActive] = useState(false);
  const posterSrc = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&${embedParams}`;

  const activate = useCallback(() => setActive(true), []);

  return (
    <div className={`relative aspect-video bg-gray-950 ${className}`}>
      {active ? (
        <iframe
          src={iframeSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={activate}
          className="group absolute inset-0 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={posterSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 480px"
            priority={false}
          />
          <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" aria-hidden />
          <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg ring-4 ring-white/30 transition-transform group-hover:scale-105 md:h-16 md:w-16">
            <Play className="h-7 w-7 fill-current md:h-8 md:w-8" aria-hidden />
          </span>
        </button>
      )}
    </div>
  );
}
