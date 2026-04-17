import type { Metadata } from 'next';
import Providers from './providers';
import '../index.css';

export const metadata: Metadata = {
  title: {
    default: 'US Iran War 2026 | Complete Conflict Analysis & Latest News',
    template: '%s | US Iran Conflict',
  },
  description:
    'Complete coverage of the US-Iran war 2026: Operation Epic Fury, nuclear tensions, Strait of Hormuz crisis, oil prices impact, and real-time updates.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
