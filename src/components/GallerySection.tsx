import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';
import { galleryItems } from '../data/siteData';

export const GallerySection: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % galleryItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/40 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Visual Journal</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Moments at 1211 Lexington
          </h2>
        </div>
        <p className="text-stone-400 text-sm font-light max-w-md">
          A glimpse into our daily brews, hand-laminated pastries, and quiet Upper East Side mornings.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer border border-white/10 shadow-lg hover:border-amber-500/40 transition-all duration-300"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

            {/* Hover Expand Icon */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-950/70 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
              <Maximize2 className="w-4 h-4 text-amber-400" />
            </div>

            {/* Caption */}
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                {item.category}
              </span>
              <p className="text-white font-serif font-bold text-sm sm:text-base leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItemIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={showNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
          >
            <div className="relative max-h-[70vh] w-full flex items-center justify-center bg-black">
              <img
                src={galleryItems[selectedItemIndex].src}
                alt={galleryItems[selectedItemIndex].alt}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>

            <div className="p-6 bg-stone-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  {galleryItems[selectedItemIndex].category}
                </span>
                <h3 className="text-lg font-serif font-bold text-white mt-0.5">
                  {galleryItems[selectedItemIndex].caption}
                </h3>
              </div>
              <span className="text-xs text-stone-400 font-mono">
                {selectedItemIndex + 1} of {galleryItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
