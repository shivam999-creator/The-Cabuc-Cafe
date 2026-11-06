import React from 'react';
import { Phone, Navigation, Clock, Instagram, ShoppingBag, Sparkles } from 'lucide-react';
import { businessData } from '../data/siteData';

interface QuickActionsProps {
  onOpenCart: () => void;
  onOpenBarista: () => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onOpenCart, onOpenBarista }) => {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-16">
      <div className="bg-stone-900/90 border border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-4 backdrop-blur-xl shadow-2xl shadow-black/80 grid grid-cols-2 md:grid-cols-5 gap-2.5 sm:gap-3">
        {/* Action 1: Call Cafe */}
        <a
          href={`tel:${businessData.phoneRaw}`}
          className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-950/60 hover:bg-amber-500/10 border border-white/5 hover:border-amber-500/30 transition-all text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Phone className="w-4 h-4" />
          </div>
          <div className="overflow-hidden">
            <span className="block text-[11px] font-medium text-stone-400 uppercase tracking-wider">Call Us</span>
            <span className="block text-xs sm:text-sm font-semibold text-stone-200 group-hover:text-amber-300 truncate">
              {businessData.phone}
            </span>
          </div>
        </a>

        {/* Action 2: Get Directions */}
        <a
          href={businessData.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-950/60 hover:bg-amber-500/10 border border-white/5 hover:border-amber-500/30 transition-all text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Navigation className="w-4 h-4" />
          </div>
          <div className="overflow-hidden">
            <span className="block text-[11px] font-medium text-stone-400 uppercase tracking-wider">Directions</span>
            <span className="block text-xs sm:text-sm font-semibold text-stone-200 group-hover:text-amber-300 truncate">
              1211 Lexington Ave
            </span>
          </div>
        </a>

        {/* Action 3: Hours & Schedule */}
        <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-950/60 border border-white/5 text-left">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div className="overflow-hidden">
            <span className="block text-[11px] font-medium text-emerald-400 uppercase tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Daily
            </span>
            <span className="block text-xs sm:text-sm font-semibold text-stone-200 truncate">
              7:00 AM – 6:00 PM
            </span>
          </div>
        </div>

        {/* Action 4: AI Barista Drink Match */}
        <button
          onClick={onOpenBarista}
          className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="overflow-hidden">
            <span className="block text-[11px] font-medium text-amber-300 uppercase tracking-wider">Flavor Match</span>
            <span className="block text-xs sm:text-sm font-bold text-white group-hover:text-amber-200 truncate">
              Ask AI Barista
            </span>
          </div>
        </button>

        {/* Action 5: Instagram / Community */}
        <a
          href={businessData.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 md:col-span-1 flex items-center gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-950/60 hover:bg-pink-500/10 border border-white/5 hover:border-pink-500/30 transition-all text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Instagram className="w-4 h-4" />
          </div>
          <div className="overflow-hidden">
            <span className="block text-[11px] font-medium text-stone-400 uppercase tracking-wider">Instagram</span>
            <span className="block text-xs sm:text-sm font-semibold text-stone-200 group-hover:text-pink-300 truncate">
              {businessData.instagramHandle}
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};
