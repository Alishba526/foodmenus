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
    const handleScroll = () => {
      const sections = tabs.map(t => document.getElementById(t.id));
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-40 bg-black border-b border-white/5 shadow-2xl">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
        <div className="flex items-center overflow-x-auto scrollbar-none py-1 gap-1 flex-1">
          {tabs.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              onClick={(e) => {
                setActive(t.id);
                // Smooth scroll
                const element = document.getElementById(t.id);
                if (element) {
                  e.preventDefault();
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: "smooth"
                  });
                }
              }}
              className={`whitespace-nowrap px-6 py-4 text-xs font-black uppercase tracking-[0.15em] transition-all relative ${
                active === t.id
                  ? "text-amber-500"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {t.label}
              {active === t.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-amber-500 rounded-t-full shadow-[0_-4px_12px_rgba(245,158,11,0.3)]" />
              )}
            </a>
          ))}
        </div>
        
        <button
          onClick={onOpenCart}
          className="relative ml-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white transition-all hover:bg-white/10 active:scale-90 border border-white/10"
          aria-label="Open cart"
        >
          <ShoppingCart size={20} />
          {count > 0 && (
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-black text-black shadow-xl animate-bounce-short">
              {count}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
