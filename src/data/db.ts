/**
 * COUCHE DONNÉES (MOCK).
 *
 * ⚠️ Aucune de ces opérations n'écrit dans une vraie base de données.
 * L'état vit en mémoire et est copié dans le localStorage du navigateur pour
 * survivre aux rechargements. Les modifications faites depuis /admin sont donc
 * locales à l'appareil.
 *
 * Migration Supabase : garder exactement les mêmes fonctions exportées et
 * remplacer leur corps par des requêtes `supabase.from(...)`.
 */
import { useSyncExternalStore } from "react";

import {
  seedCategories,
  seedOrderItems,
  seedOrders,
  seedProducts,
} from "./seed";
import type { Category, Order, OrderItem, OrderStatus, Product } from "./types";

interface Database {
  products: Product[];
  categories: Category[];
  orders: Order[];
  order_items: OrderItem[];
  cart_adds: Record<string, number>; // statistique mockup : ajouts au panier par produit
}

const STORAGE_KEY = "petitdetail.db.v1";

function initialDb(): Database {
  return {
    products: seedProducts,
    categories: seedCategories,
    orders: seedOrders,
    order_items: seedOrderItems,
    cart_adds: {},
  };
}

let db: Database = initialDb();
let hydrated = false;
const listeners = new Set<() => void>();

function load() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) db = { ...initialDb(), ...(JSON.parse(raw) as Database) };
  } catch {
    /* données locales illisibles : on repart du seed */
  }
}

function commit(next: Database) {
  db = next;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    } catch {
      /* quota indisponible : l'état reste en mémoire */
    }
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  load();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const emptyDb = initialDb();

/** Hook de lecture réactive de la base mockup. */
export function useDb(): Database {
  return useSyncExternalStore(
    subscribe,
    () => {
      load();
      return db;
    },
    () => emptyDb,
  );
}

export function getDb(): Database {
  load();
  return db;
}

const uid = (prefix: string) =>
  `${prefix}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

/* ---------------------------- Produits ---------------------------- */

export function createProduct(input: Omit<Product, "id">): Product {
  const product: Product = { ...input, id: uid("prod") };
  commit({ ...getDb(), products: [...getDb().products, product] });
  return product;
}

export function updateProduct(id: string, patch: Partial<Omit<Product, "id">>) {
  commit({
    ...getDb(),
    products: getDb().products.map((p) => (p.id === id ? { ...p, ...patch } : p)),
  });
}

export function deleteProduct(id: string) {
  commit({ ...getDb(), products: getDb().products.filter((p) => p.id !== id) });
}

/* --------------------------- Catégories --------------------------- */

export function createCategory(input: Omit<Category, "id">): Category {
  const category: Category = { ...input, id: uid("cat") };
  commit({ ...getDb(), categories: [...getDb().categories, category] });
  return category;
}

export function updateCategory(id: string, patch: Partial<Omit<Category, "id">>) {
  commit({
    ...getDb(),
    categories: getDb().categories.map((c) => (c.id === id ? { ...c, ...patch } : c)),
  });
}

export function deleteCategory(id: string) {
  commit({ ...getDb(), categories: getDb().categories.filter((c) => c.id !== id) });
}

/* --------------------------- Commandes ---------------------------- */

export interface NewOrderInput {
  client_nom: string;
  client_telephone: string;
  adresse: string;
  items: { product_id: string; quantite: number; prix_unitaire: number }[];
}

export function createOrder(input: NewOrderInput): Order {
  const total = input.items.reduce((s, i) => s + i.prix_unitaire * i.quantite, 0);
  const order: Order = {
    id: uid("ord"),
    client_nom: input.client_nom,
    client_telephone: input.client_telephone,
    adresse: input.adresse,
    statut: "en attente",
    total,
    cree_le: new Date().toISOString(),
  };
  const items: OrderItem[] = input.items.map((i) => ({ ...i, id: uid("oi"), order_id: order.id }));
  const current = getDb();
  commit({
    ...current,
    orders: [order, ...current.orders],
    order_items: [...current.order_items, ...items],
  });
  return order;
}

export function updateOrderStatus(id: string, statut: OrderStatus) {
  commit({
    ...getDb(),
    orders: getDb().orders.map((o) => (o.id === id ? { ...o, statut } : o)),
  });
}

/* -------------------------- Statistiques -------------------------- */

export function trackCartAdd(product_id: string, quantite = 1) {
  const current = getDb();
  commit({
    ...current,
    cart_adds: {
      ...current.cart_adds,
      [product_id]: (current.cart_adds[product_id] ?? 0) + quantite,
    },
  });
}
