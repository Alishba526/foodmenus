import { menu, deals, type MenuItem, type Deal } from "@/data/menu";

export type ProductView = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  tags: string[];
  badge?: string;
  /** Bullet list (e.g. deal contents) shown in the detail page */
  extraLines?: string[];
  /** Where this product lives, used for the back link / breadcrumb */
  category: { id: string; title: string };
};

const itemIndex = new Map<string, ProductView>();

for (const section of menu) {
  for (const item of section.items as MenuItem[]) {
    itemIndex.set(item.id, {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description,
      tags: item.tags,
      badge: item.badge,
      category: { id: section.id, title: section.title },
    });
  }
}

for (const deal of deals as Deal[]) {
  itemIndex.set(deal.id, {
    id: deal.id,
    name: deal.name,
    price: deal.price,
    image: deal.image,
    description: deal.description,
    tags: deal.tags,
    extraLines: deal.items,
    category: { id: "deals", title: "Value Deals" },
  });
}

export function findProduct(id: string): ProductView | undefined {
  return itemIndex.get(id);
}

export function relatedProducts(product: ProductView, limit = 4): ProductView[] {
  const pool: ProductView[] = [];
  for (const view of itemIndex.values()) {
    if (view.id === product.id) continue;
    if (view.category.id === product.category.id) pool.push(view);
  }
  return pool.slice(0, limit);
}
