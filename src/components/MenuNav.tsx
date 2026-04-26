import { useEffect, useState } from "react";
import { menu } from "@/data/menu";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/store/cart";

const tabs = [...menu.map((m) => ({ id: m.id, label: m.title })), { id: "deals", label: "Deals" }];

export function MenuNav({ onOpenCart }: { onOpenCart: () => void }) {
  const [active, setActive] = useState("pizza");
  const lines = useCart();
  const count = lines.reduce((s, l) => s + l.qty, 0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    tabs.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <nav className="scrollbar-none flex flex-1 items-center gap-1 overflow-x-auto">
          {tabs.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition ${
                active === t.id
                  ? "bg-gradient-fire text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:bg-card hover:text-foreground"
              }`}
            >
              {t.label}
            </a>
          ))}
        </nav>
        <button
          onClick={onOpenCart}
          className="relative flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary"
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden sm:inline">Cart</span>
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-fire px-1.5 text-xs font-bold text-primary-foreground">
            {count}
          </span>
        </button>
      </div>
    </div>
  );
}
