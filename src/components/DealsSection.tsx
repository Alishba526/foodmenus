import { Link } from "react-router-dom";
import { deals } from "@/data/menu";
import type { Deal } from "@/data/menu";
import { img } from "@/data/menu";
import { cart } from "@/store/cart";
import { toast } from "@/lib/swal";
import { Plus } from "lucide-react";

export function DealsSection() {
  const quickAdd = (e: React.MouseEvent, d: Deal) => {
    e.preventDefault();
    e.stopPropagation();
    cart.add({ id: d.id, name: d.name, price: d.price, image: d.image });
    toast.fire({ icon: "success", title: `${d.name} added 🌶️` });
  };

  return (
    <section id="deals" className="px-4 py-8 bg-black/50">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-8 w-1.5 bg-amber-500 rounded-full" />
          <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-white">
            Exclusive <span className="text-amber-500">Deals</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {deals.map((d) => (
            <Link
              key={d.id}
              to={`/menu/${d.id}`}
              className="group relative flex overflow-hidden rounded-3xl border-l-4 border-amber-500 border border-white/5 bg-[#1e1e1e] p-4 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:border-amber-400 hover:bg-[#252525] hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]"
            >
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10">
                <img src={img(d.image, 300)} alt={d.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="ml-4 flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{d.name}</h3>
                  <p className="text-[11px] text-amber-500/90 mt-1 uppercase tracking-wider font-bold">
                    {d.items.join(" + ")}
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-bold text-white">RS {d.price}</span>
                  <button
                    onClick={(e) => quickAdd(e, d)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-black transition-transform active:scale-90 shadow-lg shadow-amber-500/30"
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
