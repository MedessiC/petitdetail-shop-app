/**
 * Back-office admin — DONNÉES MOCKUP UNIQUEMENT.
 *
 * ⚠️ Authentification volontairement simplifiée (mot de passe en dur côté
 * client) et modifications non persistées dans une vraie base : tout est
 * stocké en mémoire + localStorage. À remplacer par Supabase Auth + tables
 * réelles lors de la migration.
 */
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import {
  createCategory,
  createProduct,
  deleteCategory,
  deleteProduct,
  updateCategory,
  updateOrderStatus,
  updateProduct,
  useDb,
} from "@/data/db";
import { IMAGES } from "@/data/seed";
import type { OrderStatus, Product } from "@/data/types";
import { formatDate, formatFCFA } from "@/lib/format";

const MOT_DE_PASSE_ADMIN = "petitdetail2026"; // en dur : provisoire

const STATUTS: OrderStatus[] = ["en attente", "confirmée", "livrée", "annulée"];

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Administration — petitdétail." },
      { name: "description", content: "Espace d'administration interne de la boutique petitdétail." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Administration — petitdétail." },
      { property: "og:description", content: "Espace interne de gestion petitdétail." },
    ],
  }),
  component: Admin,
});

const input =
  "min-h-11 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground";
const btn =
  "min-h-11 bg-foreground px-4 text-xs uppercase tracking-[0.18em] text-background transition hover:opacity-85";
const btnGhost = "min-h-11 border border-border px-4 text-xs uppercase tracking-[0.18em]";

function Admin() {
  const [connecte, setConnecte] = useState(false);
  const [mdp, setMdp] = useState("");
  const [onglet, setOnglet] = useState<"tableau" | "produits" | "categories" | "commandes">(
    "tableau",
  );

  if (!connecte) {
    return (
      <div className="mx-auto max-w-sm px-4 py-24">
        <h1 className="font-display text-3xl">Administration</h1>
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setConnecte(mdp === MOT_DE_PASSE_ADMIN);
          }}
        >
          <input
            type="password"
            className={input}
            placeholder="Mot de passe"
            value={mdp}
            onChange={(e) => setMdp(e.target.value)}
          />
          <button type="submit" className={`${btn} w-full`}>
            Se connecter
          </button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">
          Accès provisoire par mot de passe unique, en attendant une vraie authentification.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl">Administration</h1>
      <p className="mt-2 text-xs text-muted-foreground">
        Les modifications sont enregistrées localement sur cet appareil, pas dans une base de
        données.
      </p>

      <nav className="mt-6 flex flex-wrap gap-2">
        {(
          [
            ["tableau", "Tableau de bord"],
            ["produits", "Produits"],
            ["categories", "Catégories"],
            ["commandes", "Commandes"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setOnglet(id)}
            className={onglet === id ? btn : btnGhost}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-10">
        {onglet === "tableau" && <TableauDeBord />}
        {onglet === "produits" && <Produits />}
        {onglet === "categories" && <Categories />}
        {onglet === "commandes" && <Commandes />}
      </div>
    </div>
  );
}

function TableauDeBord() {
  const { orders, products, cart_adds } = useDb();
  const top = useMemo(
    () =>
      Object.entries(cart_adds)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5),
    [cart_adds],
  );
  const chiffre = orders.reduce((s, o) => s + o.total, 0);

  return (
    <div className="space-y-10">
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["Commandes", String(orders.length)],
          ["En attente", String(orders.filter((o) => o.statut === "en attente").length)],
          ["Total commandé", formatFCFA(chiffre)],
        ].map(([label, valeur]) => (
          <div key={label} className="border border-border p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
            <p className="mt-2 font-display text-3xl">{valeur}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="font-display text-2xl">Produits les plus ajoutés au panier</h2>
        {top.length === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">Aucun ajout au panier pour l'instant.</p>
        ) : (
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {top.map(([pid, n]) => (
              <li key={pid} className="flex justify-between py-3 text-sm">
                <span>{products.find((p) => p.id === pid)?.nom ?? pid}</span>
                <span>{n} ajout(s)</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const produitVide = (category_id: string): Omit<Product, "id"> => ({
  nom: "",
  description: "",
  prix: 0,
  category_id,
  genre: "mixte",
  images: [IMAGES.colliers],
  stock: 0,
  actif: true,
});

function Produits() {
  const { products, categories } = useDb();
  const [brouillon, setBrouillon] = useState<Omit<Product, "id">>(
    produitVide(categories[0]?.id ?? ""),
  );

  return (
    <div className="space-y-10">
      <form
        className="grid gap-4 border border-border p-5 sm:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!brouillon.nom.trim()) return;
          createProduct(brouillon);
          setBrouillon(produitVide(categories[0]?.id ?? ""));
        }}
      >
        <h2 className="font-display text-2xl sm:col-span-2">Nouveau produit</h2>
        <input
          className={input}
          placeholder="Nom"
          value={brouillon.nom}
          onChange={(e) => setBrouillon({ ...brouillon, nom: e.target.value })}
        />
        <input
          className={input}
          type="number"
          placeholder="Prix (FCFA)"
          value={brouillon.prix || ""}
          onChange={(e) => setBrouillon({ ...brouillon, prix: Number(e.target.value) })}
        />
        <textarea
          className={`${input} sm:col-span-2`}
          placeholder="Description"
          value={brouillon.description}
          onChange={(e) => setBrouillon({ ...brouillon, description: e.target.value })}
        />
        <select
          className={input}
          value={brouillon.category_id}
          onChange={(e) => setBrouillon({ ...brouillon, category_id: e.target.value })}
        >
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nom}
            </option>
          ))}
        </select>
        <select
          className={input}
          value={brouillon.genre ?? "mixte"}
          onChange={(e) => setBrouillon({ ...brouillon, genre: e.target.value as Product["genre"] })}
        >
          <option value="femme">Femme</option>
          <option value="homme">Homme</option>
          <option value="mixte">Mixte</option>
        </select>
        <input
          className={input}
          type="number"
          placeholder="Stock"
          value={brouillon.stock || ""}
          onChange={(e) => setBrouillon({ ...brouillon, stock: Number(e.target.value) })}
        />
        <button type="submit" className={`${btn} sm:col-span-2`}>
          Ajouter le produit
        </button>
      </form>

      <div className="space-y-4">
        {products.map((p) => (
          <div key={p.id} className="grid gap-3 border border-border p-4 sm:grid-cols-6">
            <input
              className={`${input} sm:col-span-2`}
              value={p.nom}
              onChange={(e) => updateProduct(p.id, { nom: e.target.value })}
            />
            <input
              className={input}
              type="number"
              value={p.prix}
              onChange={(e) => updateProduct(p.id, { prix: Number(e.target.value) })}
            />
            <select
              className={input}
              value={p.category_id}
              onChange={(e) => updateProduct(p.id, { category_id: e.target.value })}
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nom}
                </option>
              ))}
            </select>
            <select
              className={input}
              value={p.genre ?? "mixte"}
              onChange={(e) => updateProduct(p.id, { genre: e.target.value as Product["genre"] })}
            >
              <option value="femme">Femme</option>
              <option value="homme">Homme</option>
              <option value="mixte">Mixte</option>
            </select>
            <input
              className={input}
              type="number"
              value={p.stock}
              onChange={(e) => updateProduct(p.id, { stock: Number(e.target.value) })}
            />
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-xs">
                <input
                  type="checkbox"
                  checked={p.actif}
                  onChange={(e) => updateProduct(p.id, { actif: e.target.checked })}
                />
                Actif
              </label>
              <button
                type="button"
                className="min-h-11 text-xs underline"
                onClick={() => deleteProduct(p.id)}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Categories() {
  const { categories } = useDb();
  const [nom, setNom] = useState("");

  return (
    <div className="space-y-8">
      <form
        className="flex flex-wrap gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (!nom.trim()) return;
          createCategory({
            nom: nom.trim(),
            slug: nom
              .trim()
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/[^a-z0-9]+/g, "-"),
          });
          setNom("");
        }}
      >
        <input
          className={`${input} max-w-xs`}
          placeholder="Nouvelle catégorie"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <button type="submit" className={btn}>
          Ajouter
        </button>
      </form>

      <div className="space-y-3">
        {categories.map((c) => (
          <div key={c.id} className="flex flex-wrap items-center gap-3 border border-border p-3">
            <input
              className={`${input} max-w-xs`}
              value={c.nom}
              onChange={(e) => updateCategory(c.id, { nom: e.target.value })}
            />
            <input
              className={`${input} max-w-xs`}
              value={c.slug}
              onChange={(e) => updateCategory(c.id, { slug: e.target.value })}
            />
            <button
              type="button"
              className="min-h-11 text-xs underline"
              onClick={() => deleteCategory(c.id)}
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Commandes() {
  const { orders, order_items, products } = useDb();

  return (
    <div className="space-y-4">
      {orders.length === 0 && <p className="text-sm text-muted-foreground">Aucune commande.</p>}
      {orders.map((o) => (
        <div key={o.id} className="border border-border p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-display text-xl">{o.client_nom}</p>
              <p className="text-sm text-muted-foreground">
                {o.client_telephone} · {o.adresse}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatDate(o.cree_le)} · {o.id}
              </p>
            </div>
            <div className="text-right">
              <p className="font-display text-xl">{formatFCFA(o.total)}</p>
              <select
                className={`${input} mt-2`}
                value={o.statut}
                onChange={(e) => updateOrderStatus(o.id, e.target.value as OrderStatus)}
              >
                {STATUTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <ul className="mt-3 border-t border-border pt-3 text-sm text-muted-foreground">
            {order_items
              .filter((i) => i.order_id === o.id)
              .map((i) => (
                <li key={i.id}>
                  {products.find((p) => p.id === i.product_id)?.nom ?? i.product_id} × {i.quantite}{" "}
                  — {formatFCFA(i.prix_unitaire * i.quantite)}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
