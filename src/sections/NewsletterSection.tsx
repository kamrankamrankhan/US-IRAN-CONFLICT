'use client';

import EmailJsContactForm from '@/components/EmailJsContactForm';
import { getEmailJsPublicConfig } from '@/lib/emailjs-env';

const NewsletterSection = () => {
  const configured = Boolean(getEmailJsPublicConfig());

  return (
    <section className="bg-red-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Informed on the Crisis
        </h2>
        <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
          Get the latest analysis on US-Iran tensions, oil market impacts, and Middle East developments.
          Send a message or ask to be added to updates—we&apos;ll reply by email.
        </p>

        {!configured && (
          <p className="text-amber-200 text-sm mb-6 max-w-xl mx-auto">
            Add your EmailJS keys to <code className="bg-black/20 px-1 rounded">.env.local</code> to
            enable the form (see <code className="bg-black/20 px-1 rounded">src/lib/emailjs-env.ts</code>
            ).
          </p>
        )}

        <div className="max-w-md mx-auto">
          <EmailJsContactForm variant="onDark" />
        </div>

        <p className="text-red-200 text-sm mt-6">
          No spam. Read our{' '}
          <a href="#" className="underline hover:text-white">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
