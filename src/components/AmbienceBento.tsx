import React from 'react';
import { Wifi, Music, Sun, Sparkles, Coffee, ShieldCheck, Dog, Compass } from 'lucide-react';

export const AmbienceBento: React.FC = () => {
  return (
    <section id="ambience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/40 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Space & Setting</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Designed for Upper East Side Living.
          </h2>
        </div>
        <p className="text-stone-400 text-sm sm:text-base font-light max-w-md">
          Whether you need a sunlit corner to work, an artisanal morning espresso, or a slow afternoon baklava latte with friends.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 sm:gap-8">
        {/* Card 1: Services List (Tall) */}
        <div className="md:col-span-2 relative bg-stone-900/80 rounded-3xl p-8 border border-white/10 flex flex-col justify-between shadow-xl">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              Artisanal Standards
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-stone-300 font-sans">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                <span>Authentic Cezve Copper Simmering</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                <span>12-Hour Kyoto Slow Drip Cold Towers</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                <span>Organic Oatly & Almond Milks Available</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                <span>Fresh Börek & Pastries Baked Daily</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                <span>Curated Turkish Acoustic Soundtrack</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-stone-400">
            Dine-in seating + Fast takeaway window
          </div>
        </div>

        {/* Card 2: Visual Hero (Wide) */}
        <div className="md:col-span-4 relative rounded-3xl overflow-hidden p-8 sm:p-10 border border-white/10 min-h-[340px] flex flex-col justify-between group shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1600&q=80"
            alt="Cabuc Cafe Corner Ambience"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/20"></div>

          <div className="relative z-10 flex justify-between items-start">
            <span className="px-3.5 py-1 rounded-full bg-stone-900/80 border border-white/15 text-stone-200 text-xs font-semibold backdrop-blur-md">
              Lexington & 82nd
            </span>
            <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-300">
              <Sun className="w-4 h-4" />
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Sun-Drenched Corner Vibe
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-lg leading-relaxed font-light">
              Wide windows overlooking classic Upper East Side streetscapes, warm natural lighting, and an intimate neighborhood feel.
            </p>
          </div>
        </div>

        {/* Card 3: Wi-Fi & Work Friendly */}
        <div className="md:col-span-3 bg-stone-900/70 rounded-3xl p-7 border border-white/10 flex flex-col justify-between hover:border-amber-500/30 transition-colors shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Wifi className="w-5 h-5" />
            </div>
            <span className="text-xs text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
              High-Speed Fiber
            </span>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-1">Work & Study Friendly</h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              Complimentary gigabit Wi-Fi and comfortable corner seating make Cabuc an ideal remote oasis.
            </p>
          </div>
        </div>

        {/* Card 4: Neighborhood Context (Met & Central Park) */}
        <div className="md:col-span-3 bg-stone-900/70 rounded-3xl p-7 border border-white/10 flex flex-col justify-between hover:border-amber-500/30 transition-colors shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-xs text-stone-400 font-medium px-2.5 py-1 rounded-full bg-stone-800 border border-white/10">
              7 Min Walk to Central Park
            </span>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-1">Central Park & Museum Mile</h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              Grab an iced baklava latte to go before touring The Metropolitan Museum of Art or strolling Central Park.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
