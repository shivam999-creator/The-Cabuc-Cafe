import React from 'react';
import { Phone, Navigation, Sparkles, ShoppingBag } from 'lucide-react';
import { businessData } from '../data/siteData';

interface MobileActionBarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenBarista: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({
  cartCount,
  onOpenCart,
  onOpenBarista,
}) => {
  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-stone-900/95 border border-white/15 backdrop-blur-2xl rounded-2xl p-2 shadow-2xl shadow-black flex items-center justify-around">
      {/* Call */}
      <a
        href={`tel:${businessData.phoneRaw}`}
        className="flex flex-col items-center justify-center p-2 text-stone-300 hover:text-amber-300 transition-colors"
      >
        <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
        <span className="text-[10px] font-medium">Call</span>
      </a>

      {/* Directions */}
      <a
        href={businessData.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center p-2 text-stone-300 hover:text-amber-300 transition-colors"
      >
        <Navigation className="w-4 h-4 text-amber-400 mb-0.5" />
        <span className="text-[10px] font-medium">Maps</span>
      </a>

      {/* AI Barista */}
      <button
        onClick={onOpenBarista}
        className="flex flex-col items-center justify-center p-2 text-stone-300 hover:text-amber-300 transition-colors"
      >
        <Sparkles className="w-4 h-4 text-amber-400 mb-0.5" />
        <span className="text-[10px] font-medium">AI Sommelier</span>
      </button>

      {/* Tasting Bag */}
      <button
        onClick={onOpenCart}
        className="relative flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs shadow-md"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        <span>Bag</span>
        {cartCount > 0 && (
          <span className="w-4 h-4 rounded-full bg-stone-950 text-amber-400 text-[10px] flex items-center justify-center font-extrabold ml-0.5">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
};
