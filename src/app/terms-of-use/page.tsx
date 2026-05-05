import type { Metadata } from 'next';
import TermsOfUsePage from '@/views/TermsOfUsePage';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms of Use for US-Iran Conflict Coverage: acceptable use, disclaimers, intellectual property, limitation of liability, and contact.',
};

export default function Page() {
  return <TermsOfUsePage />;
}
