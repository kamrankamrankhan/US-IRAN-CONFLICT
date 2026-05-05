import type { Metadata } from 'next';
import ContactPage from '@/views/ContactPage';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact US Iran Conflict: editorial inquiries, corrections, and reader messages. Email, phone, and secure form.',
};

export default function Page() {
  return <ContactPage />;
}
