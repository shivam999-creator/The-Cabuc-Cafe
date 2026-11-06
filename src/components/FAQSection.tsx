import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { faqItems } from '../data/siteData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/5">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/40 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          <span>Helpful Information</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-stone-400 text-sm font-light">
          Everything you need to know before visiting Cabuc Coffee on Lexington Ave.
        </p>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className="bg-stone-900/70 border border-white/10 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-amber-300 transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400"
                aria-expanded={isOpen}
              >
                <span className="font-jakarta font-semibold text-sm sm:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-stone-300 text-xs sm:text-sm font-sans leading-relaxed border-t border-white/5 animate-fadeIn">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
