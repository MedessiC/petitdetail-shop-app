/**
 * Types de la couche données.
 *
 * IMPORTANT (migration future) : ces types reproduisent exactement le schéma
 * prévu pour la base de données (Supabase). Les données actuelles sont des
 * mockups en mémoire / localStorage. Pour brancher Supabase plus tard,
 * il suffira de remplacer l'implémentation de `src/data/db.ts` par des appels
 * réseau — aucune signature ni aucun champ ne change.
 */

export interface Category {
  id: string;
  nom: string;
  slug: string;
}

export interface Product {
  id: string;
  nom: string;
  description: string;
  prix: number; // en FCFA
  category_id: string;
  images: string[];
  stock: number;
  actif: boolean;
}

export type OrderStatus = "en attente" | "confirmée" | "livrée" | "annulée";

export interface Order {
  id: string;
  client_nom: string;
  client_telephone: string;
  adresse: string;
  statut: OrderStatus;
  total: number;
  cree_le: string; // ISO date
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantite: number;
  prix_unitaire: number;
}
