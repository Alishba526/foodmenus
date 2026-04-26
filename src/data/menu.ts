export type MenuItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  description: string;
  tags: string[];
};

export type MenuSection = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const img = (url: string, w = 800) => {
  if (url.startsWith("/")) return url;
  return `${url}?auto=format&fit=crop&w=${w}&q=70`;
};

export const menu: MenuSection[] = [
  {
    id: "pizza",
    title: "Pizza",
    subtitle: "Freshly Baked",
    items: [
      { id: "pz1", name: "BBQ Fajita Pizza", price: 950, image: "/images/BBQ Fajita Pizza.webp", badge: "Hot", description: "Smoky BBQ chicken with bell peppers and onions.", tags: ["Spicy", "Chicken"] },
      { id: "pz2", name: "Creamy Tikka Pizza", price: 1050, image: "/images/Creamy Tikka Pizza.jpg", description: "Rich malai tikka with a creamy white sauce base.", tags: ["Creamy", "Mild"] },
      { id: "pz3", name: "Pepperoni Flame", price: 1100, image: "/images/Pepperoni Flame Pizza.jpg", description: "Spicy beef pepperoni with extra mozzarella.", tags: ["Beef", "Spicy"] },
      { id: "pz4", name: "Loaded Special", price: 1250, image: "/images/loaded-special-pizza.jpg", badge: "Chef Choice", description: "Our signature pizza with everything on it.", tags: ["Signature"] },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    subtitle: "Flame Grilled",
    items: [
      { id: "bg1", name: "Spicy Zinger", price: 350, image: "/images/spicy-foods-burger-card.jpg", badge: "Best Seller", description: "Crispy fried chicken breast with secret spicy mayo.", tags: ["Chicken", "Spicy"] },
      { id: "bg2", name: "Mighty Beef", price: 550, image: "/images/spicy-foods-burger-hero.jpg", description: "Double flame-grilled beef patties with melted cheese.", tags: ["Beef", "Double"] },
    ],
  },
  {
    id: "rolls",
    title: "Rolls",
    subtitle: "Paratha Wraps",
    items: [
      { id: "rl1", name: "Cheese Paratha Roll", price: 280, image: "/images/Cheese-Paratha-Roll.webp", badge: "Popular", description: "Golden paratha wrapped with juicy chicken and cheese.", tags: ["Cheese", "Chicken"] },
      { id: "rl2", name: "Chicken Chatni Roll", price: 220, image: "/images/Chicken Chatni Roll.webp", description: "Classic charcoal chicken with spicy green chutney.", tags: ["Spicy", "Classic"] },
      { id: "rl3", name: "Mayo Garlic Roll", price: 250, image: "/images/Mayo Garlic Roll.jpg", description: "Tender chicken with our signature mayo garlic sauce.", tags: ["Creamy"] },
    ],
  },
  {
    id: "crispy",
    title: "Crispy & Sides",
    subtitle: "Crunchy Bites",
    items: [
      { id: "cr1", name: "Masala Fries", price: 180, image: "/images/masala-fries.jpeg", badge: "Must Try", description: "Crispy golden fries tossed in spicy desi masala.", tags: ["Spicy", "Sides"] },
      { id: "cr2", name: "Fire Strips", price: 450, image: "/images/fire-chicken-strips.png", description: "Extra crunchy chicken strips with a fiery kick.", tags: ["Crispy", "Spicy"] },
      { id: "cr3", name: "Chicken Nuggets", price: 320, image: "/images/Nuggets 9 pcs.jpg", description: "9 pieces of golden breaded chicken nuggets.", tags: ["Kids", "Crispy"] },
      { id: "cr4", name: "Special Wings", price: 480, image: "/images/special-wings-6.jpg", description: "6 pieces of juicy wings with a crunchy coating.", tags: ["Wings", "Spicy"] },
      { id: "cr5", name: "Pizza Fries", price: 550, image: "/images/Popular-loaded-pizza-fries.png", description: "Loaded fries topped with pizza sauce, cheese, and olives.", tags: ["Loaded", "Cheesy"] },
    ],
  },
];

export type Deal = {
  id: string;
  name: string;
  price: number;
  image: string;
  items: string[];
  description: string;
  tags: string[];
};

export const deals: Deal[] = [
  { id: "d1", name: "Family Feast", price: 2500, image: "/images/family-feast.webp", items: ["1 Large Pizza", "2 Zinger Burgers", "1.5L Drink"], description: "The ultimate meal for the whole family.", tags: ["Family"] },
  { id: "d2", name: "Duo Deal", price: 850, image: "/images/spicy-foods-burger-card.jpg", items: ["2 Zinger Burgers", "1 Regular Fries"], description: "Perfect meal for two.", tags: ["Deal"] },
];

export const HERO_SLIDES = [
  { eyebrow: "OPEN NOW — 3PM TO 3AM", title: "Signature", titleAccent: "Pizza", subtitle: "BBQ Fajita · Tikka · Spicy Inferno", image: "/images/BBQ Fajita Pizza.webp" },
  { eyebrow: "OPEN NOW — 3PM TO 3AM", title: "Classic", titleAccent: "Rolls", subtitle: "Cheese Paratha · Mayo Garlic · Chatni Roll", image: "/images/Cheese-Paratha-Roll.webp" },
  { eyebrow: "OPEN NOW — 3PM TO 3AM", title: "Spicy", titleAccent: "Sides", subtitle: "Masala Fries · Loaded Pizza Fries · Nuggets", image: "/images/masala-fries.jpeg" },
];

export const BRAND = {
  name: "Spicy Foods",
  tagline: "Spicy Foods Cafe",
  location: "Karachi, Pakistan",
  hours: "3 PM — 3 AM",
  phone: "+92 315 8454839",
  whatsapp: "923158454839",
  instagram: "https://www.instagram.com/anusharehman64?igsh=eWIwejlsd3BzOGQ1",
  facebook: "https://www.facebook.com/share/1Gjb9yRyTA/",
  tiktok: "https://www.tiktok.com/@agenticaideveloper",
};
