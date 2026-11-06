import { BusinessData, MenuItem, ReviewItem, GalleryItem, FAQItem } from '../types';

export const businessData: BusinessData = {
  name: 'Cabuc Coffee',
  tagline: 'Artisan Turkish Coffee & Modern Specialty Espresso',
  category: 'Specialty Coffee Shop & Artisanal Bakery',
  address: '1211 Lexington Ave',
  neighborhood: 'Upper East Side, Manhattan',
  crossStreet: 'Lexington Ave & 82nd Street',
  cityStateZip: 'New York, NY 10028',
  phone: '+1 (646) 891-0011',
  phoneRaw: '+16468910011',
  googleMapsUrl: 'https://www.google.com/maps/place/Cabuc+Coffee/@40.7769918,-73.9572481,646m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c2590051bfdc35:0x1f9596ad2c55e685!8m2!3d40.7769918!4d-73.9572481!16s%2Fg%2F11yfqfwxbs',
  instagramHandle: '@cabuccoffeenyc',
  instagramUrl: 'https://www.instagram.com/cabuccoffeenyc/',
  rating: 4.6,
  reviewCount: 160,
  priceRange: '$1–10',
  hours: [
    { days: 'Monday – Friday', time: '7:00 AM – 6:00 PM', isToday: true },
    { days: 'Saturday – Sunday', time: '7:30 AM – 6:00 PM', isToday: false },
  ]
};

export const menuCategories = [
  { id: 'all', label: 'All Offerings' },
  { id: 'turkish_signature', label: 'Turkish & Signatures' },
  { id: 'espresso_coffee', label: 'Espresso & Cold Brew' },
  { id: 'tea_matcha', label: 'Matcha & Botanicals' },
  { id: 'pastries_borek', label: 'Börek & Fresh Pastries' },
  { id: 'bites', label: 'Light Bites & Toast' },
] as const;

export const menuItems: MenuItem[] = [
  {
    id: 'baklava-latte',
    name: 'Signature Baklava Latte',
    category: 'turkish_signature',
    description: 'Our most sought-after creation: rich espresso infused with house pistachio-cardamom honey syrup, velvety steamed milk, and a crushed pistachio rim.',
    price: '$6.75',
    badge: 'Guest Favorite',
    dietary: ['Vegetarian', 'Nut Allergen'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['Pistachio', 'Wild Honey', 'Warm Cardamom', 'Crema'],
    ingredients: 'Espresso, Steamed Whole/Oat Milk, House Pistachio Honey Reduction, Cardamom, Crushed Pistachios'
  },
  {
    id: 'turkish-coffee',
    name: 'Traditional Turkish Coffee',
    category: 'turkish_signature',
    description: 'Authentically prepared in a traditional copper cezve with ultra-fine Arabica grounds, delivering thick velvet foam. Served with authentic Turkish delight (lokum).',
    price: '$5.50',
    badge: 'Heritage Recipe',
    dietary: ['Vegan', 'Gluten-Free'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['Deep Cocoa', 'Roasted Walnut', 'Silky Crema'],
    ingredients: 'Single-origin finely ground Turkish beans, filtered water, optional cane sugar, rosewater lokum'
  },
  {
    id: 'slow-drip-cold-brew',
    name: 'Kyoto-Style Slow Drip Cold Brew',
    category: 'espresso_coffee',
    description: 'Extracted drop-by-drop through our multi-tiered glass tower over 12 slow hours. Exceptionally smooth, low in acidity, with natural chocolate and berry undertones.',
    price: '$6.50',
    badge: '12-Hour Extraction',
    dietary: ['Vegan', 'Sugar-Free'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['Dark Chocolate', 'Ripe Blackberry', 'Clean Crisp Finish'],
    ingredients: 'Specialty Ethiopian & Colombian roast, ice-filtered mountain water'
  },
  {
    id: 'spinach-feta-borek',
    name: 'Artisanal Spinach & Feta Börek',
    category: 'pastries_borek',
    description: 'Warm, golden, flaky phyllo pastry rolled and stuffed with creamy Mediterranean feta, baby spinach, toasted sesame seeds, and Turkish olive oil.',
    price: '$7.25',
    badge: 'Baked Fresh Daily',
    dietary: ['Vegetarian'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d62810eb?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['Crispy Crust', 'Savory Feta', 'Fresh Dill', 'Sesame'],
    ingredients: 'Phyllo pastry, Greek feta, fresh spinach, organic eggs, EVOO, nigella seeds'
  },
  {
    id: 'salted-honey-croissant',
    name: 'Salted Honey Croissant',
    category: 'pastries_borek',
    description: 'Butter-laminated French croissant baked to a deep amber flake, glazed with organic wildflower honey and finished with crunchy Maldon sea salt.',
    price: '$5.50',
    badge: 'Top Seller',
    dietary: ['Vegetarian'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['Flaky Butter', 'Floral Honey', 'Maldon Sea Salt'],
    ingredients: 'European butter, French flour, wildflower honey glaze, sea salt crystals'
  },
  {
    id: 'ceremonial-matcha-latte',
    name: 'Uji Ceremonial Matcha Latte',
    category: 'tea_matcha',
    description: 'First-harvest ceremonial grade matcha from Uji, Kyoto, whisked to a jade froth and poured over steamed oat or whole milk.',
    price: '$6.25',
    badge: 'Antioxidant Rich',
    dietary: ['Vegetarian', 'Oat Milk Option'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['Sweet Umami', 'Fresh Grassy Aroma', 'Velvety Smooth'],
    ingredients: 'Ceremonial Uji matcha powder, hot water, oat/whole milk, splash of agave'
  },
  {
    id: 'spiced-cardamom-iced-latte',
    name: 'Iced Spiced Cardamom Latte',
    category: 'turkish_signature',
    description: 'Double shot of our espresso pulled over crushed green cardamom pods, served over crystal clear ice with oat milk and a touch of organic date syrup.',
    price: '$6.50',
    badge: 'Signature Cold',
    dietary: ['Vegan', 'Gluten-Free'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['Citrus Cardamom', 'Rich Espresso', 'Creamy Oat'],
    ingredients: 'Espresso, oat milk, green cardamom, date nectar'
  },
  {
    id: 'classic-cappuccino',
    name: 'Classic Flat White / Cappuccino',
    category: 'espresso_coffee',
    description: 'Double shot of specialty roasted espresso topped with glossy microfoam and crafted latte art by our passionate baristas.',
    price: '$4.95',
    dietary: ['Vegetarian', 'Dairy-Free Options'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['Caramel', 'Hazelnut', 'Silky Microfoam'],
    ingredients: 'Double espresso blend, steamed milk of choice'
  },
  {
    id: 'spiced-beef-borek',
    name: 'Ottoman Spiced Beef Börek',
    category: 'pastries_borek',
    description: 'Crispy golden phyllo coil filled with slow-cooked minced beef, sweet caramelized onions, roasted pine nuts, and allspice.',
    price: '$7.95',
    badge: 'Savory Special',
    dietary: ['High Protein'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['Crisp Phyllo', 'Spiced Beef', 'Pine Nuts', 'Onion Confit'],
    ingredients: 'Minced grass-fed beef, sweet onions, pine nuts, allspice, sumac, phyllo pastry'
  },
  {
    id: 'tahini-chocolate-cookie',
    name: 'Pistachio & Tahini Dark Chocolate Cookie',
    category: 'pastries_borek',
    description: 'Soft-baked cookie with roasted sesame tahini paste, 70% dark Belgian chocolate chunks, and chopped Turkish pistachios.',
    price: '$4.50',
    dietary: ['Vegetarian'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['Nutty Tahini', 'Molten Dark Chocolate', 'Crunchy Pistachio'],
    ingredients: 'Organic tahini, dark chocolate 70%, flour, butter, brown sugar, pistachios'
  },
  {
    id: 'masala-chai-latte',
    name: 'Artisan Masala Chai Latte',
    category: 'tea_matcha',
    description: 'Slow-simmered Assam black tea with crushed ginger, whole green cardamom, cinnamon bark, cloves, and steamed milk.',
    price: '$5.75',
    dietary: ['Vegetarian'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['Ginger Heat', 'Sweet Cinnamon', 'Creamy Finish'],
    ingredients: 'Assam black tea, whole spices, steamed milk, organic cane sugar'
  },
  {
    id: 'mediterranean-labneh-toast',
    name: 'Labneh & Za’atar Sourdough Toast',
    category: 'bites',
    description: 'Toasted Sullivan Street sourdough topped with thick strained Lebanese labneh, Persian cucumber slices, heirloom cherry tomatoes, za’atar herbs, and Aegean olive oil.',
    price: '$8.75',
    badge: 'Light Lunch',
    dietary: ['Vegetarian'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    tastingNotes: ['Tangy Labneh', 'Herbal Zaatar', 'Crusty Sourdough'],
    ingredients: 'Sourdough, strained labneh, cucumbers, cherry tomatoes, zaatar herbs, EVOO'
  }
];

export const reviewsData: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'THE EXPLORER',
    badge: 'Local Guide · 1,341 reviews',
    timeAgo: '1 month ago',
    rating: 5,
    content: 'I was walking uptown to do some sightseeing and I passed by this coffee house just as I needed another coffee. It is a rather cozy, bright space located on a great corner at Lexington and 82nd street. The coffee quality is phenomenal!',
    highlightItem: 'Espresso & Ambience',
    source: 'Local Guide'
  },
  {
    id: 'rev-2',
    author: 'Tiffany Miller',
    badge: 'Verified Customer · 9 reviews',
    timeAgo: '3 months ago',
    rating: 5,
    content: 'Lovely staff! Great atmosphere with the Turkish music, open space with great lighting, and the menu is innovative! I got the baklava latte and salted honey croissant and they were out of this world. Can’t wait to come back and try other items!',
    highlightItem: 'Baklava Latte & Salted Honey Croissant',
    source: 'Google Maps'
  },
  {
    id: 'rev-3',
    author: 'Gizem D',
    badge: 'Local Guide · 92 reviews',
    timeAgo: '4 months ago',
    rating: 5,
    content: 'Excellent coffee! I had Turkish coffee on the way in - in the morning. Then I had baklava latte on the way back in the afternoon. Small cute shop. Very friendly staff. Highly recommend it! 😊',
    highlightItem: 'Turkish Coffee & Baklava Latte',
    source: 'Local Guide'
  },
  {
    id: 'rev-4',
    author: 'David K.',
    badge: 'Upper East Side Resident',
    timeAgo: '2 weeks ago',
    rating: 5,
    content: 'The Kyoto cold brew tower here is a work of art and tastes even better. Plus, having warm fresh börek in the morning on 82nd & Lex is something you cannot find anywhere else in the neighborhood.',
    highlightItem: 'Kyoto Cold Brew & Börek',
    source: 'Google Maps'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    src: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80',
    alt: 'Signature Baklava Latte with Pistachio Dusting',
    category: 'Signature Drinks',
    caption: 'Signature Baklava Latte topped with hand-crushed pistachio rim'
  },
  {
    id: 'g-2',
    src: 'https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Traditional Cezve Turkish Coffee Service',
    category: 'Heritage Brews',
    caption: 'Authentic copper cezve brewing served with Turkish delight lokum'
  },
  {
    id: 'g-3',
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Salted Honey Croissant on Ceramic Plate',
    category: 'Fresh Pastries',
    caption: 'Freshly baked flaky salted honey croissant'
  },
  {
    id: 'g-4',
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cabuc Coffee Lexington Avenue Corner Seating',
    category: 'Ambience',
    caption: 'Sunlit corner window seating at 82nd & Lexington'
  },
  {
    id: 'g-5',
    src: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Kyoto Cold Brew Glass Tower',
    category: 'Specialty Brews',
    caption: '12-hour slow extraction cold brew glass tower'
  },
  {
    id: 'g-6',
    src: 'https://images.unsplash.com/photo-1621996346565-e3d5d62810eb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Warm Spinach and Feta Börek Roll',
    category: 'Savory Kitchen',
    caption: 'Golden sesame-crusted spinach & feta börek roll'
  }
];

export const faqItems: FAQItem[] = [
  {
    question: 'What makes the Baklava Latte unique?',
    answer: 'Our Baklava Latte is our signature house creation. We simmer real pistachios, crushed cardamom pods, and raw wildflower honey into a reduction, then blend it with double-shot espresso and silky microfoam, topping the rim with finely crushed Turkish pistachios.'
  },
  {
    question: 'How is your Turkish Coffee prepared?',
    answer: 'We brew using ultra-finely ground specialty Arabica beans in traditional copper cezve pots. It is simmered slowly over controlled heat to create a rich, dense layer of crema foam and is served traditionally with authentic Turkish delight.'
  },
  {
    question: 'Do you offer non-dairy milk and gluten-friendly options?',
    answer: 'Yes! We proudly offer Oatly Barista Oat Milk and Almond Milk for all espresso, matcha, and chai drinks. Many of our items (including our Turkish coffee, matcha, and cold brews) are naturally vegan and gluten-friendly.'
  },
  {
    question: 'Is there seating and Wi-Fi for working?',
    answer: 'Yes, Cabuc Coffee provides cozy seating along our Lexington Avenue corner with warm natural lighting, high-speed Wi-Fi, and a relaxed atmosphere accompanied by curated Turkish and ambient acoustics.'
  },
  {
    question: 'Where are you located and how do I get there by subway?',
    answer: 'We are located at 1211 Lexington Avenue (corner of 82nd Street) on Manhattan’s Upper East Side. We are just a few blocks from the 86th St Subway Station (4, 5, 6 lines) and the 77th St Station (6 line), just a 7-minute stroll from Central Park and The Metropolitan Museum of Art.'
  }
];
