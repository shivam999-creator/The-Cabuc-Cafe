import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Filter, Sparkles, Coffee } from 'lucide-react';
import { MenuItem } from '../types';
import { menuItems, menuCategories } from '../data/siteData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1600);
  };

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tastingNotes && item.tastingNotes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase())));
      const matchDietary =
        dietaryFilter === 'all' || (item.dietary && item.dietary.some((d) => d.toLowerCase().includes(dietaryFilter.toLowerCase())));

      return matchCategory && matchSearch && matchDietary;
    });
  }, [activeCategory, searchQuery, dietaryFilter]);

  return (
    <section id="menu" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/40 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
          <Coffee className="w-3.5 h-3.5 text-amber-400" />
          <span>Curated Daily Menu</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
          The Complete Cabuc Collection
        </h2>
        <p className="text-stone-400 text-sm sm:text-base font-light">
          Prepared to order using specialty origin beans, authentic Turkish copper cezve pots, and European bakery traditions.
        </p>
      </div>

      {/* Controls Bar: Category Filter + Search */}
      <div className="space-y-6 mb-12">
        {/* Category Pills Rail */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-jakarta font-semibold tracking-wide whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20'
                    : 'bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search & Dietary Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search drinks, börek, cardamom, pistachio..."
              className="w-full pl-10 pr-4 py-2.5 bg-stone-900 border border-white/10 rounded-full text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Dietary Filters */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            <span className="text-xs text-stone-400 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              Diet:
            </span>
            {['all', 'vegan', 'vegetarian'].map((filter) => (
              <button
                key={filter}
                onClick={() => setDietaryFilter(filter)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-wider transition-all ${
                  dietaryFilter === filter
                    ? 'bg-stone-100 text-stone-950 font-bold'
                    : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-white/5'
                }`}
              >
                {filter === 'all' ? 'All Diets' : filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 px-4 bg-stone-900/40 rounded-3xl border border-white/5">
          <p className="text-stone-400 text-sm mb-4">No items matched your search query "{searchQuery}".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
              setDietaryFilter('all');
            }}
            className="px-4 py-2 rounded-full bg-amber-500 text-stone-950 text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isAdded = addedIds[item.id];

            return (
              <div
                key={item.id}
                className="group bg-stone-900/60 hover:bg-stone-900/90 rounded-3xl p-5 border border-white/10 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4 bg-stone-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>

                    {item.badge && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-stone-950/80 text-amber-300 border border-amber-500/30 backdrop-blur-sm">
                        {item.badge}
                      </span>
                    )}

                    <span className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-stone-950 shadow">
                      {item.price}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-stone-400 text-xs leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Dietary tags */}
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.dietary.map((d) => (
                        <span key={d} className="text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-stone-500 truncate max-w-[150px]">
                    {item.tastingNotes ? item.tastingNotes.join(' · ') : 'Artisan Craft'}
                  </div>

                  <button
                    onClick={() => handleAdd(item)}
                    className={`px-4 py-2 rounded-xl text-xs font-jakarta font-bold flex items-center gap-1.5 transition-all shrink-0 ${
                      isAdded
                        ? 'bg-emerald-500 text-stone-950'
                        : 'bg-amber-500/15 hover:bg-amber-500 text-amber-300 hover:text-stone-950 border border-amber-500/30'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
