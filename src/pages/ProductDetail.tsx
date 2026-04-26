import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Flame, ShoppingCart } from "lucide-react";
import { findProduct, relatedProducts, type ProductView } from "@/lib/products";
import { img, BRAND } from "@/data/menu";
import { cart, useCart } from "@/store/cart";
import { toast } from "@/lib/swal";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";

export default function ProductDetail() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductView | null>(null);
  const [qty, setQty] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const cartItems = useCart();
  const cartCount = cartItems.reduce((s, l) => s + l.qty, 0);

  useEffect(() => {
    if (itemId) {
      const found = findProduct(itemId);
      if (found) {
        setProduct(found);
      }
    }
    window.scrollTo(0, 0);
  }, [itemId]);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-fire shadow-glow">
          🌶️
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold text-foreground">Item not found</h1>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          We couldn't find a menu item with id "{itemId}".
        </p>
        <Link
          to="/"
          className="mt-6 rounded-xl bg-gradient-fire px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-glow"
        >
          Back to menu
        </Link>
      </div>
    );
  }

  const total = product.price * qty;
  const related = relatedProducts(product);

  const handleAdd = () => {
    cart.add(
      { id: product.id, name: product.name, price: product.price, image: product.image },
      qty,
    );
    toast.fire({ icon: "success", title: `${qty} × ${product.name} added 🌶️` });
  };

  const handleOrderNow = () => {
    const message =
      `*New Order — ${BRAND.name}* 🌶️\n\n` +
      `• ${qty} × ${product.name} — RS ${total.toLocaleString()}\n\n` +
      `*Total:* RS ${total.toLocaleString()}\n\nThank you!`;
    window.open(
      `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary"
            >
              <ArrowLeft className="h-4 w-4" /> <span className="hidden sm:inline">Back</span>
            </button>
            <Link
              to="/"
              className="hidden items-center gap-2 font-display text-base font-bold tracking-wide text-foreground md:flex"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-fire shadow-glow">
                🌶️
              </span>
              SPICY <span className="text-primary">FOODS</span>
            </Link>
          </div>

          <Link
            to="/"
            className="flex items-center gap-2 font-display text-base font-bold tracking-wide text-foreground md:hidden"
          >
            SPICY <span className="text-primary">FOODS</span>
          </Link>

          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-fire px-1.5 text-xs font-bold text-primary-foreground">
              {cartCount}
            </span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-6 md:pt-10">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li aria-hidden>›</li>
            <li>{product.category.title}</li>
            <li aria-hidden>›</li>
            <li className="truncate text-foreground">{product.name}</li>
          </ol>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-border bg-muted shadow-card">
            <div className="relative aspect-4/3 w-full">
              <img
                src={img(product.image, 1200)}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              {product.badge && (
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-gradient-fire px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-glow">
                  <Flame className="h-3 w-3" /> {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {product.category.title}
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 font-display text-2xl font-bold text-primary">
              RS {product.price.toLocaleString()}
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Quantity + actions */}
            <div className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-muted-foreground">Quantity</span>
                <div className="flex items-center gap-2 rounded-xl border border-border bg-background p-1">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition hover:bg-muted"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-display text-lg font-bold">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition hover:bg-muted"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm font-medium text-muted-foreground">Total</span>
                <span className="font-display text-2xl font-bold text-foreground">
                  RS {total.toLocaleString()}
                </span>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleAdd}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-fire px-5 py-3 font-bold uppercase tracking-wide text-primary-foreground shadow-glow transition hover:opacity-90 active:scale-[0.98]"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleOrderNow}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-primary px-5 py-3 font-bold uppercase tracking-wide text-primary transition hover:bg-primary/10"
                >
                  Order on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-foreground mb-6">You may also like</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/menu/${p.id}`}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:border-primary/60"
                >
                  <div className="aspect-4/3 overflow-hidden bg-muted">
                    <img src={img(p.image, 600)} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-3">
                    <p className="truncate font-display text-sm font-semibold text-foreground">{p.name}</p>
                    <p className="text-xs font-medium text-primary">RS {p.price}+</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <Footer />
    </div>
  );
}
