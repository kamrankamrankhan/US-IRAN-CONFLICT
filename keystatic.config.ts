import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Blog posts',
      slugField: 'title',
      path: 'src/content/keystatic-posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        date: fields.date({ label: 'Publish date' }),
        image: fields.text({
          label: 'Hero image URL',
          description: 'Path under public, e.g. /gallery-6.jpg',
        }),
        content: fields.markdoc({
          label: 'Article body',
          description:
            'Use headings, lists, and **bold**. For images use: ![description](https://example.com/image.jpg) — not a plain link.',
        }),
      },
    }),
  },
});
