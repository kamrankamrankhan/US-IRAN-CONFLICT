import { createReader } from '@keystatic/core/reader';
import Markdoc from '@markdoc/markdoc';
import React from 'react';
import keystaticConfig from '../../keystatic.config';
import { markdocReactComponents } from '@/lib/markdoc-react-components';
import { normalizeSlugParam } from '@/lib/slug-utils';

export async function renderKeystaticPostBody(slug: string): Promise<React.ReactNode | null> {
  const reader = createReader(process.cwd(), keystaticConfig);
  const key = normalizeSlugParam(slug);
  const post = await reader.collections.posts.read(key);
  if (!post) return null;
  const { node } = await post.content();
  const errors = Markdoc.validate(node);
  if (errors.length) console.error('[keystatic] Markdoc validation', errors);
  const renderable = Markdoc.transform(node);
  return Markdoc.renderers.react(renderable, React, { components: markdocReactComponents });
}
