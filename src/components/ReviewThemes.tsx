import React from 'react';
import { Star, Sparkles, MessageSquareQuote, CheckCircle } from 'lucide-react';
import { reviewsData, businessData } from '../data/siteData';

export const ReviewThemes: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/40 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Community Voice</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Guest Experiences
          </h2>
        </div>

        {/* Overall Rating Pill */}
        <div className="flex items-center gap-3 bg-stone-900 border border-white/10 rounded-2xl p-3 sm:px-5">
          <div className="text-3xl font-serif font-bold text-amber-400">
            {businessData.rating}
          </div>
          <div>
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs text-stone-400">
              Based on {businessData.reviewCount}+ Google reviews
            </span>
          </div>
        </div>
      </div>

      {/* AI Consensus Summary Box */}
      <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900/90 to-amber-950/30 border border-amber-500/30 shadow-xl relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-jakarta font-bold text-white text-sm">
                Verified Review Summary
              </h3>
              <span className="text-[10px] font-semibold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                Summarized with Gemini
              </span>
            </div>
            <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed font-light">
              "Guests consistently highlight the authentic <strong>Turkish coffee</strong>, signature <strong>Baklava Latte</strong>, and fresh <strong>börek pastries</strong>. Visitors especially appreciate the warm and welcoming staff, bright natural light, curated Turkish music, and high-speed Wi-Fi."
            </p>
          </div>
        </div>
      </div>

      {/* Individual Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviewsData.map((rev) => (
          <div
            key={rev.id}
            className="p-7 rounded-3xl bg-stone-900/70 border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-jakarta font-bold text-white text-sm">
                      {rev.author}
                    </h4>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-xs text-stone-400 font-light">
                    {rev.badge}
                  </span>
                </div>

                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                "{rev.content}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-stone-500">
              <span className="text-amber-300 font-medium bg-amber-950/40 px-2.5 py-1 rounded-lg border border-amber-500/20">
                Featured: {rev.highlightItem}
              </span>
              <span>{rev.timeAgo}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
