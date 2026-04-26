import { Link } from "@tanstack/react-router";
import { deals } from "@/data/menu";
import type { Deal } from "@/data/menu";
import { img, imgSrcSet } from "@/data/menu";
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
    <section id="deals" className="scroll-mt-24 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end gap-4">
          <div className="h-px w-10 bg-primary" />
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-foreground md:text-4xl">
              Value Deals
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">Family combos from RS 700</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {deals.map((d) => (
            <Link
              key={d.id}
              to="/menu/$itemId"
              params={{ itemId: d.id }}
              preload="intent"
              className="block overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="relative aspect-video bg-muted">
                <img
                  src={img(d.image, 800)}
                  srcSet={imgSrcSet(d.image)}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt={d.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute inset-x-4 bottom-3 flex items-end justify-between">
                  <h3 className="font-display text-2xl font-bold text-foreground">{d.name}</h3>
                  <span className="rounded-full bg-gradient-fire px-3 py-1 text-sm font-bold text-primary-foreground shadow-glow">
                    RS {d.price.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {d.items.map((it, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={(e) => quickAdd(e, d)}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-fire py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-glow transition hover:opacity-90 active:scale-[0.98]"
                >
                  <Plus className="h-4 w-4" /> Add Deal
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
