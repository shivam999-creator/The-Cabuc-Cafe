import React, { useState, useEffect } from 'react';
import { Coffee, MapPin, Clock, Phone, ShoppingBag, Menu as MenuIcon, X, Sparkles } from 'lucide-react';
import { businessData } from '../data/siteData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenBarista: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onOpenBarista }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Featured', href: '#featured' },
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'AI Barista', href: '#barista' },
    { label: 'Ambience', href: '#ambience' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit', href: '#location' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3.5 bg-stone-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl p-1">
          <div className="w-10 h-10 rounded-full bg-stone-900 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:scale-105 group-hover:border-amber-400 transition-all duration-300 shadow-lg shadow-black/40">
            <Coffee className="w-5 h-5 text-amber-400" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-white font-jakarta font-extrabold text-lg tracking-tight group-hover:text-amber-200 transition-colors">
                CABUC
              </span>
              <span className="text-amber-400/90 text-xs font-semibold tracking-wider uppercase bg-amber-950/60 border border-amber-500/30 px-1.5 py-0.5 rounded">
                NYC
              </span>
            </div>
            <span className="text-stone-400 text-[10px] font-medium tracking-widest uppercase font-jakarta">
              Coffee & Turkish Craft
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-stone-900/70 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-stone-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Live Status Pill (Desktop) */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs font-medium backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Open today · Closes 6 PM</span>
          </div>

          {/* AI Barista Trigger */}
          <button
            id="header-barista-btn"
            onClick={onOpenBarista}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs font-medium transition-all"
            title="Ask AI Barista for a recommendation"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">AI Barista</span>
          </button>

          {/* Tasting Bag / Cart */}
          <button
            id="header-bag-btn"
            onClick={onOpenCart}
            className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <ShoppingBag className="w-4 h-4 text-amber-200" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-stone-950 text-[10px] font-bold flex items-center justify-center animate-scaleIn">
                {cartCount}
              </span>
            )}
          </button>

          {/* Direct Directions */}
          <a
            href={businessData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-amber-500 text-stone-950 font-jakarta font-semibold text-xs px-4 py-2 rounded-full hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Lex & 82nd</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-stone-900 border border-white/10 text-stone-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 p-5 rounded-2xl bg-stone-900/95 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Daily 7am – 6pm
            </span>
            <span className="text-xs text-stone-400">1211 Lexington Ave</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-stone-200 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBarista();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Ask AI Barista Recommendation
            </button>
            <a
              href={`tel:${businessData.phoneRaw}`}
              className="w-full py-2.5 px-4 rounded-xl bg-stone-800 text-stone-200 text-sm font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call {businessData.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
