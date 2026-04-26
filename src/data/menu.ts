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

// Image helpers — small thumb for cart, larger for cards, x2 for retina
export const img = (url: string, w = 800) => {
  if (url.startsWith("/")) return url;
  return `${url}?auto=format&fit=crop&w=${w}&q=70`;
};

export const imgSrcSet = (url: string) => {
  if (url.startsWith("/")) return undefined;
  return `${img(url, 400)} 400w, ${img(url, 800)} 800w, ${img(url, 1200)} 1200w`;
};

export const menu: MenuSection[] = [
  {
    id: "pizza",
    title: "Pizza",
    subtitle: "Fiery flavours",
    items: [
      { id: "pz1", name: "Spicy Tikka Pizza", price: 750, image: "/images/spicy-foods-pizza.jpg", badge: "Hot", description: "Hand-stretched dough topped with marinated chicken tikka and our signature spicy sauce.", tags: ["Spicy", "Chicken"] },
      { id: "pz2", name: "BBQ Inferno Pizza", price: 450, image: "/images/BBQ Fajita Pizza.jpg", description: "Smoky BBQ sauce base, grilled chicken, jalapeños and red onions.", tags: ["BBQ", "Smoky"] },
      { id: "pz3", name: "Fajita Fire Pizza", price: 300, image: "/images/loaded-special-pizza.jpg", description: "Mexican-style fajita chicken, bell peppers and onions.", tags: ["Fajita", "Spicy"] },
      { id: "pz4", name: "Pepperoni Flame Pizza", price: 600, image: "/images/Pepperoni Flame Pizza.jpg", badge: "New", description: "Beef pepperoni with a kick of chili flakes and mozzarella.", tags: ["Beef", "New"] },
      { id: "pz5", name: "Creamy Tikka Pizza", price: 550, image: "/images/Creamy Tikka Pizza.jpg", description: "Creamy malai chicken botti with white-sauce base.", tags: ["Creamy", "Mild"] },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    subtitle: "Flame-grilled",
    items: [
      { id: "bg1", name: "Spicy Zinger", price: 280, image: "/images/spicy-foods-burger-card.jpg", badge: "Popular", description: "Crispy fried chicken fillet, fresh lettuce and hot sauce.", tags: ["Chicken", "Spicy"] },
      { id: "bg2", name: "Mighty Zinger", price: 380, image: "/images/spicy-foods-burger-hero.jpg", description: "Double zinger fillets, melted cheese and a fiery sauce.", tags: ["Double", "Spicy"] },
    ],
  },
  {
    id: "rolls",
    title: "Rolls & Wraps",
    subtitle: "Hand-rolled",
    items: [
      { id: "rl1", name: "Chicken Cheese Roll", price: 70, image: "/images/Cheese-Paratha-Roll.jpg", description: "Soft paratha wrapped around chicken and stretchy cheese.", tags: ["Chicken", "Cheese"] },
      { id: "rl2", name: "Chicken Chatni Roll", price: 150, image: "/images/Chicken Chatni Roll.webp", description: "Charcoal-grilled chicken boti with onions and chutney.", tags: ["Grilled", "Chicken"] },
      { id: "rl3", name: "Mayo Garlic Roll", price: 180, image: "/images/Mayo Garlic Roll.jpg", description: "Our signature garlic mayo roll.", tags: ["Creamy", "Popular"] },
    ],
  },
  {
    id: "crispy",
    title: "Crispy",
    subtitle: "Golden & crunchy",
    items: [
      { id: "cr1", name: "Chicken Nuggets", price: 200, image: "/images/Nuggets 9 pcs.jpg", description: "Golden, crispy chicken nuggets served with dip.", tags: ["Crispy", "Snack"] },
      { id: "cr2", name: "Chicken Strips", price: 300, image: "/images/fire-chicken-strips.png", description: "Hand-breaded chicken strips, fried to perfection.", tags: ["Crispy", "Chicken"] },
      { id: "cr3", name: "Crispy Wings", price: 350, image: "/images/special-wings-6.jpg", badge: "Hot", description: "Spicy wings with a crunchy coating.", tags: ["Spicy", "Wings"] },
      { id: "cr4", name: "Crispy Broast Quarter", price: 450, image: "/images/Crispy Broast Quarter.jpg", description: "Traditional crispy broast with a spicy twist.", tags: ["Crispy", "Bestseller"] },
    ],
  },
  {
    id: "fries",
    title: "Fries",
    subtitle: "Loaded",
    items: [
      { id: "fr1", name: "Pizza Fries", price: 300, image: "/images/Popular-loaded-pizza-fries.png", description: "Crispy fries topped with pizza sauce and cheese.", tags: ["Loaded", "Cheese"] },
      { id: "fr2", name: "Masala Fries", price: 100, image: "/images/masala-fries.jpeg", description: "Crispy fries tossed with house masala.", tags: ["Spicy", "Value"] },
      { id: "fr3", name: "Mayo Fries", price: 120, image: "/images/Cheesy Garlic Fries.png", description: "Crispy fries drizzled with garlic mayo.", tags: ["Creamy", "Mild"] },
      { id: "fr4", name: "Plain Salted Fries", price: 80, image: "/images/plain-fries.avif", description: "Simple, crispy and perfectly salted.", tags: ["Classic"] },
    ],
  },
  {
    id: "other",
    title: "Other",
    subtitle: "Pasta & Wraps",
    items: [
      { id: "ot1", name: "Spicy Pasta", price: 300, image: "/images/spicy-foods-sides.jpg", description: "Penne in a creamy spicy red sauce.", tags: ["Pasta", "Spicy"] },
      { id: "ot2", name: "Crispy Tortilla Wrap", price: 350, image: "/images/Crispy Tortilla Wrap.jpg", description: "Toasted tortilla with crispy chicken and veggies.", tags: ["Wrap", "Crispy"] },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    subtitle: "Add-ons",
    items: [
      { id: "ex1", name: "Extra Cheese Slice", price: 50, image: "/images/Extra Cheese Slice.jpg", description: "Add a slice of melty cheese.", tags: ["Add-on"] },
      { id: "ex2", name: "Signature Sauce Dip", price: 40, image: "/images/Signature Sauce Cup.jpg", description: "Our signature fiery dip.", tags: ["Spicy", "Dip"] },
      { id: "ex3", name: "Cold Drink", price: 80, image: "/images/cold-drink.webp", description: "Chilled soft drink.", tags: ["Drink"] },
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
  { id: "d1", name: "Family Feast Deal", price: 1300, image: "/images/family-feast.webp", items: ["1 Large Pizza", "2 Zinger Burgers", "1 Litre Cold Drink"], description: "Perfect meal for the whole family.", tags: ["Family", "Value"] },
];

export const HERO_SLIDES = [
  {
    eyebrow: "Open Now — 3PM to 3AM",
    title: "Spicy",
    titleAccent: "Burgers",
    subtitle: "Zinger · Mighty Zinger · Caramelized Beef",
    image: "/images/spicy-foods-burger-hero.jpg",
  },
  {
    eyebrow: "8 Signature Flavours",
    title: "Wood-fired",
    titleAccent: "Pizza",
    subtitle: "Tikka · BBQ · Fajita · Malai Botti & More",
    image: "/images/spicy-foods-pizza.jpg",
  },
];

export const BRAND = {
  name: "Spicy Foods",
  tagline: "Spicy Foods Cafe",
  location: "Liaquatabad B1, Karachi",
  hours: "3 PM — 3 AM",
  phone: "+92 315 8454839",
  whatsapp: "923158454839",
  instagram: "https://www.instagram.com/anusharehman64?igsh=eWIwejlsd3BzOGQ1",
  facebook: "https://www.facebook.com/share/1Gjb9yRyTA/",
  tiktok: "https://www.tiktok.com/@agenticaideveloper",
};
