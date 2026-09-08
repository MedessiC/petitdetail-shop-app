/**
 * Données mockup initiales (équivalent d'un "seed" de base de données).
 * Ces enregistrements ne persistent pas côté serveur : ils sont chargés en
 * mémoire puis, si disponible, conservés dans le localStorage du navigateur.
 */
import colliers from "@/assets/colliers.jpg";
import bracelets from "@/assets/bracelets.jpg";
import bagues from "@/assets/bagues.jpg";

import type { Category, Order, OrderItem, Product } from "./types";

export const IMAGES = { colliers, bracelets, bagues };

export const seedCategories: Category[] = [
  { id: "cat-1", nom: "Colliers", slug: "colliers" },
  { id: "cat-2", nom: "Bracelets", slug: "bracelets" },
  { id: "cat-3", nom: "Bagues", slug: "bagues" },
];

export const seedProducts: Product[] = [
  {
    id: "prod-1",
    nom: "Collier Perle Douce",
    description:
      "Une chaîne fine dorée rehaussée d'une perle unique. Le détail discret qui illumine une tenue du quotidien comme une soirée à Cotonou.",
    prix: 15000,
    category_id: "cat-1",
    genre: "femme",
    images: [colliers],
    stock: 12,
    actif: true,
  },
  {
    id: "prod-2",
    nom: "Collier Chaîne Maille",
    description:
      "Maille ovale dorée, longueur ajustable. Se porte seul ou superposé avec un collier plus court.",
    prix: 18500,
    category_id: "cat-1",
    genre: "homme",
    images: [colliers],
    stock: 8,
    actif: true,
  },
  {
    id: "prod-3",
    nom: "Bracelet Perles Nacrées",
    description:
      "Perles nacrées et intercalaires dorés montés sur fil élastique. Confort parfait au poignet.",
    prix: 9500,
    category_id: "cat-2",
    genre: "mixte",
    images: [bracelets],
    stock: 20,
    actif: true,
  },
  {
    id: "prod-4",
    nom: "Duo Bracelets Charme",
    description:
      "Deux bracelets à porter ensemble : perles claires et fermoir aimanté doré. Idéal en cadeau.",
    prix: 17000,
    category_id: "cat-2",
    genre: "femme",
    images: [bracelets],
    stock: 10,
    actif: true,
  },
  {
    id: "prod-5",
    nom: "Bague Anneau Fin",
    description:
      "Anneau lisse doré, silhouette minimale. Se superpose facilement avec d'autres bagues.",
    prix: 7500,
    category_id: "cat-3",
    genre: "femme",
    images: [bagues],
    stock: 25,
    actif: true,
  },
  {
    id: "prod-6",
    nom: "Duo Bagues Superposées",
    description:
      "Deux anneaux fins dorés pensés pour être portés ensemble. L'élégance sans effort.",
    prix: 12000,
    category_id: "cat-3",
    genre: "mixte",
    images: [bagues],
    stock: 15,
    actif: true,
  },
];

export const seedOrders: Order[] = [
  {
    id: "ord-1",
    client_nom: "Aïcha Dossou",
    client_telephone: "+229 97 12 34 56",
    adresse: "Quartier Fidjrossè, Cotonou",
    statut: "en attente",
    total: 24500,
    cree_le: "2026-08-28T10:15:00.000Z",
  },
  {
    id: "ord-2",
    client_nom: "Marc Agbodjan",
    client_telephone: "+229 96 88 22 10",
    adresse: "Haie Vive, rue 12, Cotonou",
    statut: "livrée",
    total: 12000,
    cree_le: "2026-08-30T16:40:00.000Z",
  },
];

export const seedOrderItems: OrderItem[] = [
  { id: "oi-1", order_id: "ord-1", product_id: "prod-1", quantite: 1, prix_unitaire: 15000 },
  { id: "oi-2", order_id: "ord-1", product_id: "prod-3", quantite: 1, prix_unitaire: 9500 },
  { id: "oi-3", order_id: "ord-2", product_id: "prod-6", quantite: 1, prix_unitaire: 12000 },
];
