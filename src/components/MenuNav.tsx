import { useEffect, useState } from "react";
import { menu } from "@/data/menu";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/store/cart";

const tabs = [...menu.map((m) => ({ id: m.id, label: m.title })), { id: "deals", label: "Deals" }];

export function MenuNav({ onOpenCart }: { onOpenCart: () => void }) {
  const [active, setActive] = useState("pizza");
  const lines = useCart();
  const count = lines.reduce((s, l) => s + l.qty, 0);

  return (
    <div className="sticky top-0 z-40 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center overflow-x-auto scrollbar-none p-2 gap-2">
        {tabs.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            onClick={() => setActive(t.id)}
            className={`whitespace-nowrap px-4 py-2 text-xs font-bold uppercase tracking-widest transition ${
              active === t.id
                ? "text-white border-b-2 border-amber-500"
                : "text-gray-500 hover:text-white"
            }`}
          >
            {t.label}
          </a>
        ))}
      </div>
    </div>
  );
}
