import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { MenuNav } from "@/components/MenuNav";
import { MenuSection } from "@/components/MenuSection";
import { DealsSection } from "@/components/DealsSection";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { menu, BRAND } from "@/data/menu";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Spicy Foods Cafe — Karachi's Hottest Burgers, Pizza & Rolls" },
      {
        name: "description",
        content:
          "Spicy Foods Cafe in Liaquatabad, Karachi. Flame-grilled burgers, fresh pizza, signature Lava Roll and value deals. Open 3 PM to 3 AM.",
      },
      { property: "og:title", content: "Spicy Foods Cafe" },
      { property: "og:description", content: "Karachi's hottest cafe — burgers, pizza, rolls & deals." },
      {
        property: "og:image",
        content: "/images/bg1.jpg",
      },
    ],
  }),
});

function Index() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <MenuNav onOpenCart={() => setCartOpen(true)} />
      {menu.map((s) => (
        <MenuSection key={s.id} section={s} />
      ))}
      <DealsSection />
      <Footer />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <a
        href={`https://wa.me/${BRAND.whatsapp}`}
        target="_blank"
        rel="noreferrer noopener"
        className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-fire text-2xl shadow-glow transition hover:scale-110"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
