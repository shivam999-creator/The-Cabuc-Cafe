import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickActions } from './components/QuickActions';
import { StoryHeritage } from './components/StoryHeritage';
import { FeaturedSignatures } from './components/FeaturedSignatures';
import { MenuSection } from './components/MenuSection';
import { AIBaristaConcierge } from './components/AIBaristaConcierge';
import { AmbienceBento } from './components/AmbienceBento';
import { GallerySection } from './components/GallerySection';
import { ReviewThemes } from './components/ReviewThemes';
import { LocationHours } from './components/LocationHours';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { MobileActionBar } from './components/MobileActionBar';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Cart Handlers
  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.menuItem.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.menuItem.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((ci) => ci.menuItem.id !== itemId));
    } else {
      setCartItems((prev) =>
        prev.map((ci) => (ci.menuItem.id === itemId ? { ...ci, quantity: newQty } : ci))
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Fixed Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBarista={() => scrollToSection('barista')}
      />

      {/* Main Single-Page Flow */}
      <main>
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onOpenBarista={() => scrollToSection('barista')}
        />

        <QuickActions
          onOpenCart={() => setIsCartOpen(true)}
          onOpenBarista={() => scrollToSection('barista')}
        />

        <StoryHeritage />

        <FeaturedSignatures
          onAddToCart={handleAddToCart}
          onExploreAll={() => scrollToSection('menu')}
        />

        <MenuSection onAddToCart={handleAddToCart} />

        <AIBaristaConcierge onAddToCart={handleAddToCart} />

        <AmbienceBento />

        <GallerySection />

        <ReviewThemes />

        <LocationHours />

        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Order / Tasting Bag Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Persistent Mobile Bottom Action Bar */}
      <MobileActionBar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBarista={() => scrollToSection('barista')}
      />
    </div>
  );
}
