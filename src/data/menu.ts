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
    subtitle: "Fiery flavours",
    items: [
      { id: "pz1", name: "Spicy Tikka Pizza", price: 750, image: "/images/spicy-foods-pizza.jpg", badge: "Hot", description: "Hand-stretched dough topped with marinated chicken tikka.", tags: ["Spicy", "Chicken"] },
      { id: "pz2", name: "BBQ Inferno Pizza", price: 450, image: "/images/BBQ Fajita Pizza.jpg", description: "Smoky BBQ sauce base, grilled chicken.", tags: ["BBQ", "Smoky"] },
      { id: "pz3", name: "Fajita Fire Pizza", price: 300, image: "/images/loaded-special-pizza.jpg", description: "Mexican-style fajita chicken, bell peppers.", tags: ["Fajita", "Spicy"] },
      { id: "pz4", name: "Pepperoni Flame", price: 600, image: "/images/Pepperoni Flame Pizza.jpg", badge: "New", description: "Beef pepperoni with chili flakes.", tags: ["Beef", "New"] },
      { id: "pz5", name: "Creamy Tikka Pizza", price: 550, image: "/images/Creamy Tikka Pizza.jpg", description: "Creamy malai chicken botti with white-sauce base.", tags: ["Creamy", "Mild"] },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    subtitle: "Flame-grilled",
    items: [
      { id: "bg1", name: "Spicy Zinger", price: 280, image: "/images/spicy-foods-burger-card.jpg", badge: "Popular", description: "Crispy fried chicken fillet.", tags: ["Chicken", "Spicy"] },
      { id: "bg2", name: "Mighty Zinger", price: 380, image: "/images/spicy-foods-burger-hero.jpg", description: "Double zinger fillets, melted cheese.", tags: ["Double", "Spicy"] },
      { id: "bg3", name: "Chicken Chilli", price: 250, image: "/images/spicy-foods-sides.jpg", description: "Tender chicken patty, chilli sauce.", tags: ["Chicken", "Spicy"] },
      { id: "bg4", name: "Beef Inferno", price: 400, image: "/images/Crispy Broast Quarter.jpg", description: "Flame-grilled beef, jalapeños.", tags: ["Beef", "Spicy"] },
      { id: "bg5", name: "Mega Crunch", price: 450, image: "/images/Crispy Tortilla Wrap.jpg", description: "Triple-decker burger, extreme crunch.", tags: ["Crunchy", "Mega"] },
    ],
  },
  {
    id: "rolls",
    title: "Rolls & Wraps",
    subtitle: "Hand-rolled",
    items: [
      { id: "rl1", name: "Chicken Cheese Roll", price: 70, image: "/images/Cheese-Paratha-Roll.jpg", description: "Soft paratha, chicken, stretchy cheese.", tags: ["Chicken", "Cheese"] },
      { id: "rl2", name: "Chicken Chatni Roll", price: 150, image: "/images/Chicken Chatni Roll.webp", description: "Charcoal-grilled boti, chutney.", tags: ["Grilled", "Chicken"] },
      { id: "rl3", name: "Mayo Garlic Roll", price: 180, image: "/images/Mayo Garlic Roll.jpg", description: "Signature garlic mayo roll.", tags: ["Creamy", "Popular"] },
    ],
  },
  {
    id: "crispy",
    title: "Crispy",
    subtitle: "Golden & crunchy",
    items: [
      { id: "cr1", name: "Chicken Nuggets", price: 200, image: "/images/Nuggets 9 pcs.jpg", description: "Golden, crispy nuggets.", tags: ["Crispy", "Snack"] },
      { id: "cr2", name: "Chicken Strips", price: 300, image: "/images/fire-chicken-strips.png", description: "Hand-breaded strips.", tags: ["Crispy", "Chicken"] },
      { id: "cr3", name: "Crispy Wings", price: 350, image: "/images/special-wings-6.jpg", badge: "Hot", description: "Spicy wings, crunchy coating.", tags: ["Spicy", "Wings"] },
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
  { id: "d1", name: "Family Feast", price: 1300, image: "/images/family-feast.webp", items: ["1 Large Pizza", "2 Zinger Burgers"], description: "Meal for the whole family.", tags: ["Family"] },
  { id: "d2", name: "Burger Duo", price: 550, image: "/images/spicy-foods-burger-card.jpg", items: ["2 Zinger Burgers", "1 Large Fries"], description: "Double the burger, double the fun.", tags: ["Burger"] },
  { id: "d3", name: "Pizza Combo", price: 950, image: "/images/spicy-foods-pizza.jpg", items: ["1 Medium Pizza", "4 Wings", "1 Drink"], description: "Pizza and wings experience.", tags: ["Pizza"] },
  { id: "d4", name: "Midnight Snack", price: 400, image: "/images/fire-chicken-strips.png", items: ["6 Wings", "2 Rolls"], description: "Late night hunger buster.", tags: ["Crispy"] },
];

export const HERO_SLIDES = [
  { eyebrow: "Signature Pizza", title: "BBQ", titleAccent: "Fajita", subtitle: "Smoky, spicy baked", image: "/images/BBQ Fajita Pizza.jpg" },
  { eyebrow: "Popular Roll", title: "Chicken", titleAccent: "Chatni Roll", subtitle: "Fresh roll with chutney", image: "/images/Chicken Chatni Roll.webp" },
  { eyebrow: "Classic", title: "Cheese", titleAccent: "Paratha Roll", subtitle: "Flaky paratha with juicy fillings", image: "/images/Cheese-Paratha-Roll.jpg" },
];

export const BRAND = {
  name: "Spicy Foods",
  tagline: "Spicy Foods Cafe",
  hours: "3 PM — 3 AM",
  phone: "+92 315 8454839",
  whatsapp: "923158454839",
  instagram: "https://www.instagram.com/anusharehman64?igsh=eWIwejlsd3BzOGQ1",
  facebook: "https://www.facebook.com/share/1Gjb9yRyTA/",
  tiktok: "https://www.tiktok.com/@agenticaideveloper",
};
