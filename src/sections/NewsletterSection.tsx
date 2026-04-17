'use client';

import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-red-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Informed on the Crisis
        </h2>
        <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
          Get the latest analysis on US-Iran tensions, oil market impacts, and Middle East 
          developments delivered to your inbox.
        </p>

        {submitted ? (
          <div className="bg-white/10 border border-white/20 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-white font-semibold">
              Thank you for subscribing! You'll receive our next update soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white font-semibold rounded hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-red-200 text-sm mt-4">
          No spam. Unsubscribe anytime. Read our{' '}
          <a href="#" className="underline hover:text-white">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
