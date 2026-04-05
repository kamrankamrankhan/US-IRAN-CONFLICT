import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqSchemaData } from '../lib/seo-keywords';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Get answers to common questions about the Iran-Israel conflict and US-Iran tensions.
          </p>
        </div>

        {/* FAQ Items - SEO Optimized with Schema */}
        <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
          {faqSchemaData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4" itemProp="name">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div
                  className="px-5 pb-5 text-gray-600 leading-relaxed"
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional SEO Content */}
        <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-3">
            Stay Informed on Iran Israel Conflict Updates
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            This FAQ section is regularly updated with the latest information on the 
            <strong> Iran Israel conflict</strong>, <strong>US Iran war developments</strong>, 
            and <strong>Middle East geopolitical analysis</strong>. For breaking news, 
            visit our <a href="/news" className="text-red-600 hover:underline">news section</a> or 
            check our <a href="/live-coverage" className="text-red-600 hover:underline">live coverage page</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
