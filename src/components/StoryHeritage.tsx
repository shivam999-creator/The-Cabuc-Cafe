import React from 'react';
import { Coffee, Flame, Droplets, Sparkles, Heart } from 'lucide-react';

export const StoryHeritage: React.FC = () => {
  return (
    <section id="story" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Narrative Copy */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/40 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Cabuc Philosophy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            A sanctuary of slow craft on a bustling Manhattan corner.
          </h2>

          <p className="text-stone-300 font-sans text-base sm:text-lg leading-relaxed font-light mb-6">
            Located at the sunlit intersection of <strong>Lexington Avenue and 82nd Street</strong>, Cabuc Coffee was born from a simple passion: bridging centuries of authentic Ottoman coffee ritual with modern New York third-wave coffee culture.
          </p>

          <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed mb-8">
            From the deep warmth of traditional copper cezves simmered with patience, to our acclaimed signature creations like the pistachio-infused <span className="text-amber-300 font-medium">Baklava Latte</span> and 12-hour Kyoto slow drip towers, every cup is crafted to turn your daily coffee run into a memorable moment of pause.
          </p>

          {/* Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="p-4 rounded-2xl bg-stone-900/70 border border-white/10 hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-jakarta font-semibold text-white text-sm mb-1">Authentic Copper Cezve</h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                Slow-brewed over direct heat for rich texture, served traditionally with Turkish delight lokum.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/70 border border-white/10 hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-jakarta font-semibold text-white text-sm mb-1">12-Hour Kyoto Towers</h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                Drop-by-drop cold extraction unlocking smooth floral notes, dark cocoa, and zero bitterness.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Composite */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80"
              alt="Traditional Turkish Cezve Coffee & Baklava Latte"
              className="w-full h-[460px] sm:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent"></div>

            {/* Floating Glass Accent Pill */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-panel-dark border border-white/15 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-jakarta font-bold text-white text-sm">Crafted Fresh Daily at 1211 Lex</h4>
                  <p className="text-stone-300 text-xs mt-0.5">
                    "Warm Turkish hospitality, ambient acoustic melodies, and friendly baristas."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Glow */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
