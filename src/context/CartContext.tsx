/**
 * Panier géré entièrement côté client (React Context + localStorage).
 * Aucune persistance serveur : à brancher plus tard sur Supabase si besoin.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { trackCartAdd } from "@/data/db";

export interface CartItem {
  product_id: string;
  nom: string;
  prix_unitaire: number;
  image: string;
  quantite: number;
}

interface CartContextValue {
  items: CartItem[];
  total: number;
  nombreArticles: number;
  ajouter: (item: Omit<CartItem, "quantite">, quantite?: number) => void;
  changerQuantite: (product_id: string, quantite: number) => void;
  retirer: (product_id: string) => void;
  vider: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "petitdetail.cart.v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const ajouter = useCallback((item: Omit<CartItem, "quantite">, quantite = 1) => {
    setItems((prev) => {
      const existant = prev.find((i) => i.product_id === item.product_id);
      if (existant) {
        return prev.map((i) =>
          i.product_id === item.product_id ? { ...i, quantite: i.quantite + quantite } : i,
        );
      }
      return [...prev, { ...item, quantite }];
    });
    trackCartAdd(item.product_id, quantite);
  }, []);

  const changerQuantite = useCallback((product_id: string, quantite: number) => {
    setItems((prev) =>
      quantite <= 0
        ? prev.filter((i) => i.product_id !== product_id)
        : prev.map((i) => (i.product_id === product_id ? { ...i, quantite } : i)),
    );
  }, []);

  const retirer = useCallback((product_id: string) => {
    setItems((prev) => prev.filter((i) => i.product_id !== product_id));
  }, []);

  const vider = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      total: items.reduce((s, i) => s + i.prix_unitaire * i.quantite, 0),
      nombreArticles: items.reduce((s, i) => s + i.quantite, 0),
      ajouter,
      changerQuantite,
      retirer,
      vider,
    }),
    [items, ajouter, changerQuantite, retirer, vider],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart doit être utilisé dans un CartProvider");
  return ctx;
}
