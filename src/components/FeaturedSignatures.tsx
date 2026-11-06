import React, { useState } from 'react';
import { Sparkles, Plus, Check, Star, ArrowRight } from 'lucide-react';
import { MenuItem } from '../types';
import { menuItems } from '../data/siteData';

interface FeaturedSignaturesProps {
  onAddToCart: (item: MenuItem) => void;
  onExploreAll: () => void;
}

export const FeaturedSignatures: React.FC<FeaturedSignaturesProps> = ({ onAddToCart, onExploreAll }) => {
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const featuredItems = menuItems.filter((item) => item.featured);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1600);
  };

  return (
    <section id="featured" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/40 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Cabuc Icons</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Our Signature Creations
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light max-w-xl mt-3">
            The recipes that made Cabuc a beloved fixture on Lexington Avenue—celebrated across hundreds of guest reviews.
          </p>
        </div>

        <button
          onClick={onExploreAll}
          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-jakarta font-semibold text-sm border-b border-amber-500/40 pb-1 hover:border-amber-300 transition-colors group"
        >
          <span>View Full Menu & Prices</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 4 Hero Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {featuredItems.map((item) => {
          const isAdded = addedIds[item.id];

          return (
            <div
              key={item.id}
              className="group bg-stone-900/80 rounded-3xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1.5"
            >
              {/* Card Image */}
              <div className="relative h-60 w-full overflow-hidden bg-stone-950">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-black/30"></div>

                {/* Badge Top Left */}
                {item.badge && (
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-stone-950/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                    {item.badge}
                  </span>
                )}

                {/* Price Tag Top Right */}
                <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-stone-950 shadow-lg">
                  {item.price}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tasting Notes */}
                  {item.tastingNotes && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {item.tastingNotes.map((note) => (
                        <span
                          key={note}
                          className="text-[10px] uppercase font-medium tracking-wider px-2 py-0.5 rounded-md bg-stone-800 text-stone-300 border border-white/5"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Add to Bag Action */}
                <button
                  onClick={() => handleAdd(item)}
                  className={`w-full py-3 px-4 rounded-2xl text-xs font-jakarta font-bold flex items-center justify-center gap-2 transition-all ${
                    isAdded
                      ? 'bg-emerald-500 text-stone-950'
                      : 'bg-white/10 hover:bg-amber-500 hover:text-stone-950 text-white border border-white/10 hover:border-amber-500'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add to Tasting Bag</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
