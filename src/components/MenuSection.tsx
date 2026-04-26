import { Link } from "react-router-dom";
import type { MenuSection as MS, MenuItem } from "@/data/menu";
import { img, imgSrcSet } from "@/data/menu";
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
    <section id={section.id} className="scroll-mt-24 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end gap-4">
          <div className="h-px w-10 bg-primary" />
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-foreground md:text-4xl">
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="mt-1 text-sm text-muted-foreground">{section.subtitle}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => (
            <Link
              key={item.id}
              to={`/menu/${item.id}`}
              className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={img(item.image, 400)}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-3">
                <h3 className="truncate font-display text-sm font-semibold text-foreground">
                  {item.name}
                </h3>
                <p className="text-xs font-medium text-primary">RS {item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
