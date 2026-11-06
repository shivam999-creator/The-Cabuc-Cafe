import React from 'react';
import { Star, ArrowUpRight, Sparkles, MapPin, Compass, Flame } from 'lucide-react';
import { businessData } from '../data/siteData';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenBarista: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenBarista }) => {
  return (
    <section id="hero" className="relative w-full min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=85"
          alt="Cabuc Coffee Artisan Interior"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transform motion-safe:animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/80 to-[#0c0a09]/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(180,83,9,0.12),transparent_40%)]"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-6 animate-fadeIn">
          {/* Rating Badge */}
          <div className="flex items-center gap-2 bg-stone-900/90 text-stone-100 px-4 py-1.5 rounded-full text-xs font-semibold border border-amber-500/30 shadow-xl backdrop-blur-md hover:border-amber-400 transition-colors">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-bold">{businessData.rating}</span>
            <span className="text-stone-400 font-normal">({businessData.reviewCount}+ Google Reviews)</span>
          </div>

          {/* Price Range Badge */}
          <div className="flex items-center gap-1.5 glass-panel text-stone-200 px-3.5 py-1.5 rounded-full text-xs font-medium">
            <span className="text-amber-400 font-semibold">{businessData.priceRange}</span>
            <span className="text-stone-400">· Upper East Side</span>
          </div>

          {/* Highlight Badge */}
          <div className="hidden sm:flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-medium">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Signature Baklava Latte & Cezve Craft</span>
          </div>
        </div>

        {/* Display Typography */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08] mb-6 max-w-4xl drop-shadow-2xl">
          Where Ottoman Heritage Meets{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
            Lexington Rhythm.
          </span>
        </h1>

        {/* Narrative Deck */}
        <p className="text-stone-300 font-sans text-base sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-10 text-balance">
          Artisanal Turkish coffee simmered in copper cezves, our beloved pistachio <strong className="text-amber-300 font-medium">Baklava Latte</strong>, 12-hour Kyoto slow drip cold brew, and fresh flaky <strong className="text-amber-300 font-medium">börek</strong> on the corner of 82nd & Lexington.
        </p>

        {/* CTAs Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <button
            id="hero-explore-menu-btn"
            onClick={onExploreMenu}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-amber-500 text-stone-950 px-8 py-3.5 rounded-full font-jakarta font-bold text-sm hover:bg-amber-400 transition-all group shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
          >
            <span>Explore Curated Menu</span>
            <span className="w-7 h-7 rounded-full bg-stone-950 text-amber-400 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>

          <button
            id="hero-ai-barista-btn"
            onClick={onOpenBarista}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 glass-panel text-white px-7 py-3.5 rounded-full font-jakarta font-medium text-sm hover:bg-white/15 transition-all group border border-white/20 hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
            <span>Ask AI Barista For Pairing</span>
          </button>

          <a
            href={businessData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-stone-400 hover:text-stone-200 px-6 py-3.5 text-sm font-medium transition-colors"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Directions to 1211 Lex</span>
          </a>
        </div>

        {/* Quick Context Pill */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-stone-400 border-t border-white/10 pt-6 max-w-xl">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            1211 Lexington Ave, New York, NY 10028
          </span>
          <span className="hidden sm:inline text-stone-600">•</span>
          <span>4, 5, 6 Subway to 86th or 77th St</span>
          <span className="hidden sm:inline text-stone-600">•</span>
          <span className="text-emerald-400 font-medium">Dine-in & Takeaway</span>
        </div>
      </div>
    </section>
  );
};
