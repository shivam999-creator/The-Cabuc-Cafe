import React from 'react';
import { MapPin, Clock, Phone, Navigation, Train, Compass, ExternalLink } from 'lucide-react';
import { businessData } from '../data/siteData';

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Address, Phone & Transit Guide */}
        <div className="lg:col-span-7 bg-stone-900/80 rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/40 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-6">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Visit Us on Lexington</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              1211 Lexington Avenue
            </h2>
            <p className="text-stone-300 text-base leading-relaxed mb-8">
              Corner of Lexington Avenue & 82nd Street, Upper East Side, Manhattan, New York, NY 10028.
            </p>

            {/* Transit & Walking Guide */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-950/60 border border-white/5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Train className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-jakarta font-semibold text-white text-xs sm:text-sm">
                    Subway Stations
                  </h4>
                  <p className="text-stone-400 text-xs mt-0.5 leading-relaxed">
                    <strong>86th Street</strong> (4, 5, 6 Lines) · 4 blocks north<br />
                    <strong>77th Street</strong> (6 Line) · 5 blocks south
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-950/60 border border-white/5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-jakarta font-semibold text-white text-xs sm:text-sm">
                    Museum Mile & Central Park
                  </h4>
                  <p className="text-stone-400 text-xs mt-0.5 leading-relaxed">
                    Just a 7-minute walk along 82nd St to <strong>The Metropolitan Museum of Art</strong> and Central Park.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
            <a
              href={businessData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-amber-500 text-stone-950 px-6 py-3 rounded-full font-jakarta font-bold text-xs hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <a
              href={`tel:${businessData.phoneRaw}`}
              className="flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white px-5 py-3 rounded-full font-jakarta font-medium text-xs border border-white/10 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{businessData.phone}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hours & Live Status */}
        <div className="lg:col-span-5 bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950/30 rounded-3xl p-8 sm:p-10 border border-amber-500/30 flex flex-col justify-between shadow-xl">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
              <Clock className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Cafe Hours
            </h3>
            <p className="text-emerald-400 text-xs font-semibold flex items-center gap-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Daily for Dine-In & Takeaway
            </p>

            <div className="space-y-4 text-xs sm:text-sm font-sans">
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-stone-300 font-medium">Monday – Friday</span>
                <span className="text-white font-bold font-mono">7:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-stone-300 font-medium">Saturday – Sunday</span>
                <span className="text-white font-bold font-mono">7:30 AM – 6:00 PM</span>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-stone-950/60 border border-white/5 text-xs text-stone-400 leading-relaxed">
              *Fresh börek and salted honey croissants are baked every morning. Specialty drinks and cold brew towers available all day.
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
            <span>Plus Code: Q2GV+Q4 NYC</span>
            <span className="text-amber-400 font-semibold">$1–10 / person</span>
          </div>
        </div>
      </div>
    </section>
  );
};
