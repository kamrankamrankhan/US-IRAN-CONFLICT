import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/views/PrivacyPolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for US-Iran Conflict Coverage: what we collect, cookies, retention, third parties, and how to reach us.',
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
