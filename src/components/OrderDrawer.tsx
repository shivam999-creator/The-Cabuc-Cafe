import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Coffee, Check, Clock, MapPin } from 'lucide-react';
import { CartItem, MenuItem } from '../types';
import { businessData } from '../data/siteData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [milkPreference, setMilkPreference] = useState<string>('Whole Milk');
  const [tempChoice, setTempChoice] = useState<'Hot' | 'Iced'>('Hot');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderTicketNumber, setOrderTicketNumber] = useState<string>('');

  if (!isOpen) return null;

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, curr) => {
    const priceNum = parseFloat(curr.menuItem.price.replace('$', '')) || 0;
    return acc + priceNum * curr.quantity;
  }, 0);

  const tax = subtotal * 0.08875; // NYC sales tax
  const total = subtotal + tax;

  const handlePlaceOrder = () => {
    const ticket = 'CABUC-' + Math.floor(1000 + Math.random() * 9000);
    setOrderTicketNumber(ticket);
    setOrderPlaced(true);
  };

  const handleReset = () => {
    setOrderPlaced(false);
    onClearCart();
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex justify-end animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-stone-900 border-l border-white/10 h-full flex flex-col justify-between p-6 sm:p-8 shadow-2xl overflow-y-auto"
      >
        {/* Top Bar */}
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Your Tasting Bag
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {orderPlaced ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6">
                <Check className="w-8 h-8" />
              </div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block mb-1">
                Pickup Order Confirmed
              </span>
              <h4 className="font-serif text-3xl font-bold text-white mb-2">
                #{orderTicketNumber}
              </h4>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xs mb-6 font-light leading-relaxed">
                Your drink & pastries are queued with our baristas at <strong>1211 Lexington Ave</strong>. Estimated pickup time: <strong>7–12 minutes</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-stone-950 border border-white/10 w-full text-left space-y-2 text-xs text-stone-400 mb-8">
                <div className="flex items-center gap-2 text-stone-200">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>1211 Lexington Ave (Corner 82nd St)</span>
                </div>
                <div className="flex items-center gap-2 text-stone-200">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Ready at the pickup counter</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3.5 rounded-full bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-lg"
              >
                Back to Cafe Menu
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center">
              <Coffee className="w-12 h-12 text-stone-600 mb-4" />
              <p className="text-stone-400 text-sm font-medium mb-1">Your tasting bag is empty.</p>
              <p className="text-stone-500 text-xs max-w-xs mb-6">
                Add our Signature Baklava Latte, authentic Cezve Turkish coffee, or warm börek to get started.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-amber-500 text-stone-950 text-xs font-bold hover:bg-amber-400 transition-all"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Items List */}
              <div className="space-y-3.5 max-h-64 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div
                    key={item.menuItem.id}
                    className="p-3.5 rounded-2xl bg-stone-950/60 border border-white/5 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <img
                        src={item.menuItem.image}
                        alt={item.menuItem.name}
                        className="w-12 h-12 rounded-xl object-cover shrink-0"
                      />
                      <div className="truncate">
                        <h4 className="font-bold text-xs text-white truncate">
                          {item.menuItem.name}
                        </h4>
                        <span className="text-[11px] text-amber-400 font-semibold">
                          {item.menuItem.price}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-lg bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center"
                      >
                        {item.quantity === 1 ? <Trash2 className="w-3.5 h-3.5 text-rose-400" /> : <Minus className="w-3.5 h-3.5" />}
                      </button>
                      <span className="text-xs font-bold text-white w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-lg bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Milk & Temp Customizer */}
              <div className="p-4 rounded-2xl bg-stone-950/40 border border-white/5 space-y-3">
                <span className="text-xs text-stone-400 font-semibold uppercase tracking-wider block">
                  Drink Customization
                </span>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-stone-300">Milk:</span>
                  <div className="flex gap-1.5">
                    {['Whole Milk', 'Oatly Oat', 'Almond'].map((m) => (
                      <button
                        key={m}
                        onClick={() => setMilkPreference(m)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-medium transition-all ${
                          milkPreference === m
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'bg-stone-800 text-stone-400'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-stone-300">Serving:</span>
                  <div className="flex gap-1.5">
                    {(['Hot', 'Iced'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTempChoice(t)}
                        className={`px-3 py-1 rounded-lg text-[10px] font-medium transition-all ${
                          tempChoice === t
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'bg-stone-800 text-stone-400'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Subtotal & Checkout */}
        {!orderPlaced && cartItems.length > 0 && (
          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-400">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>NYC Tax (8.875%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/5">
                <span>Total</span>
                <span className="text-amber-400">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-jakarta font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-amber-500/25"
            >
              <span>Submit Counter Pickup Ticket</span>
            </button>

            <p className="text-[11px] text-center text-stone-500">
              Pay upon pickup at 1211 Lexington Ave with Apple Pay, Card, or Cash.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
