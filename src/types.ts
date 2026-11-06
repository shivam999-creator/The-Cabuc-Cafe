export interface MenuItem {
  id: string;
  name: string;
  category: 'turkish_signature' | 'espresso_coffee' | 'tea_matcha' | 'pastries_borek' | 'bites';
  description: string;
  price: string;
  badge?: string;
  dietary?: string[];
  featured?: boolean;
  image: string;
  tastingNotes?: string[];
  ingredients?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  badge?: string;
  timeAgo: string;
  rating: number;
  content: string;
  highlightItem?: string;
  source: 'Google Maps' | 'Instagram' | 'Local Guide';
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  caption: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  milkChoice?: string;
  sweetness?: string;
  tempChoice?: 'Hot' | 'Iced';
  notes?: string;
}

export interface BusinessData {
  name: string;
  tagline: string;
  category: string;
  address: string;
  neighborhood: string;
  crossStreet: string;
  cityStateZip: string;
  phone: string;
  phoneRaw: string;
  googleMapsUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  hours: {
    days: string;
    time: string;
    isToday?: boolean;
  }[];
}
