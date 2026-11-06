import React from 'react';
import { Coffee, MapPin, Phone, Instagram, ArrowUpRight, Heart } from 'lucide-react';
import { businessData } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-white/10 pt-20 pb-28 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
                <Coffee className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-jakarta font-extrabold text-lg tracking-tight">
                  CABUC COFFEE
                </span>
                <span className="text-stone-400 text-[10px] uppercase tracking-widest font-mono">
                  Upper East Side, New York
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm max-w-sm leading-relaxed mb-6 font-light">
              Crafting traditional copper cezve Turkish coffee, signature pistachio Baklava Lattes, 12-hour Kyoto slow drip cold brew, and fresh daily börek at the corner of 82nd & Lexington.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={businessData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-900 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 text-stone-300 hover:text-pink-400 flex items-center justify-center transition-all"
                aria-label="Cabuc Coffee Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={businessData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-900 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 text-stone-300 hover:text-amber-400 flex items-center justify-center transition-all"
                aria-label="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-jakarta font-bold text-white text-xs uppercase tracking-widest mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a href="#featured" className="hover:text-amber-300 transition-colors">
                  Signature Baklava Latte
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Full Drink & Pastry Menu
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-amber-300 transition-colors">
                  Cezve Brewing Heritage
                </a>
              </li>
              <li>
                <a href="#barista" className="hover:text-amber-300 transition-colors">
                  Gemini AI Sommelier
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  Photo Journal
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-300 transition-colors">
                  Subway & Museum Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="font-jakarta font-bold text-white text-xs uppercase tracking-widest mb-4">
              Visit & Inquiries
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>1211 Lexington Ave, New York, NY 10028 (Corner of 82nd St)</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${businessData.phoneRaw}`} className="hover:text-amber-300 transition-colors">
                  {businessData.phone}
                </a>
              </p>
              <div className="pt-2 text-stone-400">
                <span className="text-emerald-400 font-semibold block mb-1">Open 7 Days a Week</span>
                <span>Mon–Fri: 7:00 AM – 6:00 PM</span>
                <br />
                <span>Sat–Sun: 7:30 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <p>© {new Date().getFullYear()} Cabuc Coffee. 1211 Lexington Ave, NYC.</p>
          <div className="flex items-center gap-4">
            <span>Dine-in · Takeaway</span>
            <span>•</span>
            <a href={businessData.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-stone-300">
              Google Maps (4.6 ★)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
