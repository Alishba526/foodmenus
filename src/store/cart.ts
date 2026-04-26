import { useSyncExternalStore } from "react";

export type CartLine = {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

let state: CartLine[] = [];
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export const cart = {
  add(item: Omit<CartLine, "qty">, qty = 1) {
    const existing = state.find((l) => l.id === item.id);
    if (existing) {
      state = state.map((l) => (l.id === item.id ? { ...l, qty: l.qty + qty } : l));
    } else {
      state = [...state, { ...item, qty }];
    }
    emit();
  },
  remove(id: string) {
    state = state.filter((l) => l.id !== id);
    emit();
  },
  setQty(id: string, qty: number) {
    if (qty <= 0) return cart.remove(id);
    state = state.map((l) => (l.id === id ? { ...l, qty } : l));
    emit();
  },
  clear() {
    state = [];
    emit();
  },
  subscribe(l: () => void) {
    listeners.add(l);
    return () => listeners.delete(l);
  },
  get() {
    return state;
  },
};

export function useCart() {
  return useSyncExternalStore(cart.subscribe, cart.get, cart.get);
}
