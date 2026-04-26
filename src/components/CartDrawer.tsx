import { useState } from "react";
import { cart, useCart } from "@/store/cart";
import { BRAND, img } from "@/data/menu";
import { toast, confirmFire, Swal } from "@/lib/swal";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const lines = useCart();
  const [notes, setNotes] = useState("");
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const count = lines.reduce((s, l) => s + l.qty, 0);

  const handleClear = async () => {
    const r = await confirmFire({
      title: "Clear cart?",
      text: "All items will be removed.",
      confirmText: "Clear",
      icon: "warning",
    });
    if (r.isConfirmed) {
      cart.clear();
      toast.fire({ icon: "info", title: "Cart cleared" });
    }
  };

  const placeOrder = async () => {
    if (!lines.length) {
      toast.fire({ icon: "warning", title: "Your cart is empty" });
      return;
    }
    const r = await confirmFire({
      title: "Place order on WhatsApp?",
      text: `Total: RS ${total.toLocaleString()} — opens WhatsApp to confirm.`,
      confirmText: "Place Order",
      icon: "question",
    });
    if (!r.isConfirmed) return;

    const lineText = lines
      .map((l) => `• ${l.qty} × ${l.name} — RS ${(l.price * l.qty).toLocaleString()}`)
      .join("\n");
    const message =
      `*New Order — ${BRAND.name}* 🌶️\n\n` +
      lineText +
      `\n\n*Total:* RS ${total.toLocaleString()}` +
      (notes ? `\n\n*Notes:* ${notes}` : "") +
      `\n\nThank you!`;
    const url = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    Swal.fire({
      icon: "success",
      title: "Order sent!",
      text: "We'll confirm on WhatsApp shortly.",
      background: "#1f1611",
      color: "#fef3c7",
      confirmButtonColor: "#f59e0b",
    });
    cart.clear();
    setNotes("");
    onClose();
  };

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-border bg-background shadow-2xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-border p-5">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">Your Order</h3>
            <p className="text-xs text-muted-foreground">
              {count} item{count === 1 ? "" : "s"}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {lines.length > 0 && (
              <button
                onClick={handleClear}
                aria-label="Clear cart"
                title="Clear cart"
                className="rounded-full p-2 text-muted-foreground hover:bg-card hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-full p-2 text-muted-foreground hover:bg-card hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-5">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-card">
                <ShoppingBag className="h-9 w-9 text-muted-foreground" />
              </div>
              <p className="font-display text-lg font-semibold text-foreground">
                Your cart is empty
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Add items from the menu to get started
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {lines.map((l) => (
                <li key={l.id} className="flex gap-3 rounded-xl border border-border bg-card p-3">
                  <img
                    src={img(l.image, 200)}
                    alt={l.name}
                    loading="lazy"
                    decoding="async"
                    className="h-16 w-16 shrink-0 rounded-lg object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-foreground">{l.name}</p>
                      <button
                        onClick={() => {
                          cart.remove(l.id);
                          toast.fire({ icon: "info", title: `${l.name} removed` });
                        }}
                        aria-label="Remove"
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-primary">
                      RS {(l.price * l.qty).toLocaleString()}
                    </p>
                    <div className="mt-auto flex items-center gap-2">
                      <button
                        onClick={() => cart.setQty(l.id, l.qty - 1)}
                        aria-label="Decrease"
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-border hover:bg-muted"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">{l.qty}</span>
                      <button
                        onClick={() => cart.setQty(l.id, l.qty + 1)}
                        aria-label="Increase"
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-border hover:bg-muted"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-border p-5">
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Delivery Instructions
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              placeholder="Address, landmarks, etc."
              className="mt-2 w-full resize-none rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
            />
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Total</span>
              <span className="font-display text-2xl font-bold text-foreground">
                RS {total.toLocaleString()}
              </span>
            </div>
            <button
              onClick={placeOrder}
              className="mt-4 w-full rounded-xl bg-gradient-fire py-3 font-bold uppercase tracking-wide text-primary-foreground shadow-glow transition hover:opacity-90 active:scale-[0.98]"
            >
              Place Order on WhatsApp
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
