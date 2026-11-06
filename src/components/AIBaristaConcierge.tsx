import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, Coffee, Plus, RefreshCw } from 'lucide-react';
import { MenuItem } from '../types';
import { menuItems } from '../data/siteData';

interface AIBaristaConciergeProps {
  onAddToCart: (item: MenuItem) => void;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  matchedItem?: MenuItem;
}

export const AIBaristaConcierge: React.FC<AIBaristaConciergeProps> = ({ onAddToCart }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Merhaba & Welcome to Cabuc Coffee at 1211 Lexington! I am your AI Barista concierge. Tell me your mood, favorite flavor notes (sweet, nutty, strong, floral, or iced), or ask for pairing recommendations!',
    },
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    '✨ Sweet & nutty afternoon drink',
    '☕ Traditional Turkish coffee experience',
    '🧊 Cold brew for a warm NYC walk',
    '🥐 Drink pairing for fresh Spinach Börek',
    '🌱 Vegan & oat milk options',
  ];

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Helper to match mentioned menu item
  const findMentionedItem = (text: string): MenuItem | undefined => {
    const lower = text.toLowerCase();
    return menuItems.find((item) => lower.includes(item.name.toLowerCase()) || lower.includes(item.id));
  };

  const handleSendMessage = async (userText: string) => {
    if (!userText.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: userText.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputPrompt('');
    setIsLoading(true);

    try {
      // Build conversation payload for backend
      const historyPayload = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/gemini/barista', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: userText,
          conversationHistory: historyPayload,
        }),
      });

      const data = await res.json();
      const botReply = data.reply || 'Our baristas recommend our Signature Baklava Latte!';
      const matched = findMentionedItem(botReply);

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: botReply,
        matchedItem: matched,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Barista chat error:', err);
      // Fallback
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content:
            'I highly recommend our Signature Baklava Latte ($6.75) with pistachio and cardamom honey reduction, or a traditional Turkish Cezve coffee with Turkish delight!',
          matchedItem: menuItems[0],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="barista" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="bg-gradient-to-b from-stone-900 via-stone-900/95 to-stone-950 rounded-[2.5rem] border border-amber-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black relative overflow-hidden">
        {/* Ambient Decorative Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between pb-8 mb-8 border-b border-white/10 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Cabuc AI Sommelier & Barista
                </h2>
                <span className="text-[10px] font-bold bg-amber-500/20 border border-amber-500/40 text-amber-300 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Gemini 3.7
                </span>
              </div>
              <p className="text-stone-400 text-xs sm:text-sm mt-0.5">
                Instant flavor matching, tasting notes, and drink customizer based on your cravings.
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              setMessages([
                {
                  id: 'welcome-reset',
                  role: 'assistant',
                  content: 'Chat refreshed! How can I assist your coffee tasting today?',
                },
              ])
            }
            className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-white px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Conversation</span>
          </button>
        </div>

        {/* Quick Prompts Rail */}
        <div className="relative z-10 mb-6">
          <span className="text-xs text-stone-400 font-medium block mb-2.5">Try asking:</span>
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((qp) => (
              <button
                key={qp}
                onClick={() => handleSendMessage(qp)}
                className="px-3.5 py-1.5 rounded-full bg-stone-800/80 hover:bg-amber-500/20 text-stone-300 hover:text-amber-200 border border-white/10 hover:border-amber-500/30 text-xs font-medium transition-all text-left"
              >
                {qp}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages Container */}
        <div className="relative z-10 bg-stone-950/70 border border-white/10 rounded-2xl p-4 sm:p-6 mb-6 h-80 sm:h-96 overflow-y-auto space-y-4 shadow-inner">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';

            return (
              <div key={msg.id} className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
                {!isUser && (
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-amber-500 text-stone-950 font-medium rounded-tr-none'
                      : 'bg-stone-900 border border-white/10 text-stone-200 rounded-tl-none'
                  }`}
                >
                  <p>{msg.content}</p>

                  {/* If assistant matched a specific menu item, offer instant add */}
                  {msg.matchedItem && (
                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between gap-3 bg-stone-950/60 p-3 rounded-xl">
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <img
                          src={msg.matchedItem.image}
                          alt={msg.matchedItem.name}
                          className="w-9 h-9 rounded-lg object-cover shrink-0"
                        />
                        <div className="truncate">
                          <span className="block font-bold text-xs text-white truncate">
                            {msg.matchedItem.name}
                          </span>
                          <span className="block text-[11px] text-amber-400 font-semibold">
                            {msg.matchedItem.price}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => onAddToCart(msg.matchedItem!)}
                        className="px-3 py-1.5 rounded-lg bg-amber-500 text-stone-950 text-xs font-bold flex items-center gap-1 hover:bg-amber-400 shrink-0 shadow"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Bag</span>
                      </button>
                    </div>
                  )}
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-full bg-stone-800 text-stone-300 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 justify-start items-center text-stone-400 text-xs">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shrink-0">
                <Coffee className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-stone-900 border border-white/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-bounce"></span>
                <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]"></span>
                <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-stone-300 ml-1">Barista is crafting your recommendation...</span>
              </div>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(inputPrompt);
          }}
          className="relative z-10 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            placeholder="Ask anything: e.g. 'I want something cold with oat milk and honey'..."
            className="flex-grow px-5 py-3.5 bg-stone-950 border border-white/15 rounded-full text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!inputPrompt.trim() || isLoading}
            className="px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-stone-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shrink-0 shadow-lg shadow-amber-500/20"
          >
            <span>Ask</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};
