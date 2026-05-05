import type { Metadata } from 'next';
import AboutPage from '@/views/AboutPage';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet Kamran Khan, founder of US-Iran Conflict Coverage—latest news and updates on US-Iran tensions, the Middle East, and energy markets.',
};

export default function Page() {
  return <AboutPage />;
}
