import { Link } from "react-router-dom";
import type { MenuSection as MS, MenuItem } from "@/data/menu";
import { img } from "@/data/menu";
import { cart } from "@/store/cart";
import { toast } from "@/lib/swal";
import { Plus } from "lucide-react";

export function MenuSection({ section }: { section: MS }) {
  const quickAdd = (e: React.MouseEvent | React.KeyboardEvent, item: MenuItem) => {
    e.preventDefault();
    e.stopPropagation();
    cart.add({ id: item.id, name: item.name, price: item.price, image: item.image });
    toast.fire({ icon: "success", title: `${item.name} added 🌶️` });
  };

  return (
    <section id={section.id} className="px-4 py-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 font-display text-2xl font-bold uppercase tracking-wider text-amber-500">
          {section.title}
        </h2>
        {/* Mobile: grid-cols-2, Desktop: md:grid-cols-4 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {section.items.map((item) => (
            <Link
              key={item.id}
              to={`/menu/${item.id}`}
              className="group block overflow-hidden rounded-2xl border-l-4 border-amber-500 bg-[#1e1e1e] shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all hover:bg-[#252525] active:scale-[0.98]"
            >
              <div className="aspect-square overflow-hidden bg-[#161616]">
                <img
                  src={img(item.image, 400)}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="truncate font-display text-sm font-semibold text-white">
                  {item.name}
                </h3>
                <div className="mt-1 flex items-center justify-between">
                  <p className="text-sm font-bold text-amber-500">RS {item.price}</p>
                  <button
                    type="button"
                    onClick={(e) => quickAdd(e, item)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-black transition-transform active:scale-90"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
